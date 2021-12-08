function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function validate1() {
  let num = document.getElementById("number").value;
  if (num == "9656123352") {
    document.getElementById('myForm3').style.display ='flex';
    document.getElementById("myForm").style.display = "none";
    return false;
  }
  else if (num == 0) {
    alert("Enter your mobile number");
    return false;
  }
  else {
    document.getElementById('myForm2').style.display ='flex';
    document.getElementById("myForm").style.display = "none";
    return false;
  }
}
function validate3() {
  let pwd = document.getElementById("password").value;
  let cap = document.getElementById("captcha").value;
  if (pwd == "password" && cap == "16ZNH1") {
    document.getElementById('myForm3').style.display ='none';
    window.open("home.html", "_self");
  }
  else {
    window.alert("Please enter correct password and captcha!");
    return false;
  }
}
function validate2() {
  document.getElementById('myForm3').style.display ='none';
  document.getElementById('myForm2').style.display ='flex';
  return false;
}
function validate4() {
  let n = document.getElementById("name").value;
  let m = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  if (n == 0) {
    alert("Name field is empty!");
    return false;
  }
  else if (m == 0) {
    alert("Email field is empty!");
    return false;
  }
  else if (p == 0) {
    alert("Please enter password");
    return false;
  }
  else {
    document.getElementById('myForm2').style.display ='none';
    window.open("home.html", "_self");
  }
}