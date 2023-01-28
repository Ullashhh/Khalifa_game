let images = document.getElementsByTagName("img");
let pukCode;
let pukArray = [];
let attempNumber = document.getElementById("attemp-number");
let attempInt = +attempNumber.innerText;
let attempMsg = document.getElementById("attemp-msg");
let gameOverMsg = document.getElementsByClassName("over-msg")[0];
let btn = document.getElementsByTagName("button");
let retryBtn = document.getElementById("retry-btn");
let winMsg = document.querySelector(".win-msg");
let imageCode;
let imageCodeArray = [];
let defaultImage = "./assets/images/photo-1622014402888-e78d0fd790d0.jpeg";
let allImageArray = [
  ".//assets/images/images-1.jpg",
  ".//assets/images/images-2.jpg",
  ".//assets/images/images-3.jpg",
  ".//assets/images/images-3.jpg",
  ".//assets/images/images-4.jpg",
  ".//assets/images/images-5.jpeg",
  ".//assets/images/images-2.jpg",
  ".//assets/images/images-1.jpg",
  ".//assets/images/images-4.jpg",
  ".//assets/images/images-5.jpeg",
];
let newAllImageArray = [];

function tryAgain() {
  images[0].src = defaultImage;
  images[1].src = defaultImage;
  images[2].src = defaultImage;
  images[3].src = defaultImage;
  images[4].src = defaultImage;
  images[5].src = defaultImage;
  images[6].src = defaultImage;
  images[7].src = defaultImage;
  images[8].src = defaultImage;
  images[9].src = defaultImage;
  pukArray = [];
  imageCodeArray = [];
  attempInt = 10;
  attempMsg.innerText = `You have ${attempInt} attempts left`;
  retryBtn.classList.add("msg-hide");
  gameOverMsg.classList.add("msg-hide");
  winMsg.classList.add("msg-hide");
  btn[0].disabled = false;
  btn[1].disabled = false;
  btn[2].disabled = false;
  btn[3].disabled = false;
  btn[4].disabled = false;
  btn[5].disabled = false;
  btn[6].disabled = false;
  btn[7].disabled = false;
  btn[8].disabled = false;
  btn[9].disabled = false;
}
retryBtn.addEventListener("click", () => {
  tryAgain();
});

function winGame() {
  if (
    images[0].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[1].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[2].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[3].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[4].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[5].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[6].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[7].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[8].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg" &&
    images[9].src !== "http://127.0.0.1:5500/assets/images/photo-1622014402888-e78d0fd790d0.jpeg"
    
  ) {
    winMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    console.log(images[0].src);
    console.log(images[1].src);
    console.log(images[2].src);
    console.log(images[3].src);
    console.log(images[4].src);
    console.log(images[5].src);
    console.log(images[6].src);
    console.log(images[7].src);
    console.log(images[8].src);
    console.log(images[9].src);
  }
}

btn[0].addEventListener("click", () => {
  imageCode = 0;
  imageCodeArray.push(imageCode);

  pukCode = "1111";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[0].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[0].src = allImageArray[0];
    let timeSet = setTimeout(() => {
      images[0].src = defaultImage;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "1111" &&
      imageCodeArray[imageCodeArray.length - 2] === 7
    ) {
      clearTimeout(timeSet);
      images[7].src = allImageArray[7];
      images[0].src = allImageArray[0];
      btn[0].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[1].addEventListener("click", () => {
  imageCode = 1;
  imageCodeArray.push(imageCode);
  pukCode = "5555";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[1].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[1].src = allImageArray[1];
    let timeSet = setTimeout(() => {
      images[1].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "5555" &&
      imageCodeArray[imageCodeArray.length - 2] === 6
    ) {
      clearTimeout(timeSet);
      images[6].src = allImageArray[6];
      images[1].src = allImageArray[1];
      btn[1].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[2].addEventListener("click", () => {
  imageCode = 2;
  imageCodeArray.push(imageCode);
  pukCode = "3333";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[2].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[2].src = allImageArray[2];
    let timeSet = setTimeout(() => {
      images[2].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "3333" &&
      imageCodeArray[imageCodeArray.length - 2] === 3
    ) {
      clearTimeout(timeSet);
      images[3].src = allImageArray[3];
      images[2].src = allImageArray[2];
      btn[2].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[3].addEventListener("click", () => {
  imageCode = 3;
  imageCodeArray.push(imageCode);
  pukCode = "3333";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[3].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[3].src = allImageArray[3];
    let timeSet = setTimeout(() => {
      images[3].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "3333" &&
      imageCodeArray[imageCodeArray.length - 2] === 2
    ) {
      clearTimeout(timeSet);
      images[2].src = allImageArray[2];
      images[3].src = allImageArray[3];
      btn[3].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[4].addEventListener("click", () => {
  imageCode = 4;
  imageCodeArray.push(imageCode);
  pukCode = "2222";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[4].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[4].src = allImageArray[4];
    let timeSet = setTimeout(() => {
      images[4].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "2222" &&
      imageCodeArray[imageCodeArray.length - 2] === 8
    ) {
      clearTimeout(timeSet);
      images[8].src = allImageArray[8];
      images[4].src = allImageArray[4];
      btn[4].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[5].addEventListener("click", () => {
  imageCode = 5;
  imageCodeArray.push(imageCode);
  pukCode = "4444";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[5].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[5].src = allImageArray[5];
    let timeSet = setTimeout(() => {
      images[5].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "4444" &&
      imageCodeArray[imageCodeArray.length - 2] === 9
    ) {
      clearTimeout(timeSet);
      images[9].src = allImageArray[9];
      images[5].src = allImageArray[5];
      btn[5].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[6].addEventListener("click", () => {
  imageCode = 6;
  imageCodeArray.push(imageCode);
  pukCode = "5555";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[6].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[6].src = allImageArray[6];
    let timeSet = setTimeout(() => {
      images[6].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "5555" &&
      imageCodeArray[imageCodeArray.length - 2] === 1
    ) {
      clearTimeout(timeSet);
      images[1].src = allImageArray[1];
      images[6].src = allImageArray[6];
      btn[6].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[7].addEventListener("click", () => {
  imageCode = 7;
  imageCodeArray.push(imageCode);
  pukCode = "1111";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[7].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[7].src = allImageArray[7];
    let timeSet = setTimeout(() => {
      images[7].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "1111" &&
      imageCodeArray[imageCodeArray.length - 2] === 0
    ) {
      clearTimeout(timeSet);
      images[0].src = allImageArray[0];
      images[7].src = allImageArray[7];
      btn[7].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[8].addEventListener("click", () => {
  imageCode = 8;
  imageCodeArray.push(imageCode);
  pukCode = "2222";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    attempMsg.innerText = `You have ${attempInt} attemps left`;
    btn[8].disabled = true;
  } else {
    images[8].src = allImageArray[8];
    let timeSet = setTimeout(() => {
      images[8].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "2222" &&
      imageCodeArray[imageCodeArray.length - 2] === 4
    ) {
      clearTimeout(timeSet);
      images[4].src = allImageArray[4];
      images[8].src = allImageArray[8];
      btn[8].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});

btn[9].addEventListener("click", () => {
  imageCode = 9;
  imageCodeArray.push(imageCode);
  pukCode = "4444";
  if (attempInt <= 0) {
    gameOverMsg.classList.remove("msg-hide");
    retryBtn.classList.remove("msg-hide");
    btn[8].disabled = true;
    attempMsg.innerText = `You have ${attempInt} attemps left`;
  } else {
    images[9].src = allImageArray[9];
    let timeSet = setTimeout(() => {
      images[9].src = defaultImage;;
    }, 1000);
    if (
      pukArray[pukArray.length - 1] === "4444" &&
      imageCodeArray[imageCodeArray.length - 2] === 5
    ) {
      clearTimeout(timeSet);
      images[5].src = allImageArray[5];
      images[9].src = allImageArray[9];
      btn[9].disabled = true;
    } else {
      attempMsg.innerText = `You have ${--attempInt} attemps left`;
    }
    winGame();
    pukArray.push(pukCode);
  }
});
