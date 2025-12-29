/* ======================================================
   MAIN.JS — INTRO + CARTES 
====================================================== */

/* ================== RÉCUP DOM ================== */
const introWords = {
  top: document.getElementById("word-top"),
  bottom: document.getElementById("word-bottom")
};

const starsLayer     = document.getElementById("stars");
const wrap           = document.getElementById("wrap");
const cardsContainer = document.getElementById("cardsContainer");

let animLock = true;

/* ======================================================
   ÉTOILES INTRO
====================================================== */
function generateStars(count = 30) {
  if (!starsLayer) return;

  starsLayer.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top  = Math.random() * 100 + "%";
    starsLayer.appendChild(star);
  }
}

/* ======================================================
   INTRO
====================================================== */
function playIntro() {
  generateStars();

  setTimeout(() => introWords.top.classList.add("show"), 600);
  setTimeout(() => introWords.bottom.classList.add("show"), 900);

  setTimeout(() => {
    introWords.top.classList.add("flee");
    introWords.bottom.classList.add("flee");
  }, 3000);

  setTimeout(() => {
    wrap.style.transition = "transform 1s cubic-bezier(.2,.9,.25,1)";
    wrap.style.transform  = "translateY(-100vh)";
    showCards();
    animLock = false;
  }, 4200);
}

/* ======================================================
   APPARITION DES CARTES
====================================================== */
function showCards() {
  const slots = document.querySelectorAll(".card-slot");

  slots.forEach((slot, i) => {
    slot.style.opacity = "0";
    slot.style.transform = "translateY(18vh) scale(.2)";

    setTimeout(() => {
      slot.style.transition = "transform 1s ease, opacity .8s";
      slot.style.opacity = "1";
      slot.style.transform = "translateY(0) scale(1)";
    }, 200 + i * 120);
  });

  setTimeout(attachCardListeners, 900);
}

/* ======================================================
   INTERACTION CARTES
====================================================== */
function attachCardListeners() {
  const cards   = document.querySelectorAll(".card");
  const buttons = document.querySelectorAll(".btn-see");

  /* FLIP CARTE */
  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (animLock) return;

      cards.forEach(c => c.classList.remove("flipped", "centered"));
      card.classList.add("flipped", "centered");
    });
  });

  /* BOUTON VOIR → LOADING */
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      if (animLock) return;

      const card   = btn.closest(".card");
      const target = card?.dataset.target;

      if (!target) {
        console.error("❌ data-target manquant sur la carte");
        return;
      }

      animLock = true;

      console.log("➡️ Chargement vers :", target);
      startLoadingSequence(target);
    });
  });
}

/* ======================================================
   LANCEMENT
====================================================== */
window.addEventListener("load", playIntro);