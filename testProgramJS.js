// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

localStorage.setItem('age','12');
localStorage.setItem('color','blue');
localStorage.setItem('color2','red');
localStorage.setItem('color2','yellow');
var items = localStorage.length;

document.write(localStorage.getItem('age') + '<br/>');
document.write(items + '<br/>');

document.write(localStorage.getItem('color2') + '<br/>');
localStorage.setItem('storage1','The key for this is storage1' );
document.write(localStorage.getItem('storage1'));
document.write(localStorage.storage1.length);
