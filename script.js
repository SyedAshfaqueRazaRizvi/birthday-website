
/* SECRET BIRTHDAY PASSWORD
   Current password: nazar
   To change it, edit the text inside quotes below.
*/

document.body.classList.add("locked");

function unlockBirthday() {
  const input = document.getElementById("birthday-password");
  const error = document.getElementById("password-error");
  const screen = document.getElementById("secret-screen");

  const password = "nazar";

  if (input.value.trim().toLowerCase() === password) {
    error.classList.remove("show");
    screen.classList.add("unlocked");
    document.body.classList.remove("locked");

    launchConfetti();

    for (let i = 0; i < 20; i++) {
      setTimeout(createHeart, i * 70);
    }

    setTimeout(() => {
      screen.remove();
    }, 900);

  } else {
    error.classList.remove("show");

    // Restart animation so repeated wrong attempts animate too.
    void error.offsetWidth;
    error.classList.add("show");

    input.value = "";
    input.focus();
  }
}


const heartsContainer = document.getElementById("hearts");
const confettiContainer = document.getElementById("confetti");

const heartSymbols = ["♡", "♥", "💗", "🎀", "✨", "🌸"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-particle";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.color = Math.random() > .5 ? "#ff6fae" : "#ffb0cf";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 700);

function startSurprise() {
  document.getElementById("surprise").scrollIntoView({
    behavior: "smooth"
  });

  launchConfetti();
}

function launchConfetti() {
  const pieces = ["🎀", "💗", "✨", "♡", "🌸", "💕"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (10 + Math.random() * 18) + "px";
    piece.style.animationDelay = Math.random() * 1.5 + "s";
    piece.style.animationDuration = (2.5 + Math.random() * 2.5) + "s";

    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 6000);
  }
}

function blowCandles() {
  const message = document.getElementById("wish-message");
  message.classList.add("show");

  launchConfetti();

  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 50);
  }

  document.querySelector(".blow-btn").textContent = "✨ Wish Made! ✨";
  document.querySelector(".blow-btn").disabled = true;
}

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
