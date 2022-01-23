// Variables
const VS_knop = document.getElementById("ValueSwap");
const todayButton = document.getElementById("todayButton");
const date = new Date();
const tA_tijd = document.getElementById("tA_tijd");
const currentTime = date.toISOString().substring(11, 16);
const optiesToggle = document.getElementById("options");
const optionsFieldset = document.getElementById("opties");

// Datumprikker selector
const picker = datepicker('#tA_datum', {
    startDay: 1, // Calendar week starts on a Monday.
    customDays: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
    customMonths: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'october', 'novemeber', 'december'],
    formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
    }

})

//Stel datum en tijd in bij laden website
changeDateToToday();
changeTimeToNow();

//Tijdzone correctie timeinput
let dateCorrection = new Date;
document.getElementById("tA_tijd").value = dateCorrection.toLocaleString("nl-NL", {
    hour: "2-digit",
    minute: "2-digit"
});

//Functie om swap van data mogelijk te maken in de reisplanner
VS_knop.addEventListener("click", travelAdvice_ValueSwap);

function travelAdvice_ValueSwap() {
    var tmp = document.getElementById("Station-Van").value;
    document.getElementById("Station-Van").value = document.getElementById("Station-Naar").value;
    document.getElementById("Station-Naar").value = tmp;
}

//Functie om datum naar vandaag te wijzigen bij knopdruk
todayButton.addEventListener("click", changeDateToToday)

function changeDateToToday() {
    picker.setDate(new Date(), true);
    changeTimeToNow();
};

function changeTimeToNow() {
    let dateCorrection = new Date;
    document.getElementById("tA_tijd").value = dateCorrection.toLocaleString("nl-NL", {
        hour: "2-digit",
        minute: "2-digit"
    });
};

// Opties weergeven/verbergen dmv toggle
optiesToggle.addEventListener("click", toggleOptions);

function toggleOptions(event) {
    optionsFieldset.classList.toggle("showOptions");
}