window.onload = () => {
  randomUser();
};

const randomUser = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showUser(data);
    });
};

showUser = (user) => {
  document.getElementById("name").innerText = `${user.results[0].name.title}
     ${user.results[0].name.first}
     ${user.results[0].name.last}`;
  document.getElementById("age").innerText = `${user.results[0].dob.age}`;
  document.getElementById("email").innerText = `${user.results[0].email}`;
  document.getElementById("phone").innerText = `${user.results[0].phone}`;
};
