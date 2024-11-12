window.addEventListener('DOMContentLoaded', bunny, false);
window.addEventListener('DOMContentLoaded', init, false);


function init() {

    highlightFirstPersonCheckbox.addEventListener('change', toggleHighlight, false);
    highlightNameCheckbox.addEventListener('change', toggleHighlight, false);
    }
    
    
    function toggleHighlight() {
        var targetClass;
        switch (this.id) {
            case "highlightFirstPersonCheckbox":
                targetClass = "FirstPerson";
                break;
            case "highlightNameCheckbox":
                targetClass = "name";
                break;
        }
        var elements = document.getElementsByClassName(targetClass);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("highlight");
        }
    } 


function bunny() {
    alert ('Welcome to my website! Looks like the page loaded...almost! Just click here to continue, please.');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', changeColor2, false);
    buttons[2].addEventListener('click', newFunction, false);
    buttons[3].addEventListener('click', anotherFunction, false);
}


function changeColor() {
    var p1 = document.getElementById("colorToggle")
    { p1.style.backgroundColor = "skyblue";  }
    
    /* here, style is a *property*: the CSS styling of an element: 
     * you can add a CSS property after invoking style. */ 
    // ^I will keep this in mind for the future
}

function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "lightcoral";
        pars[i].style.fontWeight="bold";
    }
}



function newFunction() {
    alert ('Huh? What do you want now?');
    var li = document.getElementsByTagName('li')
    for (var i = 0, length = li.length; i < length; i++) {
        li[i].style.backgroundColor = "MistyRose";
    }
}


function anotherFunction() {
    var anothers = document.getElementsByClassName('power')
    for (var i = 0, length = anothers.length; i < length; i++) {
        anothers[i].style.cssText = "text-decoration: underline; text-decoration-style: wavy;"
    }
}

//Exercise 2 note
function yetAnotherFunction() {
    anothers = document.getElementsByClassName('checkmarked')
    for (var i = 0, length = anothers.length; i < length; i++) {
        anothers[i].style.cssText = "text-decoration: underline; text-decoration-style: bold;"
    }
}

