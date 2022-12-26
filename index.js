const btn = document.querySelector(".btn");
console.log(btn);
const video = document.querySelector(".background-video");
console.log(video);
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");
console.log(preloader);

btn.addEventListener("click", () => {
  console.log("click");
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = "-2";
});
