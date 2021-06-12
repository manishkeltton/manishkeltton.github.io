const video = document.querySelector(".screen");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Event Listeners
video.addEventListener("click", () => {
    const playBtn = document.querySelector(".btn");
    console.log("playBtn =>", playBtn);
});
// video.addEventListener("play", updatePlayIcon);
// stop.addEventListener("click", stopVideo);
