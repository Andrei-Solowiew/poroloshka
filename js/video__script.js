videojs(document.querySelector(".video-js"), {
  language: "ru",
});

document.querySelectorAll('.video-js').forEach(el => {
  videojs(el, {
    language: "ru",
  });
})
