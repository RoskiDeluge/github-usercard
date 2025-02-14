/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/RoskiDeluge")
  .then(response => {
    const newUser = response;
    // console.log(newUser);
    parentElement.appendChild(userCards(newUser));
  });

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

const followersArray = [];

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

const userCards = (user) => {

  const userCard = document.createElement('div');
  const userImg = document.createElement('img');
  const userInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const userUname = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  userCard.appendChild(userImg);
  userCard.appendChild(userInfo);
  userInfo.appendChild(userName);
  userInfo.appendChild(userUname);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);

  userCard.classList.add('card');
  userInfo.classList.add('card-info');
  userName.classList.add('name');
  userUname.classList.add('username');

  userImg.src = user.data.avatar_url;
  userName.textContent = user.data.name;
  userUname.textContent = user.data.login;
  userLocation.textContent = user.data.location;
  userProfile.textContent = user.data.html_url;
  userFollowers.textContent = user.data.followers_url;
  userFollowing.textContent = user.data.following_url;
  userBio.textContent = user.data.bio;


  return userCard

}

const parentElement = document.querySelector('.cards');

// parentElement.appendChild(userCards());

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
