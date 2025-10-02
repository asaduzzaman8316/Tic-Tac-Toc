let boxs = document.querySelectorAll(".box");
let winText = document.querySelector("#winText");
let newGame = document.querySelector("#newGame");
let winsms = document.querySelector("#mesg");
let resetGame = document.querySelector("#reset");
let winningSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let isZerro = true;
let count = 0;

// this is control 'o' and 'x' print 
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (isZerro) {
            box.innerText = "0";
            isZerro = false;
        }
        else {
            box.innerText = "X";
            isZerro = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();
        
        if(count >= 9 && !isWinner)
        {
            showDrow();
        }
    })

})

//if game is draw 
const showDrow = () =>{
    winsms.innerText = "Ohh! Game is Draw, Start New Game";
    winText.classList.remove("hidden");
    newGame.classList.remove("hidden");
    resetGame.classList.add("hidden");
}


//this is check win 
const checkwinner = () => {
    for (let arry of winningSet) {
        let posi1Val = boxs[arry[0]].innerText;
        let posi2Val = boxs[arry[1]].innerText;
        let posi3Val = boxs[arry[2]].innerText;

        if (posi1Val != "" && posi2Val != "" && posi3Val != "") {
            if (posi1Val === posi2Val && posi2Val === posi3Val) {
                showinner(posi1Val);
                return true;
            }
        }

    }
}


//this is show winning text
const showinner = (winner) => {
    winsms.innerText = `Congratulation ${winner} Is Win `
    winText.classList.remove("hidden");
    newGame.classList.remove("hidden");
}

//this is reset the game and start new game
const reset = () => {
    isZerro = true;
    count = 0;
    //enadle all button
    for (let btn of boxs) {
        btn.disabled = false;
    }
    //ste all vale is zeroo
    for (let arry of winningSet) {
        boxs[arry[0]].innerText = "";
        boxs[arry[1]].innerText = "";
        boxs[arry[2]].innerText = "";
    }
    //hide the text and new game button
    winText.classList.add("hidden");
    newGame.classList.add("hidden");
    resetGame.classList.remove("hidden");

}

newGame.addEventListener("click", (reset));
resetGame.addEventListener("click", (reset));
