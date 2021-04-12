const click = document.getElementById('add_task');

click.onclick = function (event) {
  const valText = document.getElementById('text_task').value;
  const valDay = document.getElementById('day').value;
  const valMonth = document.getElementById('month').value;
  const valYear = document.getElementById('year').value;
  const ID = `${valMonth}${valDay}${valYear}`;
  for (let i = 0; i < arr.length; i++) {
    if (ID === arr[i]) {
      const dayId = document.getElementById(`${ID}`)
      // localStorage.setItem("name", valText);
      // document.getElementById(ID).innerHTML = localStorage.getItem("name")
      var node = document.createTextNode(`${valText}`);
      var P = document.createElement('p');
      P.appendChild(node);
      P.draggable = "true";
      P.id = `${valText}`;
      P.ondragstart = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log("start");
        event.preventDefault();
      }

      dayId.appendChild(P);
      P.onclick = function () {
        P.removeChild(P.childNodes[0]);
        console.log('click');
      }
    } else {
      console.log('k chay');
      //alert('nhap du lieu')
      event.preventDefault();
    }
  }

}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}