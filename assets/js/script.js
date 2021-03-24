let canvas = document.getElementById('canvas');

// create an array of image sources;
let imageGallery = [
    'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg','gallery4.jpg','gallery5.jpg','gallery6.jpg'
]
let index = 0;

canvas.style.background = `url(./assets/images/${imageGallery[0]})`;


//add eventListeners to arrows
let arrows = document.querySelectorAll('.gallary-arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
                if (e.target.id === "prev"){
            index--;
            if (index < 0){
                index = imageGallery.length -1;
            }
            canvas.style.background = `url(./assets/images/${imageGallery[index]})`;
        } else if (e.target.id === "next") {
            index++;
            if (index >= imageGallery.length ){
                index = 0;
            }
            canvas.style.background = `url(./assets/images/${imageGallery[index]})`;
        }
    })
});

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    ampm = (hours < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;
    //Add a zero in front of numbers<10
    hours = padDigit(hours);
    minutes = padDigit(minutes);
    seconds = padDigit(seconds);
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let curWeekDay = days[now.getDay()];
    let curDay = now.getDate();
    let curMonth = months[now.getMonth()];
    let curYear = now.getFullYear();
    let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById('date').innerHTML = date;
    
    let time = setTimeout(function(){ updateClock() }, 500);
}
function padDigit(digit) {
    if (digit < 10) {
        digit = "0" + digit;
    }
    return digit;
}