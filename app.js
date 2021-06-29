let randomNum = Math.floor((Math.random() * 100) + 1);

function favNumber() {
  console.log(parseInt(randomNum));
  let para = document.getElementById("message");
  let para2 = document.getElementById("message2");
  let userGuess = prompt("Enter a number between 1 and 100:");
  if (isNaN(userGuess)) {
    alert("That is not a number. Enter a number from 1 to 100!");
  } else if (userGuess < 1 || userGuess > 100) {
    alert("Please enter a number between 1 and 100!");
  } else if (parseInt(userGuess) < randomNum) {
      para.textContent = "That number is too low!"
      para.style.color = "red";
    } else if (parseInt(userGuess) > randomNum) {
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
// function gameOver() {
  
// }