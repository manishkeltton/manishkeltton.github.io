// Event -> onclick, onload, mouseover, alert.... etc these all are event.
// EventListener ->

// grab all the elements

const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.querySelector(".modal-container");

// toggle nav bar
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
  document.body.addEventListener("click", closeNavBar);
});
// toggle -> If force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).
//        -> Returns true if token is now present, and false otherwise.
//        -> Throws a "SyntaxError" DOMException if token is empty.
//        -> Throws an "InvalidCharacterError" DOMException if token contains any spaces.

// show the modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
// classList -> Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.
// add() -> Adds all arguments passed, except those already present.
//       -> Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
//       -> Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

// hide the modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// remove -> Removes arguments passed, if they are present.
//        -> Throws a "SyntaxError" DOMException if one of the arguments is the empty string.
//        -> Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

// hide the modal on outside click
window.addEventListener("click", (e) =>{
  e.target == modal ? modal.classList.remove("show-modal") : false
});

// target -> Returns the object to which event is dispatched (its target).
