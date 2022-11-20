let monthEl= document.querySelector(".date h1");
let fullDate = document.querySelector(".date p");
let daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
let lastDay = new Date(new Date().getFullYear(), monthInx + 1,0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthInx,1).getDay() -1;


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerHTML= months[monthInx];
fullDate.innerHTML= new Date().toDateString();

let days = "";
for (let i = firstDay; i>0;i--) {
    days += `<div class="empty"></div>`

}
for (let i = 1;i <=lastDay ;i++){
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`

    }else {
        days += `<div>${i}</div>`
    }
}
daysEl.innerHTML = days;


