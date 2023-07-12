const form = document.getElementById('search-form');
const usernameInput = document.getElementById('username-input');
const userProfile = document.getElementById('user-profile');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  if (username !== '') {
    fetchUserData(username);
  }
});

function fetchUserData(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      displayUserProfile(data);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function displayUserProfile(user) {
  userProfile.innerHTML = `
    <img src="${user.avatar_url}" alt="User Avatar">
    <h2>${user.name}</h2>
  `;
}
