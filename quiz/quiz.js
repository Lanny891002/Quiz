// var lord_icon = document.querySelector("lordicon");

var quiz1 = document.getElementById("quiz1");
var quiz2 = document.getElementById("quiz2");
var quiz3 = document.getElementById("quiz3");
var quiz4 = document.getElementById("quiz4");
var quiz5 = document.getElementById("quiz5");
var quiz6 = document.getElementById("quiz6");
var quiz7 = document.getElementById("quiz7");
var quiz8 = document.getElementById("quiz8");
var quiz9 = document.getElementById("quiz9");
var quiz10 = document.getElementById("quiz10");

var body = document.querySelector("body");
var lord_icon = document.getElementById("lordicon");
var Nurseryhouse = document.getElementById("Nursery-house");
var floor = document.querySelector(".floor");
var floorup = document.querySelector(".floorup");
var BOX = document.getElementById("box");
var tip_text1 = document.querySelector(".tip-text1");
var small_o = document.querySelector(".small-o");
var small_p = document.querySelector(".small-p");
var small_d = document.querySelector(".small-d");
var small_c = document.querySelector(".small-c");
var small_a = document.querySelector(".small-a");
var O = document.querySelector(".O");
var P = document.querySelector(".P");
var D = document.querySelector(".D");
var C = document.querySelector(".C");
var A = document.querySelector(".A");
var clock = document.getElementById("clock");
var blackboard = document.getElementById("blackboard");
var chalk = document.getElementById("chalk");
var tip_text2 = document.querySelector(".tip-text2");
var table = document.getElementById("table");
var book1 = document.getElementById("book1");
var book2 = document.getElementById("book2");
var tip_text3 = document.querySelector(".tip-text3");
var paper = document.getElementById("paper");
var list = document.getElementById("list");
var zoom = document.getElementById("zoom");
var tip_text4 = document.querySelector(".tip-text4");
var community = document.getElementById("community");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var loading = document.getElementById("loading");
var score = document.getElementById("score");
var congratulations1 = document.getElementById("congratulations1");
var congratulations2 = document.getElementById("congratulations2");
var button4 = document.querySelector(".button4");

var yes1 = document.getElementById("yes1");
var no1 = document.getElementById("no1");

var yes2 = document.getElementById("yes2");
var no2 = document.getElementById("no2");

var yes3 = document.getElementById("yes3");
var no3 = document.getElementById("no3");

var yes4 = document.getElementById("yes4");
var no4 = document.getElementById("no4");

var yes5 = document.getElementById("yes5");
var no5 = document.getElementById("no5");

var yes6 = document.getElementById("yes6");
var no6 = document.getElementById("no6");

var yes7 = document.getElementById("yes7");
var no7 = document.getElementById("no7");

var yes8 = document.getElementById("yes8");
var no8 = document.getElementById("no8");

var yes9 = document.getElementById("yes9");
var no9 = document.getElementById("no9");

var yes10 = document.getElementById("yes10");
var no10 = document.getElementById("no10");

var i = 0;

// document.onclick = function () {
//   var obj = event.srcElement;
//   if (obj.type == "button1") {
//     yes1.style.display = "block";
//   }
// };

// 題目1答案
function answer1_no() {
  yes1.style.display = "none";
  no1.style.display = "block";
  // no1.style.opacity = "1";
}

function answer1_yes() {
  yes1.style.display = "block";
  no1.style.display = "none";
  i += 10;
}

function close_answer1() {
  yes1.style.display = "none";
  no1.style.display = "none";
  quiz1.style.display = "none";

  Nurseryhouse.style.width = "34%";
  Nurseryhouse.style.top = "3%";
  Nurseryhouse.style.left = "30%";

  // 延遲2秒
  setTimeout(function () {
    Nurseryhouse.style.opacity = "0";
    Nurseryhouse.style.transition = "1s";
  }, 2000);

  setTimeout(function () {
    Nurseryhouse.style.display = "none";
  }, 4000);

  BOX.style.display = "block";
  tip_text1.style.display = "block";
}

// 點擊箱子
function box() {
  tip_text1.style.display = "none";

  small_o.style.display = "block";
  small_p.style.display = "block";
  small_d.style.display = "block";
  small_c.style.display = "block";
  small_a.style.display = "block";

  // small_o.style.opacity = "1";
  // small_p.style.opacity = "1";
  // small_d.style.opacity = "1";
  // small_c.style.opacity = "1";
  // small_a.style.opacity = "1";

  setTimeout(function () {
    small_o.style.top = "-30%";
    small_o.style.left = "27%";
  }, 30);

  setTimeout(function () {
    small_p.style.top = "-30%";
    small_p.style.left = "37%";
  }, 300);

  setTimeout(function () {
    small_d.style.top = "-30%";
    small_d.style.left = "47%";
  }, 600);

  setTimeout(function () {
    small_c.style.top = "-30%";
    small_c.style.left = "57%";
  }, 900);

  setTimeout(function () {
    small_a.style.top = "-30%";
    small_a.style.left = "67%";
  }, 1200);

  setTimeout(function () {
    BOX.style.opacity = "0";
    BOX.style.top = "30%";
  }, 2000);

  setTimeout(function () {
    small_o.style.display = "none";
    small_p.style.display = "none";
    small_d.style.display = "none";
    small_c.style.display = "none";
    small_a.style.display = "none";
    BOX.style.display = "none";
  }, 3000);

  quiz2.style.display = "block";
  O.style.display = "block";
}

// 題目2答案
function answer2_no() {
  yes2.style.display = "none";
  no2.style.display = "block";
}

function answer2_yes() {
  yes2.style.display = "block";
  no2.style.display = "none";
  i += 10;
}

function close_answer2() {
  yes2.style.display = "none";
  no2.style.display = "none";
  quiz2.style.display = "none";

  O.style.opacity = "0";
  O.style.top = "35%";
  body.style.background = "#4374b5";

  setTimeout(function () {
    O.style.display = "none";
  }, 2000);

  quiz3.style.display = "block";
  P.style.display = "block";
}

// 題目3答案
function answer3_no() {
  yes3.style.display = "none";
  no3.style.display = "block";
}

function answer3_yes() {
  yes3.style.display = "block";
  no3.style.display = "none";
  i += 10;
}

function close_answer3() {
  yes3.style.display = "none";
  no3.style.display = "none";
  quiz3.style.display = "none";

  setTimeout(function () {
    P.style.top = "45%";
    P.style.left = "20%";
    P.style.transform = "rotate(45deg)";
  }, 500);

  setTimeout(function () {
    P.style.opacity = "0";
  }, 300);

  setTimeout(function () {
    P.style.display = "none";
  }, 2000);

  body.style.background = "#3c69a6";

  quiz4.style.display = "block";
  D.style.display = "block";
}

// 題目4答案
function answer4_no() {
  yes4.style.display = "none";
  no4.style.display = "block";
}

function answer4_yes() {
  yes4.style.display = "block";
  no4.style.display = "none";
  i += 10;
}

function close_answer4() {
  yes4.style.display = "none";
  no4.style.display = "none";
  quiz4.style.display = "none";

  D.style.left = "100%";
  D.style.transform = "rotate(360deg)";

  setTimeout(function () {
    D.style.display = "none";
  }, 3000);

  body.style.background = "#3c57a6";

  quiz5.style.display = "block";
  C.style.display = "block";
}

// 題目5答案
function answer5_no() {
  yes5.style.display = "none";
  no5.style.display = "block";
}

function answer5_yes() {
  yes5.style.display = "block";
  no5.style.display = "none";
  i += 10;
}

function close_answer5() {
  yes5.style.display = "none";
  no5.style.display = "none";
  quiz5.style.display = "none";

  C.style.left = "-50%";
  C.style.transform = "rotate(-720deg)";

  setTimeout(function () {
    C.style.display = "none";
  }, 3000);

  body.style.background = "#4648a3";

  quiz6.style.display = "block";
  A.style.display = "block";
}

// 題目6答案
function answer6_no() {
  yes6.style.display = "none";
  no6.style.display = "block";
}

function answer6_yes() {
  yes6.style.display = "block";
  no6.style.display = "none";
  i += 10;
}

function close_answer6() {
  yes6.style.display = "none";
  no6.style.display = "none";
  quiz6.style.display = "none";

  A.style.left = "125%";

  setTimeout(function () {
    A.style.display = "none";
  }, 3000);

  setTimeout(function () {
    floor.style.opacity = "0";
    floor.style.top = "95%";
    floorup.style.opacity = "0";
    floorup.style.top = "95%";
    body.style.transition = "6s";
  }, 1500);

  setTimeout(function () {
    body.style.background = "#bae0ff";
    floor.style.display = "none";
    floorup.style.display = "none";
  }, 2000);

  clock.style.display = "block";

  setTimeout(function () {
    clock.style.opacity = "0";
  }, 7000);

  setTimeout(function () {
    clock.style.display = "none";
  }, 8000);

  setTimeout(function () {
    body.style.background = "#fcf3e3";
  }, 7000);

  blackboard.style.display = "block";
  chalk.style.display = "block";
  tip_text2.style.display = "block";
}

// 粉筆寫字
function chalk_write() {
  tip_text2.style.display = "none";
  chalk.style.left = "30%";
  chalk.style.top = "30%";
  chalk.style.transform = "rotate(25deg)";

  setTimeout(function () {
    chalk.style.left = "68%";
  }, 1500);

  setTimeout(function () {
    chalk.style.top = "40%";
  }, 1500);

  setTimeout(function () {
    chalk.style.top = "30%";
  }, 1800);

  setTimeout(function () {
    chalk.style.top = "40%";
  }, 2100);

  setTimeout(function () {
    chalk.style.top = "30%";
  }, 2400);

  quiz7.style.display = "block";
}

// 題目7答案
function answer7_no() {
  yes7.style.display = "none";
  no7.style.display = "block";
}

function answer7_yes() {
  yes7.style.display = "block";
  no7.style.display = "none";
  i += 10;
}

function close_answer7() {
  yes7.style.display = "none";
  no7.style.display = "none";
  quiz7.style.display = "none";

  blackboard.style.top = "-40%";
  chalk.style.top = "29%";
  table.style.display = "block";
  book1.style.display = "block";

  setTimeout(function () {
    table.style.opacity = "0";
    book1.style.opacity = "0";
    blackboard.style.opacity = "0";
    chalk.style.opacity = "0";
    body.style.background = "#f4d3ae";
    book2.style.display = "block";
    tip_text3.style.display = "block";
  }, 3000);

  setTimeout(function () {
    table.style.display = "none";
    book1.style.display = "none";
    blackboard.style.display = "none";
    chalk.style.display = "none";
  }, 4000);
}

// 翻開書本
function openbook() {
  tip_text3.style.display = "none";
  quiz8.style.display = "block";
}

// 題目8答案
function answer8_no() {
  yes8.style.display = "none";
  no8.style.display = "block";
}

function answer8_yes() {
  yes8.style.display = "block";
  no8.style.display = "none";
  i += 10;
}

function close_answer8() {
  yes8.style.display = "none";
  no8.style.display = "none";
  quiz8.style.display = "none";

  book2.style.left = "95%";
  paper.style.display = "block";
  list.style.display = "block";
  zoom.style.display = "block";
  tip_text4.style.display = "block";

  setTimeout(function () {
    book2.style.display = "none";
  }, 2000);
}

// 放大鏡移動
function zoommove() {
  tip_text4.style.display = "none";
  zoom.style.top = "15%";
  zoom.style.left = "30%";
  quiz9.style.display = "block";

  setTimeout(function () {
    zoom.style.top = "25%";
    zoom.style.left = "60%";
    list.style.filter = "blur(5px)";
    list.style.opacity = "0.6";
  }, 1500);

  setTimeout(function () {
    zoom.style.top = "55%";
    zoom.style.left = "10%";
  }, 3000);
}

// 題目9答案
function answer9_no() {
  yes9.style.display = "none";
  no9.style.display = "block";
}

function answer9_yes() {
  yes9.style.display = "block";
  no9.style.display = "none";
  i += 10;
}

function close_answer9() {
  yes9.style.display = "none";
  no9.style.display = "none";
  quiz9.style.display = "none";

  zoom.style.top = "100%";

  setTimeout(function () {
    paper.style.top = "120%";
    list.style.top = "126%";
    community.style.display = "block";
  }, 800);

  setTimeout(function () {
    body.style.background = "#cce6ff";
  }, 2000);

  setTimeout(function () {
    paper.style.display = "none";
    list.style.display = "none";
    zoom.style.display = "none";
  }, 3000);

  setTimeout(function () {
    community.style.filter = "blur(8px)";
    community.style.opacity = "0.9";
  }, 3800);

  quiz10.style.display = "block";
}

// 題目10答案
function answer10_no() {
  yes10.style.display = "none";
  no10.style.display = "block";
}

function answer10_yes() {
  yes10.style.display = "block";
  no10.style.display = "none";
  i += 10;
}

function close_answer10() {
  yes10.style.display = "none";
  no10.style.display = "none";
  quiz10.style.display = "none";

  community.style.filter = "blur(0px)";
  community.style.opacity = "1";

  setTimeout(function () {
    community.style.width = "170%";
    community.style.left = "-63%";
    community.style.top = "0%";
  }, 1500);

  setTimeout(function () {
    button3.style.display = "block";
  }, 3000);

  // lord_icon.style.display = "block";
}

function score_count() {
  button3.style.display = "none";
  loading.style.display = "block";
  // community.style.filter = "blur(3px)";
  community.style.transition = "8s";
  community.style.left = "-5%";
  body.style.transition = "2s";
  body.style.background = "#366ea3";

  setTimeout(function () {
    body.style.background = "#cce6ff";
  }, 2000);

  setTimeout(function () {
    body.style.background = "#366ea3";
  }, 4000);

  setTimeout(function () {
    body.style.background = "#cce6ff";
  }, 6000);

  setTimeout(function () {
    community.style.transition = "1.5s";
    community.style.top = "100%";
    loading.style.opacity = "0";

    score.innerHTML = i;
    score.style.display = "block";
    congratulations1.style.display = "block";
    congratulations2.style.display = "block";
    button4.style.display = "block";
  }, 8000);

  setTimeout(function () {
    community.style.display = "none";
    loading.style.display = "none";
  }, 10000);
}
