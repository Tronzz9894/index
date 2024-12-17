const form = document.getElementById("exam-form");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const answers = [];
  const questions = form.querySelectorAll(".question");
  questions.forEach((question) => {
    const radios = question.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      if (radio.checked) {
        answers.push(radio.value);
      }
    });
  });
  const correctAnswers = ["A", "C", "A"];
  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    }
  });
  resultsDiv.innerHTML = `Your score is ${score} out of ${correctAnswers.length}`;
});
