const question = document.querySelector(".question");
const ball = document.querySelector(".magic-ball");
const answer = document.querySelector(".answer");
const errorMsg = document.querySelector(".error");

const answers = [
  "TAK",
  "NIE.",
  "CIEZKO POWIEDZIEĆ...",
  "NIE CHCESZ ZNAĆ ODPOWIEDZI NA TO PYTANIE",
];

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 5);
  answer.innerHTML = `<span>Odpowiedź:<span> ${answers[number]}`;
};

ball.addEventListener("click", () => {
  if (question.value !== "" && question.value.slice(-1) === "?") {
    generateAnswer();
    errorMsg.textContent = "";
  } else if (question.value !== "" && question.value.slice(-1) !== "?") {
    errorMsg.textContent = 'Pytanie musi zakończyć się znakiem "?".';
    answer.textContent = "";
  } else {
    errorMsg.textContent = "Musisz zadać pytanie";
    answer.textContent = "";
  }
});
