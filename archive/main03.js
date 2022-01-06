// let cardArray=[]

// *****
// level 01: define variable
// ******

const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
];

// *****
// level 02:main
// ******
// if want to onload only after that the page load. so it will kenw the elements
// window.onload = () => {
//   main();
// };
window.onload = () => {
  main();
};

function main() {
  // see the current array card in console. if was suffele we wil lsee it

  shufleArray(cards);

  // create all cards elements to the bord
  for (idx in cards) {
    creatCardElement(idx);
  }
}

// *****
// level 03: parent function
// ******

function creatCardElement(idx) {
  const board = document.getElementById("board");
  const cardEl = document.createElement("div");
  // <div></div>
  // div> card
  // cardEl.innerHTML = card.name;
  cardEl.id = idx;
  // div class=class .so it will get the desighn
  cardEl.className = "card";
  // when the element will be clicl it will do function
  //   add the element to the board and it will see on page
  // div id=board
  // div class=card>c</div>

  // when the element will be clicl it will do function
  // optoin1:
  // cardEl.addEventListener("click", alert(card.name));
  // optoin2:
  cardEl.onclick = card_click;

  // (evn) => {
  //   console.log(evn.target.innerHTML);
  //   console.log(evn);
  //   // alert(card.name);
  // };
  board.appendChild(cardEl);
}

// *****
// level 04: son function
// ******

function shufleArray(arr) {
  for (i = 0; i < 100; i++) {
    let num1 = randRange(0, arr.length);
    let num2 = randRange(0, arr.length);
    if (num1 == num2) {
      i--;
      continue;
    }
    swap(arr, num1, num2);
  }
}
// *****
// level 05: grandson function
// ******

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function are_equal(arr, i, j) {
  return arr[i].name == arr[j].name && i != j;
}

let arr_clicks = [];
// what to do when clicks
let card_click = (evn) => {
  console.log(evn.target.id);
  const cardEl = evn.target;
  const idx = cardEl.id;
  console.log(cards[idx]);
  // if less then to cards - will show. if more will hide

  cardEl.innerHTML = cards[idx].name;
  arr_clicks.push(idx);
  console.log(arr_clicks);
  if (arr_clicks.length == 2) {
    if (cards[arr_clicks[0]].name == cards[arr_clicks[1]].name) {
      alert(
        `you are wright.the cards are the same: ${cards[arr_clicks[0]].name}`
      );
    }

    setTimeout(() => {
      document.getElementById(arr_clicks[0]).innerHTML = "";
      document.getElementById(arr_clicks[1]).innerHTML = "";
      arr_clicks = [];
    }, 100);
    // cardEl.innerHTML = cards[idx].name;
    // arr_clicks.push(idx);
  }
  // console.log(evn);
  // alert(card.name);
};

// function f() {
//   alert("DDD");
// }
