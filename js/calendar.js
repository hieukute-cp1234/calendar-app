const dt = new Date();
const day = dt.getDate();
const month = dt.getMonth();
const year = dt.getFullYear();


//const render = () => {
var row = document.getElementById('b')
const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'Jury', 'August', 'September', 'October', 'November', 'December']

const now = `${month + 1}${day}${year}`
var arr = []
var prevLastDay = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
var afterDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 1).getDate()
console.log(afterDay);
const firstDayInMonth = new Date(year, month, 1)
const lastDayMonth = new Date(year, month + 1, 0).getDate()
const dateString = firstDayInMonth.toLocaleDateString('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
})

document.querySelector('.change_month p').innerHTML = Month[dt.getMonth()]
document.getElementById('year_header').innerHTML = dt.getFullYear()

const numberWeekDay = weekDay.indexOf(dateString.split(', ')[0]);

for (let i = 1; i <= numberWeekDay + lastDayMonth + weekDay.length - numberWeekDay - 2; i++) {
  const daySquare = document.createElement('div');
  daySquare.classList.add('day', 'number');
  const a = daySquare.id = `${month + 1}${i - numberWeekDay}${year}`
  arr.push(a);
  daySquare.ondrop = function (ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  daySquare.ondragover = function (ev) {
    ev.preventDefault();
  }
  if (i > numberWeekDay && i <= numberWeekDay + lastDayMonth) {
    daySquare.innerHTML = i - numberWeekDay;
  } else if (i <= numberWeekDay) {
    daySquare.innerHTML = prevLastDay - numberWeekDay + i;
    const b = daySquare.id = `${month}${prevLastDay - numberWeekDay + i}${year}`
    arr.push(b);
  } else if (i >= numberWeekDay + lastDayMonth && i <= numberWeekDay + lastDayMonth + 2) {
    daySquare.innerHTML = afterDay + i - numberWeekDay - lastDayMonth - 1
    const c = daySquare.id = `${month + 2}${afterDay + i - numberWeekDay - lastDayMonth - 1}${year}`
    arr.push(c);
  }

  switch (i) {
    case 7:
    case 14:
    case 21:
    case 28:
      daySquare.classList.add('end');
      break;
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
      daySquare.classList.add('end1');
      break;
    case 35:
      daySquare.classList.add('end');
      daySquare.classList.add('end1');
      break;
    default:
  }
  row.appendChild(daySquare);
  if (a === now) {
    document.getElementById(a).style.backgroundColor = '#6190f4'
  }

  if (check) {
    console.log('true')
    switch (i) {
      case 6:
      case 7:
      case 13:
      case 14:
      case 20:
      case 21:
      case 27:
      case 28:
      case 34:
      case 35:
        document.getElementsById(`${month + 1}${i - numberWeekDay}${year}`).style.display = "none";
        console.log(`${month + 1}${i - numberWeekDay}${year}`)
        break;
      default:
    }
  }
}
//}

document.getElementById('prev').onclick = function () {
  dt.setMonth(dt.getMonth() - 1)
  //render()
}

document.getElementById('next').onclick = function () {
  dt.setMonth(dt.getMonth() + 1)
  //render()
}
//render()

