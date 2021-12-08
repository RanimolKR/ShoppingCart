function list1() {
	window.open("home.html","_self");
}
function list2() {
	window.open("cart.html","_self");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
}

var p2 = document.getElementsByClassName("sidebar1-body1-head");
var j;

for (j = 0; j < p2.length; j++) {
  p2[j].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel2 = this.nextElementSibling;
    if (panel2.style.display === "none") {
      panel2.style.display = "block";
    } else {
      panel2.style.display = "none";
    }
  });
}

var p3 = document.getElementsByClassName("sidebar1-body2-head");
var k;

for (k = 0; k < p3.length; k++) {
  p3[k].addEventListener("click", function() {
    this.classList.toggle("active3");
    var panel3 = this.nextElementSibling;
    if (panel3.style.display === "none") {
      panel3.style.display = "block";
    } else {
      panel3.style.display = "none";
    }
  });
}

var p4 = document.getElementsByClassName("sidebar1-body3-body");
var m;

for (m = 0; m < p4.length; m++) {
  p4[m].addEventListener("click", function() {
    this.classList.toggle("active4");
    var panel4 = this.nextElementSibling;
    if (panel4.style.display === "block") {
      panel4.style.display = "none";
    } else {
      panel4.style.display = "block";
    }
  });
}
