function eventListners() {
  const showBtn = document.getElementById("show-btn");
  const questionCard = document.querySelector(".question-card");
  const form = document.getElementById("question-form");
  const questionInput = document.getElementById("question-input");
  const answerInput = document.getElementById("answer-input");
  const questionList = document.getElementById("question-list");
}

const card = new Card();

// show the question form
showBtn.addEventListener("click", function () {
  card.showQuestion(questionCard);
});

form.addEventListener("submit", function (event) {
  const qValue = questionInput.value;
  const aValue = answerInput.value;
});
card.prototype.editValues = function () {
  // grabbbing the values from the card
};

card.prototype.deleteCard = function () {
  let c = event.target;
  questionList.removeChild();
};
