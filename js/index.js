for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var pressedBtn = this.innerHTML;
        playSound(pressedBtn);
        btnClickedEffect(pressedBtn);
    });
}

document.addEventListener("keypress",function(event) {

    playSound(event.key);
    btnClickedEffect(event.key);
}); 

function playSound(pressedBtn) {

    switch(pressedBtn) {
        case "w" :
            var tom1 = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s" :
            var tom3 = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d" :
            var tom4 = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j" :
            var snare = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/snare.mp3");
            snare.play();
            break;

        case "k" :
            var crash = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/crash.mp3");
            crash.play();
            break;

        case "l" :
            var kick = new Audio("https://github.com/HeT-Delwadiya/Drum-Kit-Website/blob/main/sounds/kick-bass.mp3");
            kick.play();
            break;
    }

}

function btnClickedEffect(pressedBtn) {

    document.querySelector("."+pressedBtn).classList.add("pressed");

    setTimeout(function() {document.querySelector("."+pressedBtn).classList.remove("pressed");},100)
}