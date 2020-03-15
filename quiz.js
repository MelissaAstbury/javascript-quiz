const check = () => {
  let score = 0;
  const inputbox = document.getElementById("textbox").value;
  const radioAnswers = document.querySelector(
    'input[name="questionTwo"]:checked'
  ).value;
  const chosenColor = document.getElementById("colors").selectedIndex;
  const hiddenDiv = document.getElementById("hiddenDiv");
  const hiddenText = document.getElementById("hiddenDiv");

  // inputbox === "London" || inputbox === "london"
  if (inputbox.toLowerCase() === "london") {
    score += 3;
  }
  if (radioAnswers === "spain") {
    score += 3;
  }
  if (chosenColor === 0) {
    score += 3;
  }

  hiddenText.textContent = `You scored ${score}`;
  hiddenDiv.style.display = "block";

  //alert(`You're score is ${score}`);
};
