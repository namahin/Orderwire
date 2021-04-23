// toggler script
$(document).ready(function () {
  $(".toggler").click(function () {
      $(".side-bar").toggleClass("side-show");
  });
});

// toggler icon script
$(document).ready(function () {
  $(".toggler").click(function () {
      $(".toggler-icon").toggleClass("toggler-close");
  });
});

$(document).ready(function () {
  $("#toggler-btn").click(function () {
      $(".toggler").toggleClass("toggler-dark");
  });
});


//install WOW js
new WOW().init();

// video container js
let playButton = document.querySelector('.video-container a');
playButton.addEventListener('click', playVideo);

function playVideo(e) {
  e.preventDefault();
  let videoContainer = this.parentNode;
  let videoUrl = this.href;
  let videoId = videoUrl.split('.com/')[1];
  let iframeUrl;

  if (videoUrl.includes('vimeo')) {
    // vimeo
    videoId = videoId.split('?')[0];
    iframeUrl = `//player.vimeo.com/video/${videoId}?autoplay=1`;
  } else {
    // youtube
    videoId = videoId.split('v=')[1];
    iframeUrl = `//www.youtube.com/embed/${videoId}?autoplay=1`;
  }

  videoContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;
}