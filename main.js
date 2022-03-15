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

const $massage = document.getElementById("message");
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

  cardEl.id = idx;
  cardEl.className = "card";

  cardEl.onclick = card_click;

  board.appendChild(cardEl);
}

let arr_clicks = [];
let score = 0;
let number_of_founded_cards = 0;

function card_click(evn) {
  const cardEl = evn.target;
  const idx = cardEl.id;
  $massage.innerHTML = "";

  // if less then two cards - will show. if more will hide

  cardEl.innerHTML = cards[idx].name;
  cardEl.className = "showCard";
  if (arr_clicks[0] == idx) {
    alert("you can't coose the same card. please chopose again");
    return;
  } else {
    arr_clicks.push(idx);
    if (arr_clicks.length == 2) {
      if (are_equal(cards, arr_clicks[0], arr_clicks[1])) {
        score++;
        number_of_founded_cards += 2;

        $massage.innerHTML = `you are wright.the cards are the same  ( ${
          cards[arr_clicks[0]].name
        } )`;

        setTimeout(() => {
          hide_elements_by_id(arr_clicks[0]);
          hide_elements_by_id(arr_clicks[1]);
          arr_clicks = [];
        }, 200);

        if (number_of_founded_cards == cards.length) {
          alert("End of game");
          return;
        }
      } else {
        setTimeout(() => {
          document.getElementById(arr_clicks[0]).innerHTML = "";
          document.getElementById(arr_clicks[1]).innerHTML = "";
          document.getElementById(arr_clicks[0]).className = "card";
          document.getElementById(arr_clicks[1]).className = "card";
          arr_clicks = [];
        }, 200);
      }
    }
  }
}

// *****
// level 04: son function
// ******

function hide_elements_by_id(id) {
  document.getElementById(id).className = "hidecard";
  document.getElementById(id).innerHTML = "";
  document.getElementById(id).onclick = "";
}

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
