//document.querySelectorAll("button").addEventListener("click",drum)
var count = 0
//var audio = new Audio("sounds/tom-1.mp3");

while (count < 7){
    document.querySelectorAll(".drum")[count].addEventListener("click",drum)

    count += 1
}
//document.querySelector("button").addEventListener("click",drum)
function drum(){
    var cell = this.innerHTML          //ditecting if the mouse was pressed on the image 
    makesound(cell)
    buttonAnimation(cell)

    document.addEventListener("keypress",function(event){  //checking if the key was pressed or not 
        makesound(event.key)
        buttonAnimation(cell)
    })






    

function makesound(cell){
    switch(cell){       //switch method this is 
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


}}
//document.addEventListener("keypress",function(event){
    //var cell = event.key
//})
function buttonAnimation(cell){
    var activebutton = document.querySelector("."+cell)
    activebutton.classList.add("pressed")      //adding class to my html code 

setTimeout(function(){
    activebutton.classList.remove("pressed")      //removig class from my html code and by this it is making an animation
},100)

}
