let input = document.querySelector(".input");
let item = document.querySelectorAll(".item");


function specialBtn(text) {
  if (text === "C") {
    input.value = "";
  } else if (text === "=") {
    input.value = eval(input.value);
  } else if (text === "+/-") {
    input.value = -input.value;
  } else if (text === "D") {
    let arr = new Array();
    arr = input.value.split("");
    arr.pop();
    input.value = arr.join("");
  } else if (text === "/") {
    if (
      input.value.slice(-1) === "+" ||
      input.value.slice(-1) === "-" ||
      input.value.slice(-1) === "*"
    ) {
      input.value = input.value.slice(0, -1);
      input.value += text;
      console.log(input.value);
    } else if (input.value.slice(-1) != "/") {
      console.log(input.value.slice(-1));
      input.value += text;
    }
  } else if (text === "*") {
    if (
      input.value.slice(-1) === "+" ||
      input.value.slice(-1) === "-" ||
      input.value.slice(-1) === "/"
    ) {
      input.value = input.value.slice(0, -1);
      input.value += text;
      console.log(input.value);
    } else if (input.value.slice(-1) != "*") {
      console.log(input.value.slice(-1));
      input.value += text;
    }
  } else if (text === "+") {
    if (
      input.value.slice(-1) === "/" ||
      input.value.slice(-1) === "-" ||
      input.value.slice(-1) === "*"
    ) {
      input.value = input.value.slice(0, -1);
      input.value += text;
      console.log(input.value);
    } else if (input.value.slice(-1) != "+") {
      console.log(input.value.slice(-1));
      input.value += text;
    }
  } else if (text === "-") {
    if (
      input.value.slice(-1) === "+" ||
      input.value.slice(-1) === "/" ||
      input.value.slice(-1) === "*"
    ) {
      input.value = input.value.slice(0, -1);
      input.value += text;
    } else if (input.value.slice(-1) != "-") {
      input.value += text;
    }
  } else {
    input.value += text;
  }
}

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    specialBtn(this.innerText);
  });
}