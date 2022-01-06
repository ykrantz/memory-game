// let cardArray=[]
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

function shufleArray(arr) {
  for (i = 0; i < 100; i++) {
    let num1 = randArray(0, arr.length);
    let num2 = randArray(0, arr.length);
    if (num1 == num2) {
      continue;
      i--;
    }
    swap(cards, num1, num2);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randArray(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function are_equal(arr, i, j) {
  return arr[i].name == arr[j].name && i != j;
}

function creatCardElement(card) {
  const board = document.getElementById("board");
  // console.log(board);
  //   create elemet of div local. we can create also other elemnt like <p>
  const cardEl = document.createElement("div");
  // <div></div>
  // div> card
  cardEl.innerHTML = card.name;
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
  cardEl.onclick = cardKlick;

  // (evn) => {
  //   console.log(evn.target.innerHTML);
  //   console.log(evn);
  //   // alert(card.name);
  // };
  board.appendChild(cardEl);
}

let cardKlick = (evn) => {
  console.log(evn.target.innerHTML);
  // console.log(evn);
  // alert(card.name);
};

function main() {
  // see the original array card in console
  // console.log([...cards]);
  // see the current array card in console. if was suffele we wil lsee it
  //   console.log(cards);
  //   console.log(Json.stringify(cards));
  // console.log(are_equal(cards, 0, 7));
  shufleArray(cards);
  // console.log(cards);

  // create all cards elements to the bord
  for (card of cards) {
    creatCardElement(card);
  }

  //   let guess1 = Number(prompt("guess first card"));
  //   let guess2 = Number(prompt("guess second card"));

  //   console.log(`the card in index ${guess1} is : ${cards[guess1].name}.
  //   the card in index ${guess2} is : ${cards[guess2].name}.
  //   is they equal? ${are_equal(cards, guess1, guess2)}`);
}
// function f() {
//   alert("DDD");
// }

// if want to onload only after that the page load. so it will kenw the elements
// window.onload = () => {
//   main();
// };

main();
