const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

document.getElementById("helloFamily").onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

document.getElementById("submitPassword").onclick = () => {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "c5d9") {
    screen2.classList.remove("active");
    screen3.classList.add("active");
    startTyping();
  } else {
    alert("Wrong Password");
  }
};

function getNewYear() {
  const now = new Date();
  let year = now.getFullYear() + 1;

  const dec31 = new Date(now.getFullYear(), 11, 31, 23, 58);
  if (now >= dec31) {
    year = now.getFullYear() + 1;
  }

  if (year > 2040) year = 2040;
  return year;
}

const fullText = `HAPPY NEW YEAR MY FAMILY ${getNewYear()} 💌
I hope we will have more joy & happiness in this year 🫶🏻


                                                YOUR DEEKSHITH WITH LOVE 🫶🏻`;

let index = 0;

function startTyping() {
  const target = document.getElementById("animatedText");
  const interval = setInterval(() => {
    target.textContent += fullText.charAt(index);
    index++;
    if (index >= fullText.length) clearInterval(interval);
    target.parentElement.scrollTop = target.parentElement.scrollHeight;
  }, 40);
}
