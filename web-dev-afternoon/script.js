var zaehler = 0;

document.getElementById("kaufen").onclick = function () {

    var eingabefeld = document.getElementById("eingabefeld");

    if (eingabefeld.value === "") { // wenn
        // dann
        return;
    } else {
        // ansonsten
        zaehler = zaehler + 1;
        

        var neuerEintrag = document.createElement("li");
        neuerEintrag.innerText = "Eintrag " + zaehler + ": " + eingabefeld.value;

        eingabefeld.value = "";

        document.getElementById("liste").appendChild(neuerEintrag);
    }
}