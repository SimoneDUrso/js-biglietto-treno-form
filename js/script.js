let btn = document.getElementById("calculate-price");
btn.addEventListener("click", function () {

    let name_surname = document.getElementById("name-surname").value;
    let km = document.getElementById("km").value;
    let age = document.getElementById("age").value;

    let sconto = 0;
    let prezzo_biglietto = 0.21 * km;

    if (value == "minorenne") {
        sconto = 0.2
    }

    else if (value == "senior") {
        sconto = 0.4
    }

    let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto);

    document.getElementById("prezzo_finale").innerHTML += prezzo_finale.toFixed(2) + " " + "&euro;"
    console.log(prezzo_finale);
})
