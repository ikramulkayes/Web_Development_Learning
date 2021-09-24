//document.querySelectorAll("button").addEventListener("click",drum)
var count = 0
//var audio = new Audio("sounds/tom-1.mp3");

while (count < 7){
    document.querySelectorAll(".drum")[count].addEventListener("click",drum)

    count += 1
}
//document.querySelector("button").addEventListener("click",drum)
function drum(){
    var cell = this.innerHTML
    switch(cell){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break
        case "d":
            var tom1 = new Audio("sounds/tom-4.mp3")
            tom1.play()
            break        
        case "j":
            var tom1 = new Audio("sounds/snare.mp3")
            tom1.play()
            break  
        case "k":
            var tom1 = new Audio("sounds/crash.mp3")
            tom1.play()
            break   
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break 
        default:
            console.log(cell)   



    }


}