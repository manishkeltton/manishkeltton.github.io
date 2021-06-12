function eventListners() {}

document
  .getElementById("customer-form")
  .addEventListener("submit", function (event) {
    //   name
    // colosure
    // author

    const customer = new Customer(name.value, course.value, author.value);
    const display = new Display();
  });

function Display() {
  this.name = document.getElementById("customer-name");
  this.course = document.getElementById("customer-course");
  this.author = document.getElementById("customer-author");
  this.customer = document.querySelector("customer-list");
}

function Customer(name, course, author) {
  this.name = name;
  this.course = course;
  this.author = author;
}

Display.prototype.addCustomer = function (customer) {
  const div = document.createElement("div");
};

Display.prototype.clearFields = function () {
  this.name.value = "";
  this.course.value = "";
  this.author = "";
};

Display.prototype.validateFields = function () {};
