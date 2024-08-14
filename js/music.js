const musicItems = document.querySelectorAll('.music-item');
const musicPlayer = document.getElementById('music-player');
musicItems.forEach(item => {
  item.addEventListener('click', () => {
    const musicSrc = item.getAttribute('data-src');
    musicPlayer.src = musicSrc;
  });
});