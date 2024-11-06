let choice = document.querySelectorAll(".c");
let userscore=0;
let compscore=0;
let compsel="";
let us =document.querySelector("#userscore");
let cs =document.querySelector("#compscore");
let result=document.querySelector("#result");
let reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    us.innerText=userscore;
    cs.innerText=compscore;
    result.innerText=`Lets begin the game!`;
})

choice.forEach((opt)=>{
    opt.addEventListener("click",()=>{
        let selected = opt.getAttribute("id");
        // console.log("clicked");//check point
        game(selected);
    })
});

function game(s){
    //selecting computer's choice
    let comp = Math.floor(Math.random()*3);
    if(comp==0)
        compsel = "stone";
    else if(comp==1)
        compsel ="paper";
    else if(comp==2)    
        compsel="scissors";
    //checking who won
    if(s==compsel) //same option
        result.innerText=`Its a draw! user selected ${s} and computer selected ${compsel}`;
    //user wins
    else if ((s=="scissors" && compsel=="paper") || 
            (s=="stone" && compsel=="scissors") || 
            (s=="paper" && compsel=="stone")) {
                userscore++;
                us.innerText=userscore;
                result.innerText=`User won! user selected ${s} and computer selected ${compsel}`;
            }   
    else if ((compsel=="scissors" && s=="paper") || 
            (compsel=="stone" && s=="scissors") || 
            (compsel=="paper" && s=="stone")) {
                compscore++;
                cs.innerText=compscore;
                result.innerText=`Computer won! user selected ${s} and computer selected ${compsel}`;
            }        
}
