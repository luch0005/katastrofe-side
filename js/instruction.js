console.log("Loaded instructions");

document.querySelector("#mund").addEventListener("click", mundF);

function mundF() {
  console.log("mundF er trykket paa");

  document.querySelector(".info-text h2").textContent = "Mund";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

document.querySelector("#kloer").addEventListener("click", kloerF);

function kloerF() {
  console.log("kloerF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Klør";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sine kløer som sit våben. De er skarpe som knive, ligeså vel som de bruger deres kløer til at forsvare sig selv (læs: gøre skade på andre) er de også gode til at tælle en stak penge lynhurtigt.";
}

document.querySelector("#krop").addEventListener("click", kropF);

function kropF() {
  console.log("kropF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Kroppen";
  document.querySelector(".info-text p").textContent =
    "De små gnavere har den helt perfekte størrelse til at gå under radaren og snige sig ind gennem de mindste steder. På trods af den lille krop er der massere plads til udvidelse, hamsteret bruger starten af livet på at lære at udvide kroppen så meget som muligt så den er klar til de store smugle og røveri missioner.";
}
