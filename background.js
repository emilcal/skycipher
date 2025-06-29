// background.js
// Choose a random image from a hard-coded array each page-load
(function loadSky () {
  // 1) list of candidate images
  const list = [
    'sky1.jpg',                       // an image in your repo
    'sky2.jpg',                       // another image in your repo
    'https://picsum.photos/seed/sky/1600/900' // remote fallback
  ];

  // 2) pick one at random
  const img = list[Math.floor(Math.random() * list.length)];

  // 3) apply it as the page background
  document.body.style.background =
    `url(${img}) center/cover no-repeat fixed`;
})();
