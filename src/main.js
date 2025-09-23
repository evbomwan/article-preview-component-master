import './style.css'
// Getting the elements from the DOM
const profile = document.getElementById('profile');
const shareBtn = document.getElementById('share-btn');
const shareBar = document.getElementById('share-bar');
const shareBack = document.getElementById('share-back');
// adding event listener to the share button
shareBtn.addEventListener('click', () => {
  profile.classList.add('hidden');
  shareBar.classList.remove('hidden');
})
// adding event listener to the back button
shareBack.addEventListener('click', () => {
  shareBar.classList.add('hidden');
  profile.classList.remove('hidden');
});