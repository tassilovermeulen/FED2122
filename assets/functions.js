function travelAdvice_ValueSwap() {
    var tmp = document.getElementById("tA_vertrekstation").value;
    document.getElementById("tA_vertrekstation").value = document.getElementById("tA_aankomststation").value;
    document.getElementById("tA_aankomststation").value = tmp;
    }