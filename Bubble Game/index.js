var timer=30;
function randomNum()
{
    var random=Math.random()*9;
    random=Math.floor(random)+1;
    return random;
}
function makebubble()
{
var outerdiv=document.getElementsByClassName("bubbles")[0]
for(var i=0;i<120;i++)
{
   random=randomNum();
    var create=document.createElement("div");
    create.setAttribute("class","bubble");
    create.textContent=random;
   outerdiv.appendChild(create)
}
}
function changeBubble()
{
var bubbless=document.getElementsByClassName("bubble");
    for(var i=0;i<bubbless.length;i++)
    {
    var rand=randomNum();
    bubbless[i].textContent=rand;
    }
}
var rando=randomNum();
function hitt()
{
    
    document.querySelector("#new").textContent=rando;
}

function runTimer()
{
    var timerint=setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#time").textContent=timer;
        }
        else{

            clearInterval(timerint);
            document.querySelector(".bubbles").innerHTML=`<h1>Game Over<h1>`
        }
    },1000);
}
function newhit()
{
    var rand=randomNum();
    document.querySelector("#new").textContent=rand;
    rando=rand;
}
var score=0;
function clic(){
document.querySelector(".bubbles").addEventListener("click",function(a)
{
    if(a.target.classList.contains("bubble")){
        var clicked=parseInt(a.target.textContent);
    if(clicked==rando)
    {
        score=score+10;
        document.querySelector("#scored").textContent=score;
        newhit();
       changeBubble();
    }
    else{
        score=score-5;
        document.querySelector("#scored").textContent=score;
        newhit();
       changeBubble();
    }
        
    }
})
}
makebubble();
hitt();
runTimer();
clic();