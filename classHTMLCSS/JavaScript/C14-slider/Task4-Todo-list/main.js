// grab all the elements
var form = document.getElementById("addForm");
const itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
// delete the list
itemList.addEventListener("click", removeItem);
// filter list item
filter.addEventListener("keyup", filterItems);

// add an item

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  //   creating a new list element
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.id = "item1";
  console.log("appendChild =>", document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem));
  console.log("li =>", li);

  //  create a del button
  var deletebtn = document.createElement("button");
  //   added class to the btn
  deletebtn.className = "btn btn-danger btn-sm float-end delete";

  deletebtn.appendChild(document.createTextNode("X"));
  //   append btn to li
  li.appendChild(deletebtn);
  //   append li to list
  itemList.appendChild(li);
  console.log("itemList =>", itemList);
}

// createElement -> (method) Document.createElement<"li">(tagName: "li", options?: ElementCreationOptions): HTMLLIElement (+2 overloads)
//               -> Creates an instance of the element for the specified tag.
//               -> @param tagName — The name of an element.
// className -> Returns the value of element's class content attribute. Can be set to change it.
// createTextNode -> Creates a text string from the specified value.
//                -> @param data — String that specifies the nodeValue property of the text node.
// appendChild ->

// Remove item
function removeItem(e) {
  e.preventDefault();
  var removeItem = document.querySelector("#item1");
  var lis = document.querySelectorAll("#items li");
  console.log("lis =>", lis);
  for (var i = 0; (li = lis[i]); i++) {
    if (removeItem == li) {
      li.parentNode.removeChild(li);
    }
  }
}
const itemValue = document.querySelector("#items").innerText;
console.log("itemValu =>", itemValue);
function filterItems(e) {
  e.preventDefault();
  // var searchValue = document.getElementById("filter").value;
  // console.log("searchValue =>", searchValue);
  // searchValue.toLowerCase();
  const searchText = e.target.value.toLowerCase();

  let tasks = [...itemValue[0]];
  if (tasks.filter(li => li.innerHTML.toLowerCase().indexOf(searchText)) != -1) {
      tasks.forEach(li => li.style.display = "flex");
  } else {
      tasks.forEach(li => li.style.display = "none");
  }
  // grab text
  //   searched item visible , rest are blocked
}
