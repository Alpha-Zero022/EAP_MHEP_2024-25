alert('Welcome to EAP! I hope you wiil find some useful knowledge.');
function myFunction() {
  var txt;
  if (confirm("Please press OK button, if those are helpful. If it is not like that, please press Cancle button.")) {
    txt = "So, these are useful.";
  } else {
    txt = "So, these are not useful.";
  }
  document.getElementById("demo").innerHTML = txt;
}
