let cell= document.querySelectorAll(".cell");
let reset= document.querySelector("#reset");
let msgcont= document.querySelector(".msgcontainer");
let msg= document.querySelector("#msg");
let newGame= document.querySelector("#newGame");

let turnO=true;



const disableCells = () => {
    cell.forEach((cell) => {            // ek bar win hogaya phir nahi change kar sakte
        cell.disabled = true;
    });
}

const showWinMsg = (winner) => {
    msg.innerText = `Congratulations, Player ${winner} wins!`;
    msgcont.classList.remove("hide");
    disableCells();
}

cell.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(turnO){
            cell.innerText="O";
            turnO=false;
        }else{
            cell.innerText="X";
            turnO=true;
        }
        cell.disabled=true;   // wapas change nhi kar sakte
        checkWin();
    });
});

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const checkWin=()=>{
    for(let i=0;i<win.length;i++){
        let [a,b,c]=win[i];
        if(cell[a].innerText!="" && cell[b].innerText!="" && cell[c].innerText!=""){
            if(cell[a].innerText===cell[b].innerText && cell[b].innerText===cell[c].innerText){
                showWinMsg(cell[a].innerText);
                cell[a].classList.add("win");
                cell[b].classList.add("win");
                cell[c].classList.add("win");
                return;
            }
        }
    }
}

// draw case

const checkDraw = () => {
    let allDisabled = true;
    cell.forEach((cell) => {
        if (cell.innerText === "") {
            allDisabled = false;
        }
    });
    if (allDisabled) {
        msg.innerText = "It's a draw!";
        msgcont.classList.remove("hide");
        disableCells();
    }
}
cell.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        checkDraw();
    });
});


reset.addEventListener("click",()=>{
    cell.forEach((cell)=>{
        cell.innerText="";
        cell.disabled=false;
        cell.classList.remove("win");
    });
    msgcont.classList.add("hide");   
    turnO=true;
}); 

newGame.addEventListener("click",()=>{
    cell.forEach((cell)=>{
        cell.innerText="";
        cell.disabled=false;
        cell.classList.remove("win");
    });
    msgcont.classList.add("hide");   
    turnO=true;
});