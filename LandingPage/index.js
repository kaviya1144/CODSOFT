function changebg() {
  var navbar = document.getElementById("navbar");
  var scrollvalue = window.scrollY;
  if (scrollvalue < 700) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changebg);

function submit(){
    var click = "Thanks, for ur response!!!";
    alert(click);
}

function search(){
    var search = "Have a happy journey!!"
    alert(search);
}