let randomNum = Math.floor((Math.random() * 100) + 1);

function favNumber() {
  let para = document.getElementById("message");
  let para2 = document.getElementById("message2");
  let userGuess = document.getElementById("userGuess").value;
  if (userGuess < randomNum) {
      para.textContent = "That number is too low!"
      para.style.color = "red";
    } else if (userGuess > randomNum) {
      para.textContent = "That number is too high!";
      para.style.color = "red";
    } else {
      para.textContent = "Congratulations, you have guessed the number!!!!!";
      para2.textContent = "Thanks for playing! Game will restart in 5 seconds!";
      para.style.color = "green";
      para2.style.color = "green";
      setTimeout(() => { location.reload() }, 5000);
    };
};

function myFunction() {
  document.getElementById("userGuess").reset();
};