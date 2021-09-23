var n1 = Math.random()*6 
var n2 = Math.random()*6 
n1 = Math.floor(n1) +1
n2 = Math.floor(n2) +1
var flag = true


var count = 0



if (flag === true){

if (n1>n2){
    document.querySelector("h1").innerHTML = "Player 1 Wins" 

}else if(n1<n2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}else{
    document.querySelector("h1").innerHTML = "Draw"
}
document.querySelector(".img1").setAttribute("src","images/dice"+String(n1)+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+String(n2)+".png")

}