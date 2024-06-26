let btn = document.getElementById("calculate-price");
btn.addEventListener("click", function () {

    let name_surname = document.getElementById("name-surname").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

    let sconto = 0;
    let prezzo_biglietto = 0.21 * km;

    if (age === "minorenne") {
        sconto = 0.2
    }

    else if (age === "senior") {
        sconto = 0.4
    }

    let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto);

    // STAMPA DEGLI ELEMENTI SU SCHERMO
    document.getElementById("name_surname").innerHTML = name_surname;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("codice").innerHTML = Math.floor(Math.random() * 100000) + 1;
    document.getElementById("prezzo_finale").innerHTML = prezzo_finale.toFixed(2) + " " + "&euro;"
})
