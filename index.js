var numOfDrum = document.querySelectorAll('.drum').length;

for(i = 0 ;i<numOfDrum; i++ ){
    // this is for the mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click",  function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); /*so when the mouse is clicked on a letter , it will direct to the func "make sound" 
                                     and it will produce the sound for the respective keyword*/ 
    buttonAnimation(buttonInnerHTML)
    
    })
}

//This is for the keyboard pressing
document.addEventListener('keydown',function(event){
    makeSound(event.key)/** suppose when a key 'w' is pressed,the event actually contains all the info including what key is pressed
                        so,using event.key we can get the value of w and pass this as param inside the makeSound func so that it will go on to
                        produce the respective sound using the below defined func */
   buttonAnimation(event.key);
})

// this function will get the input of the key(whether mouse click or keyboard click) and produce the sound.
function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
         case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;     
        default:
            break;
    }
}

// this func is to generate the animation
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey ); //this will go slect the resp keys

    activeButton.classList.add('pressed'); // and add the class .pressed to the button , so that it 
    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
    

}


