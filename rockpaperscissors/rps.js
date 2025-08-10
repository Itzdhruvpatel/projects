let userscore=0;
let computerscore=0;
let msg=document.querySelector("#msg");
let usd=document.querySelector("#user-score");
let csd=document.querySelector("#computer-score");
let resetbtn=document.querySelector("#reset");

let choices=document.querySelectorAll(".choice");

const compchoice = ()=>{
    let options=["rock","paper","scissors"];
    let randomidx=Math.floor(Math.random()*3);   // math.floor() rounds down to the nearest integer 
    // math.random() generates a random number between 0 and 1, multiplying by 3 gives us a range of 0 to 2.9999, and then rounding down gives us 0, 1, or 2.
    return options[randomidx]; // returns a random choice from the options array
}   

const lose=()=>{
    computerscore++;
    msg.innerText="You lost!";
    csd.textContent=computerscore; 
    msg.style.backgroundColor = "red"; // Change message color to red on loss
}

const draw=()=>{
    msg.innerText="It's a draw!";
    usd.textContent=userscore; 
    csd.textContent=computerscore;
    msg.style.backgroundColor = "blue"; // Change message color to blue on draw 
}

const win=()=>{
    userscore++;
    msg.innerText="You win!";
    usd.textContent=userscore; 
    msg.style.backgroundColor = "green"; // Change message color to green on win
}

const playgame=(userchoice)=>{
console.log("User choice: ", userchoice);
let computerchoice=compchoice();
console.log("Computer choice: ", computerchoice);

if(userchoice === computerchoice){
    draw();
}
else if(userchoice === "rock" && computerchoice === "scissors" || 
        userchoice === "paper" && computerchoice === "rock" || 
        userchoice === "scissors" && computerchoice === "paper"){
    win();
}
else{
    lose();
}
};

resetbtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    usd.textContent = userscore;
    csd.textContent = computerscore;
    msg.innerText = "Make your choice!";
    msg.style.backgroundColor = "#283618"; // Reset message color
});


choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});