let currentVideoIndex = 0;
let currentPlayer;

const videos = document.querySelectorAll('.video');

function showVideo(index) {
  if (currentPlayer) {
    currentPlayer.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }

  videos.forEach((video, i) => {
    if (i === index) {
      video.classList.add('active');
      currentPlayer = video.querySelector('iframe').contentWindow;
    } else {
      video.classList.remove('active');
    }
  });
}

function prevVideo() {
  currentVideoIndex = (currentVideoIndex === 0) ? videos.length - 1 : currentVideoIndex - 1;
  // Redirect to the new HTML file when clicking "Previous" button
  window.location.href = 'newdin.html'; // Change 'index.html' to your desired HTML file
}

function nextVideo() {
  currentVideoIndex = (currentVideoIndex === videos.length - 1) ? 0 : currentVideoIndex + 1;
  // Redirect to the new HTML file when clicking "Next" button
  window.location.href = 'newdin.html'; // Change 'index.html' to your desired HTML file
}