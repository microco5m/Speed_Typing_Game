const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quotes = "";
let time = 60;
let timer = "";
let mistakes = 0;


function renderNewQuote() {
  let randIndex = Math.floor(Math.random() * paragraphs.length);
  paragraphs[randIndex].split("").forEach(span => {
    let pTag = `<span class="quote-chars">${span}</span>`;
    quoteSection.innerHTML += pTag;
  });
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("startbtn").style.display = "block";
  document.getElementById("stopbtn").style.display = "none";
  userInput.disabled = true;
  renderNewQuote();
};

const startGame = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  timeReduce();
  document.getElementById("startbtn").style.display = "none";
  document.getElementById("stopbtn").style.display = "block";
  userInput.focus();
};

userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");

  quoteChars = Array.from(quoteChars);

  let userInputChars = userInput.value.split("");
  
  quoteChars.forEach((char, index) => {
    if(char.innerText == userInputChars[index]) {
      char.classList.add("pass");
    } else if (userInputChars[index] == null) {
      if(char.classList.contains("pass")){
        char.classList.remove("pass");
      } else {
        char.classList.remove("fail");
      }
    } else {
      if(!char.classList.contains("fail")) {
        mistakes += 1;
        char.classList.add("fail");
      }
      document.getElementById("mistakes").innerText = mistakes;
    }

    let check = quoteChars.every((element) => {
      return element.classList.contains("pass");
    });

    if(check) {
      displayResults();
    };
  });
});

const displayResults = () => {
  document.querySelector(".results").style.display = "block";
  clearInterval(timer);
  document.getElementById("stopbtn").style.display = "none";
  userInput.disabled = true;

  let timeTaken = 1;
  if(time != 0 ){
    timeTaken = (60 - time) / 100;
  }
  document.getElementById("wpm").innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + "wpm";
  document.getElementById("accuracy").innerText = Math.round(((userInput.value.length - mistakes) / userInput.value.length) * 100) + "%";
  document.getElementById("mistake").innerText = mistakes;
};

const timeReduce = () => {
  time = 60;
  timer = setInterval(updateTimer, 1000);
};

function updateTimer() {
  if(time == 0) {
    displayResults();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}