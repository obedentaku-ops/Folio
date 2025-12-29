
/* ======================================================
   LOADING.JS
   Déclenché UNIQUEMENT après clic sur "VOIR"
   Intro et cartes totalement intactes
====================================================== */

/* ======================================================
   FONCTION PRINCIPALE
   Lance la séquence de chargement
====================================================== */
function startLoadingSequence(targetPage) {

  /* ================== RÉCUP DOM ================== */
  const fade       = document.getElementById("screen-fade");
  const loading    = document.getElementById("loading-screen");
  const percent    = document.getElementById("loadingPercent");
  const bar        = document.getElementById("loadingBar");
  const text       = document.getElementById("loadingText");
  const starField  = document.getElementById("starField");

  /* ================== SÉCURITÉ ================== */
  if (!fade || !loading) {
    console.error("❌ Loading elements manquants dans le HTML");
    return;
  }

  /* ======================================================
     ÉTAPE 1 — RESET VISUEL
     (évite bugs si on relance le loading)
  ===================================================== */
  percent.textContent = "0%";
  bar.style.width = "0%";
  percent.style.color = "#ffffff";
  text.textContent = "Connexion à l’univers...";
  starField.innerHTML = "";

  /* ======================================================
     ÉTAPE 2 — CRÉATION DES ÉTOILES
  ===================================================== */
  for (let i = 0; i < 60; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top  = Math.random() * 100 + "%";
    starField.appendChild(star);
  }

  /* ================== ÉTOILES FILANTES ================== */
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("div");
    star.className = "star filante";
    star.style.left = Math.random() * 100 + "%";
    star.style.top  = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starField.appendChild(star);
  }

  /* ======================================================
     ÉTAPE 3 — ASSOMBRISSEMENT DE L’ÉCRAN
  ===================================================== */
  fade.classList.add("show");

  /* ======================================================
     ÉTAPE 4 — AFFICHAGE DU LOADING
  ===================================================== */
  setTimeout(() => {
    loading.classList.add("active");

    /* ================== SCÉNARIO DE CHARGEMENT ================== */
    const steps = [
      { p: 0,   t: "Connexion à l’univers..." },
      { p: 18,  t: "Stabilisation orbitale..." },
      { p: 34,  t: "Synchronisation des données..." },
      { p: 52,  t: "Alignement stellaire..." },
      { p: 68,  t: "Calcul des trajectoires..." },
      { p: 84,  t: "Ouverture du portail..." },
      { p: 96,  t: "Finalisation..." },
      { p: 100, t: "TOUT EST PRÊT !" }
    ];

    let index = 0;

    /* ======================================================
       ÉTAPE 5 — PROGRESSION
    ===================================================== */
    function nextStep() {
      const step = steps[index];

      percent.textContent = step.p + "%";
      bar.style.width = step.p + "%";
      text.textContent = step.t;

      /* ================== FIN ================== */
      if (step.p === 100) {
        percent.style.color = "#42ff7b";

        setTimeout(() => {
          fade.classList.add("show");

          setTimeout(() => {
            window.location.href = targetPage;
          }, 900);

        }, 700);

      } else {
        index++;
        setTimeout(nextStep, 1100 + Math.random() * 900);
      }
    }

    nextStep();

  }, 1600); // explain: fade lent et élégant
}
console.log("REDIRECTION VERS :", tar)