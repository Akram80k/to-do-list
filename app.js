function intro() {
  document.querySelector(
    ".write"
  ).innerHTML = `<p>write the first task you would acomplish today!</p><input class ="input" type ="text">  <input onclick="lists()" class="ok" type="button" value="ok"> `;
}

function lists() {
  let inputValue = document.querySelector(".input").value;
  document.querySelector(
    ".list"
  ).innerHTML = `Task 1: ${inputValue}<br> did you acomplish this task? <button style="background:green" onclick="intro2(); audio.play();">yes</button> <button style="background:red" onclick= "error()">No</button>`;
}

function intro2() {
  document.querySelector(
    ".write2"
  ).innerHTML = `<p> Now write the second task you would accomplish! </p><input class= "input1" type="text"> <input onclick ="lists2()" class="ok" type = "button" value="ok">`;
}

function lists2() {
  let inputValue1 = document.querySelector(".input1").value;
  document.querySelector(
    ".list2"
  ).innerHTML = `Task 2: ${inputValue1}<br> did you acomplish this task? <button style="background:green" onclick="intro3()">yes</button> <button style="background:red" onclick= "error1()">No</button>`;
}
function intro3() {
  document.querySelector(
    ".write3"
  ).innerHTML = `<p> Now write the third task you would accomplish! </p><input class= "input2" type="text"> <input onclick ="lists3()" type = "button" value="ok">`;
}
function lists3() {
  let inputValue2 = document.querySelector(".input2").value;
  document.querySelector(
    ".list3"
  ).innerHTML = `Task 3: ${inputValue2}<br> did you acomplish this task? <button style="background :green" onclick="intro4()">yes</button> <button style="background:red" onclick= "error2()">No</button>`;
}
function intro4() {
  document.querySelector(".hosbetter").innerHTML = "ok have a good night lol";
}

function error() {
  document.querySelector(".error").innerHTML =
    "please accomplish the task above in case you dont do the next tasks im not gonna show up again ";
}
function error1() {
  document.querySelector(".error1").innerHTML =
    "SIKE please complete the task above";
}
function error2() {
  document.querySelector(".error2").innerHTML = "complete the damn task";
}
