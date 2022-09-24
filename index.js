var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var innerButton=this.innerHTML;
      soundOver(innerButton);
      animate(innerButton);
      remove(innerButton);

    }
    
    
    );
}
document.addEventListener("keypress", function(event) {
      soundOver(event.key);
      animate(event.key);
      remove(event.key);
});
function soundOver(sound) {
   switch(sound) {
    case "w":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var tom5=new Audio("sounds/snare.mp3");
        tom5.play();
        break;
    case "k":
        var tom6=new Audio("sounds/kick-bass.mp3");
        tom6.play();
        break;
    case "l":
        var tom7=new Audio("sounds/crash.mp3");
        tom7.play();
        break;
   }
}
function animate(letter) {
    document.querySelector("."+letter).classList.add("pressed");
    setTimeout( function() {
        document.querySelector("."+letter).classList.remove("pressed");
    },100);

}

    
