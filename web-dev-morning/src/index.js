var zaehler = 0;

document.getElementById("knopf").style = "background: teal";

document.getElementById("knopf").onclick = function() {
  var neuerEintrag = document.createElement("li");
  zaehler = zaehler + 1;

  var eingabebox = document.getElementById("eingabebox");
  var eingegebenerText = eingabebox.value;
  eingabebox.value = "";

  neuerEintrag.innerText = eingegebenerText;
  neuerEintrag.onclick = listenClick;

  if (eingegebenerText === "grün") {
    neuerEintrag.style = "color: green";
  }

  if (eingegebenerText.length > 0) {
    document.getElementById("beispiel").appendChild(neuerEintrag);
  }
};

function listenClick() {
  this.style = "text-decoration: line-through; color: black";
}
