let cells = document.querySelectorAll(".col");
let btn = document.querySelector(".btn");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let isBoardEmpty = true;

generatingNewNumbers();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    up_slide();
  } else if (e.key === "ArrowDown") {
    down_slide();
  } else if (e.key === "ArrowRight") {
    right_slide();
  } else if (e.key === "ArrowLeft") {
    left_slide();
  }
});

function palce2Or4() {
  return (Math.floor(Math.random() * 2) + 1) * 2;
}

function colorizeCell() {
  for (i = 0; i < cells.length; i++) {
    if (cells[i].innerText == "") {
      cells[i].style.background = "transparent";
    } else if (cells[i].innerText == 2) {
      cells[i].style.background = "#48a036";
    } else if (cells[i].innerText == 4) {
      cells[i].style.background = "#7c6a52";
    } else if (cells[i].innerText == 8) {
      cells[i].style.background = "#7f394c";
    } else if (cells[i].innerText == 16) {
      cells[i].style.background = "#4e7d82";
    } else if (cells[i].innerText == 32) {
      cells[i].style.background = "#344987";
    } else if (cells[i].innerText == 64) {
      cells[i].style.background = "#74af69";
    } else if (cells[i].innerText == 128) {
      cells[i].style.background = "#9baa50";
    } else if (cells[i].innerText == 256) {
      cells[i].style.background = "#706036";
    } else if (cells[i].innerText == 512) {
      cells[i].style.background = "#9e253d";
    } else if (cells[i].innerText == 1024) {
      cells[i].style.background = "#684107";
    } else {
      cells[i].style.background = "#1e5d66";
    }
  }
}

function generatingNewNumbers() {
  let repeat = 1;
  if (isBoardEmpty) {
    isBoardEmpty = false;
    repeat = 2;
  }
  for (let count = 0; count < repeat; count++) {
    for (let b = 0; b < 256; b++) {
      let pos = Math.floor(Math.random() * 16);
      if (cells[pos].innerText === "") {
        cells[pos].innerText = palce2Or4();
        colorizeCell();
        break;
      }
    }
  }
}

let moves = 0;

function moveCounter() {
  moves++;
  movesText = document.querySelector(".moves");
  movesText.innerText = `Moves: ${moves} `;
}

function isGameOver() {
  for (i = 0; i < cells.length; i++) {
    if (cells[i].innerText === "") {
      gameOver = false;
      break;
    }
  }
}

function alertGameOver() {
  gameOver = true;
  isGameOver();
  // console.log(gameOver);
}

function left_slide() {
  l_col = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  for (slide_count = 0; slide_count < 3; slide_count++) {
    for (i = 0; i < 4; i++) {
      for (j = 1; j < 4; j++) {
        if (cells[l_col[i][j] - 1].innerText !== "") {
          if (cells[l_col[i][j - 1] - 1].innerText !== "") {
            if (
              cells[l_col[i][j - 1] - 1].innerText ==
              cells[l_col[i][j] - 1].innerText
            ) {
              cells[l_col[i][j - 1] - 1].innerText =
                parseInt(cells[l_col[i][j - 1] - 1].innerText) +
                parseInt(cells[l_col[i][j] - 1].innerText);
              cells[l_col[i][j] - 1].innerText = "";
            }
          } else {
            cells[l_col[i][j - 1] - 1].innerText =
              cells[l_col[i][j] - 1].innerText;
            cells[l_col[i][j] - 1].innerText = "";
          }
        }
      }
    }
  }
  colorizeCell();
  alertGameOver();
  generatingNewNumbers();
  moveCounter();
}

function right_slide() {
  l_col = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  for (slide_count = 0; slide_count < 3; slide_count++) {
    for (i = 0; i < 4; i++) {
      for (j = 2; j > -1; j--) {
        // cells[l_col[i][j] - 1].innerText = `${i},${j}`;
        if (cells[l_col[i][j] - 1].innerText !== "") {
          if (cells[l_col[i][j + 1] - 1].innerText !== "") {
            if (
              cells[l_col[i][j + 1] - 1].innerText ==
              cells[l_col[i][j] - 1].innerText
            ) {
              cells[l_col[i][j + 1] - 1].innerText =
                parseInt(cells[l_col[i][j + 1] - 1].innerText) +
                parseInt(cells[l_col[i][j] - 1].innerText);
              cells[l_col[i][j] - 1].innerText = "";
            }
          } else {
            cells[l_col[i][j + 1] - 1].innerText =
              cells[l_col[i][j] - 1].innerText;
            cells[l_col[i][j] - 1].innerText = "";
          }
        }
      }
    }
  }
  colorizeCell();
  alertGameOver();
  generatingNewNumbers();
  moveCounter();
}

function up_slide() {
  l_col = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  for (slide_count = 0; slide_count < 3; slide_count++) {
    for (i = 1; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        // cells[l_col[i][j] - 1].innerText = `${i},${j}`;
        if (cells[l_col[i][j] - 1].innerText !== "") {
          if (cells[l_col[i - 1][j] - 1].innerText !== "") {
            if (
              cells[l_col[i - 1][j] - 1].innerText ==
              cells[l_col[i][j] - 1].innerText
            ) {
              cells[l_col[i - 1][j] - 1].innerText =
                parseInt(cells[l_col[i - 1][j] - 1].innerText) +
                parseInt(cells[l_col[i][j] - 1].innerText);
              cells[l_col[i][j] - 1].innerText = "";
            }
          } else {
            cells[l_col[i - 1][j] - 1].innerText =
              cells[l_col[i][j] - 1].innerText;
            cells[l_col[i][j] - 1].innerText = "";
          }
        }
      }
    }
  }
  colorizeCell();
  alertGameOver();
  generatingNewNumbers();
  moveCounter();
}

function down_slide() {
  l_col = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  for (slide_count = 0; slide_count < 3; slide_count++) {
    for (i = 2; i > -1; i--) {
      for (j = 0; j < 4; j++) {
        // cells[l_col[i][j] - 1].innerText = `${i},${j}`;
        if (cells[l_col[i][j] - 1].innerText !== "") {
          if (cells[l_col[i + 1][j] - 1].innerText !== "") {
            if (
              cells[l_col[i + 1][j] - 1].innerText ==
              cells[l_col[i][j] - 1].innerText
            ) {
              cells[l_col[i + 1][j] - 1].innerText =
                parseInt(cells[l_col[i + 1][j] - 1].innerText) +
                parseInt(cells[l_col[i][j] - 1].innerText);
              cells[l_col[i][j] - 1].innerText = "";
            }
          } else {
            cells[l_col[i + 1][j] - 1].innerText =
              cells[l_col[i][j] - 1].innerText;
            cells[l_col[i][j] - 1].innerText = "";
          }
        }
      }
    }
  }
  colorizeCell();
  alertGameOver();
  generatingNewNumbers();
  moveCounter();
}

// function randomPlay() {
//   for (let m = 0; m < 10; m++) {
//     let choice = Math.floor(Math.random() * 4);
//     if (choice == 0) {
//       up_slide();
//     } else if (choice == 1) {
//       down_slide();
//     } else if (choice == 2) {
//       left_slide();
//     } else {
//       right_slide();
//     }
//   }
// }

// randomPlay();

// function fetchdata() {
//   fetch("https://fakestoreapi.com/products/1")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// fetchdata();
