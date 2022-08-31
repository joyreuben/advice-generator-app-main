const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector("p");
const dice = document.getElementById("dice");
  
window.onload = showQuote;

dice.addEventListener("click", function(){
    showQuote();
});

function showQuote(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.innerHTML = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}