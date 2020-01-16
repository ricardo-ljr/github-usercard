/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardContainer = document.querySelector(".cards");

// axios
//   .get("https://api.github.com/users/ricardo-ljr")
//   .then(response => {
//     response.forEach(item => {
//       cardContainer.append(gitCard(response[item]));
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "ricardo-ljr",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

followersArray
  .forEach(followed => {
    axios.get(`https://api.github.com/users/${followed}`).then(response => {
      console.log(response);
      cardContainer.append(gitCard(response.data));
    });
  })
  .catch(err => {
    console.log(err);
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitCard(object) {
  const newCard = document.createElement("div"),
    newImage = document.createElement("img"),
    newCardInfo = document.createElement("div"),
    newName = document.createElement("h3"),
    newUsername = document.createElement("p"),
    newLocation = document.createElement("p"),
    newProfile = document.createElement("p"),
    newAddress = document.createElement("a"),
    newFollowers = document.createElement("p"),
    newFollowing = document.createElement("p"),
    newBio = document.createElement("p");

  // Setup

  newCard.append(newImage);
  newCard.append(newCardInfo);
  newCardInfo.append(newName);
  newCardInfo.append(newUsername);
  newCardInfo.append(newProfile);
  newCardInfo.append(newLocation);
  newProfile.append(newAddress);
  newCardInfo.append(newFollowers);
  newCardInfo.append(newFollowing);
  newCardInfo.append(newBio);

  // Classes

  newCard.classList.add("card");
  newCardInfo.classList.add("card-info");
  newName.classList.add("name");
  newUsername.classList.add("username");

  // Text Content

  newImage.src = object.avatar_url;
  newName.textContent = object.name;
  newUsername.textContent = object.login;
  newAddress.href = object.html_url;

  newLocation.textContent = `Location: ${object.location}`;
  newProfile.textContent = `Profile: ${object.html_url}`;
  newFollowers.textContent = `Followers: ${object.followers_url}`;
  newFollowing.textContent = `Following:  ${object.following_url}`;
  newBio.textContent = `Bio: ${object.bio}`;

  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
