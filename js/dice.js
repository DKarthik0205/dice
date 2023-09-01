function roll() {
  var random1 = Math.floor((Math.random() * 6) + 1);
  var image1 = random1 + "-w.png";
  var sorce1 = "../dice/images/" + image1;
  var change1 = document.querySelectorAll("img")[0];
  change1.setAttribute("src", sorce1);


  var random2 = Math.floor((Math.random() * 6) + 1);
  var image2 = random2 + "-b.png";
  var sorce2 = "../dice/images/" + image2;
  var change2 = document.querySelectorAll("img")[1];
  change2.setAttribute("src", sorce2);


  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "POSTIVE MOVE ヽ(•‿•)ノ";
  }
  else if (random2 > random1) {
    document.querySelector("h1").innerHTML = "NEGATIVE MOVE 🖕🖕🖕";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
