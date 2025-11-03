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
}

document.querySelector("#mave").addEventListener("click", maveF);

function maveF() {
  console.log("maveF er trykket paa");
  document.querySelector(".info-text h2").textContent = "Mave";
}
