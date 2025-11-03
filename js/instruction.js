console.log("Loaded instructions");

document.querySelector("#mund").addEventListener("click", mundF);

function mundF() {
  console.log("mundF er trykket paa");
}

document.querySelector("#kloer").addEventListener("click", kloerF);

function kloerF() {
  console.log("kloerF er trykket paa");
}

document.querySelector("#mave").addEventListener("click", maveF);

function maveF() {
  console.log("maveF er trykket paa");
}
