var acc1 = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acc1.length; i++) {
  acc1[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel1 = this.nextElementSibling;
    if (panel1.style.display === "none") {
      panel1.style.display = "block";
    } else {
      panel1.style.display = "none";
    }
  });
}