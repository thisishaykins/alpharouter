const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.getElementById("app_year").innerHTML = year;

const data_response = [];

const timer_val = 20000;

// const myTimeout = setTimeout(allowAccessBtn, timer_val);

// function allowAccessBtn() {
//     document.getElementById("counter_btn").style.display = 'block';
// }

function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);

  return date;
}

const newDate = addMinutes(new Date(), timer_val / 10000);

// Set the date we're counting down to
var countDownDate = new Date(newDate).getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="counter_timer"
  document.getElementById("counter_timer").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("counter_timer").innerHTML = "EXPIRED";
    document.getElementById("counter_btn").style.display = "block";
    
    location.href = "https://sportdm.com/";
  }
}, 1000);

fetch("../assets/js/app.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .then((data_res) => {
    const innerData = Object.values(data_res.data);
    data_response.push(...innerData);

    console.log("data => ", data_response);
  });
