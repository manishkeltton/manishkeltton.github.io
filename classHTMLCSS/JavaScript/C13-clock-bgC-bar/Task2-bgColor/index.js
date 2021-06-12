var index = 0;
function loadEvents() {
  const events = document.querySelector("body");
  console.log("events >", events);
  const changeCol = ["purple", "white", "blue", "black", "aqua"];
  events.style.backgroundColor = changeCol[index];
  index++;
  if (index == changeCol.length) {
    index = 0;
  }
}

setInterval(loadEvents, 2000);
window.onload = function (e) {
  console.log(e);
  loadEvents();
};
