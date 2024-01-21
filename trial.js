function changeInvert() {
    var body = document.body;
    var currentInvert = parseInt(getComputedStyle(body).filter.replace("invert(", "").replace("%)", ""));
    var newInvert = 0;
    if (currentInvert === 0) {
        newInvert = 100;
    } else {
        newInvert = 0;
    }
    body.style.filter = "invert(" + newInvert + "%)";
}

function imageInvert(element) {
    var currentInvert = parseInt(getComputedStyle(element).filter.replace("invert(", "").replace("%)", ""));
    var newInvert = 0;
    if (currentInvert === 0) {
        newInvert = 100;
    } else {
        newInvert = 0;
    }
    element.style.filter = "invert(" + newInvert + "%)";
}