let boxs = document.querySelectorAll(".box");
let restart = document.querySelector("#reset");
let newgame = document.querySelector("#ngame");
let topcontainer = document.querySelector(".topcontainer");
let winmsg = document.querySelector("#win");

let turnO = true;


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true;
  enabledbox();
  topcontainer.classList.add("hide");
}

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was click")
    if (turnO) {
  box.innerText = "O";
  box.classList.add("o-color");
  box.classList.remove("x-color");
  turnO = false;
} else {
  box.innerText = "X";
  box.classList.add("x-color");
  box.classList.remove("o-color");
  turnO = true;
}
    box.disabled = true;

    checkWinner();
  });
});


const disabledbox = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
}

const enabledbox = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = " ";
    box.classList.remove("o-color", "x-color");
  }
}

const showwinner = (winner) => {
  win.innerText = `Congratulations , Winner is ${winner}`;
  topcontainer.classList.remove("hide");
  disabledbox();
}


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxs[pattern[0]].innerText;
    let pos2Val = boxs[pattern[1]].innerText;
    let pos3Val = boxs[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {


        showwinner(pos1Val);

      }
    }
  }
};

newgame.addEventListener("click", resetgame);
restart.addEventListener("click", resetgame);
