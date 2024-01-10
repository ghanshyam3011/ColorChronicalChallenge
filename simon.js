let gameSeq = [];
let userSeq= [];

let h2 = document.querySelector("h2");
h2.style.color = "blue";
h2.style.backgroundColor = "yellow";
let colors = ["green","pink","blue","orange"];

let stared = false;
let level = 0;
let highest = level;
document.addEventListener("keypress",function(){
    if(stared == false){
        console.log("game started");

        stared = true;
        levelUp();
       
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function levelUp(){
    userSeq =[];
    level++;
    if(highest>level){
        console.log("You achived Highest Score");
    }
    h2.innerText = `Level ${level}`;
    let randInd = Math.floor(Math.random()*3);
    let randColor = colors[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
}
function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerText= "Game Over! Your Score is "+level;  
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn); 
    console.log(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    stared = false;
    level = 0;
    userSeq = [];
    gameSeq = [];

}