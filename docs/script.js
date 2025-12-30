const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const bgMusic = document.getElementById("bgMusic");

document.getElementById("helloFamily").onclick = () => {
  screen1.classList.remove("active");
  screen2.classList.add("active");
};

document.getElementById("submitPassword").onclick = () => {
  if (passwordInput.value === "c5d9") {
    screen2.classList.remove("active");
    screen3.classList.add("active");

    bgMusic.volume = 0.25;
    bgMusic.play();

    startTyping();
    startParticles();
  } else {
    alert("Wrong Password");
  }
};

function getNewYear() {
  const now = new Date();
  let year = now.getFullYear() + 1;
  if (year > 2040) year = 2040;
  return year;
}

const fullText = `HAPPY NEW YEAR MY FAMILY ${getNewYear()} 💌
I hope we will have more joy & happiness in this year 🫶🏻


                                                YOUR DEEKSHITH WITH LOVE 🫶🏻`;

let i = 0;

function startTyping() {
  const target = document.getElementById("animatedText");
  const card = target.parentElement;

  const typing = setInterval(() => {
    target.textContent += fullText.charAt(i);
    i++;
    card.scrollLeft = card.scrollWidth;

    if (i >= fullText.length) {
      clearInterval(typing);
      setTimeout(openGallery, 2000); // move to Interface 4
    }
  }, 40);
}

function openGallery() {
  screen3.classList.remove("active");
  screen4.classList.add("active");
}

/* Emoji particles */
const emojis = ["🤗", "🥳", "💐", "🎂"];

function startParticles() {
  setInterval(() => {
    const e = document.createElement("div");
    e.className = "particle";
    e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.getElementById("particles").appendChild(e);
    setTimeout(() => e.remove(), 7000);
  }, 400);
}
