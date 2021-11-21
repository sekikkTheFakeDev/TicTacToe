const body = getComputedStyle(document.body);

const boxes = document.getElementsByClassName("gridelem");
const wonScreen = document.getElementById("won");
const whoWon = document.getElementById("who");
const whatHappened = document.getElementById("what");

var which = true;
var xwin = false;
var owin = false;

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("gridelem") && !(event.target.classList.contains("X")) && !(event.target.classList.contains("O"))) {
        if (which == true) {
            event.target.classList.add("X");
            event.target.classList.add("active");
            which = false;

            if (boxes[0].classList.contains("X") && boxes[1].classList.contains("X") && boxes[2].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[3].classList.contains("X") && boxes[4].classList.contains("X") && boxes[5].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[6].classList.contains("X") && boxes[7].classList.contains("X") && boxes[8].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[0].classList.contains("X") && boxes[4].classList.contains("X") && boxes[8].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[2].classList.contains("X") && boxes[4].classList.contains("X") && boxes[6].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[0].classList.contains("X") && boxes[3].classList.contains("X") && boxes[6].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[1].classList.contains("X") && boxes[4].classList.contains("X") && boxes[7].classList.contains("X")) {
                xwin = true;
            }
            else if (boxes[3].classList.contains("X") && boxes[5].classList.contains("X") && boxes[8].classList.contains("X")) {
                xwin = true;
            }
        }
        else  {
            event.target.classList.add("O");
            event.target.classList.add("active");
            which = true;

            if (boxes[0].classList.contains("O") && boxes[1].classList.contains("O") && boxes[2].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[3].classList.contains("O") && boxes[4].classList.contains("O") && boxes[5].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[6].classList.contains("O") && boxes[7].classList.contains("O") && boxes[8].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[0].classList.contains("O") && boxes[4].classList.contains("O") && boxes[8].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[2].classList.contains("O") && boxes[4].classList.contains("O") && boxes[6].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[0].classList.contains("O") && boxes[3].classList.contains("O") && boxes[6].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[1].classList.contains("O") && boxes[4].classList.contains("O") && boxes[7].classList.contains("O")) {
                owin = true;
            }
            else if (boxes[3].classList.contains("O") && boxes[5].classList.contains("O") && boxes[8].classList.contains("O")) {
                owin = true;
            }
        }

        if (xwin == true) {
            won("X");
        }

        else if (owin == true){
            won("O");
        }

        var activeBoxes = [];
        for (var i = 0; i < boxes.length; i++) {
            if (boxes[i].classList.contains("active")) {
                activeBoxes.push(boxes[i]);
            }
        }
        
        if (activeBoxes.length == 9 && xwin == false && owin == false) {
            wonScreen.style.visibility = "visible";
            whatHappened.innerHTML = "Tie!";
        }
    }
});

function won(who) {
    wonScreen.style.visibility = "visible";
    whoWon.innerHTML = who;
    if (who == "X") {
        whoWon.style.color = body.getPropertyValue("--x");
    }
    else {
        whoWon.style.color = body.getPropertyValue("--o");
    }
} 