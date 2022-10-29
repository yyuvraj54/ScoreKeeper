const maxscore=document.querySelector("#gamescore");
const player1=document.querySelector("#player1Score");
const player2=document.querySelector("#player2Score");
const Button1=document.querySelector("#button1");
const Button2=document.querySelector("#button2");
const Reset=document.querySelector("#Reset");

let maxpoint=3;
let p1point=0;
let p2point=0;
let gameover=false;
Button1.addEventListener("click",function (e){
    maxpoint=maxscore.value;
    p1point=player1.innerText;

    if(maxpoint<=p1point){
        gameover=true;
        player2.style.color="red";
        player1.style.color="green";
        
    }
    else if(!gameover){
        p1point++;
        player1.innerText=p1point;
        
    }
    
});
Button2.addEventListener("click",function(e){
    maxpoint=maxscore.value;
    p2point=player2.innerText;


    if(maxpoint<=p2point){
        gameover=true;
        player1.style.color="red";
        player2.style.color="green";
        
    }
    else if(!gameover){
        p2point++;
        player2.innerText=p2point;
    }

});



let reset=function (){
    player1.innerText=0;
    player2.innerText=0;
    player1.style.color="black";
    player2.style.color="black";
}

Reset.addEventListener("click",function(e){
    gameover=false;
    reset();
});

maxscore.addEventListener("change",function(e){
    reset();
});