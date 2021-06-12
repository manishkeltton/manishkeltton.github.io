// gives us a promise -> promise means, it is always allow to give data or not.
fetch("https://api.chucknorris.io/jokes/random")
  // handle a positive response
  // .then()
  // .then()

  // try {

  // } catch (error) {

  // }

  .then((response) => {
    return response.json();
    // console.log("API: ",response.json());
  })
  .then((data) => {
    //   console.log("Data is: ", data);
    var jokes = data.value;
    console.log(jokes);
  });
