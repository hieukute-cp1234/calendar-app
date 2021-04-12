var modal = document.getElementById("my_modal");
var showModal = document.getElementById("show");
var del = document.getElementsByClassName("close")[0];
var showday = document.getElementById("showday");
var x = document.getElementsByClassName("day");

showModal.onclick = function () {
  modal.style.display = "block";
}

del.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
