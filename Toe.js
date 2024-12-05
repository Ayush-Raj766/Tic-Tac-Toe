let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let newgame = document.querySelector("#newgame");
let msg1 = document.querySelector("#msgcont");
let msg = document.querySelector("#msg");
let turn0 = true;
var emparr = [];

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const restart1 = () => {
    turn0 = true;
    enabled();
    msg1.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.disabled = true
            }
            
        
        else {

            box.innerText = "X"
            turn0 = true
        }
        if (boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != "" && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != "" && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != "") {
            showwinner2()
        }

        box.disabled = true;
        checkwinner();
    });
    if (turn0 == false) {
        a = 0;
        b = 8
        let r = a + (b - a) * Math.random()
        let p = Math.round(r);
        // console.log(p);
        boxes[p].innerText ="X"
        turn0 = true
    }
});
const disabled = () => {
    for (let randi of boxes) {
        randi.disabled = true
    }
}
const enabled = () => {
    for (let randi of boxes) {
        randi.disabled = false;
        randi.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner} `;
    msg1.classList.remove("hide");
};
const showwinner2 = () => {
    msg.innerText = `oops , match is tie..... `;
    msg1.classList.remove("hide");
};

const checkwinner = () => {
    for (pattern of winpatterns) {
        // console.log(pattern);
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner " + val1)
                showwinner(val1);
                disabled();
                // if(box.innerText !=""){
                //     showwinner2()
                // }

            }
        }

    }

};

newgame.addEventListener("click", restart1);
restart.addEventListener("click", restart1);



// const check = (box) => {
//     for(let randi of boxes){
//         let x = Math.floor((Math.random() * 9) + 1);
//         while(turn0 == true){
//             // box[x]mnb
//         }
//     }
// }
