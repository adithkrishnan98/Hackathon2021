// Adding the sticky navbar
window.onscroll = () => {
    myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-navbar");
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction1() {
if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky-shadow");
} else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-shadow");
}
}

//scroll to top
let scroll = document.getElementById('scroll-btn')

function show_scroller() {
if (window.pageYOffset > 34) {
    scroll.style.visibility = "visible";
} else {
    scroll.style.visibility = "hidden";
}
}
scroll.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

// about me typewriter functionality
document.getElementById("about-me-btn").addEventListener("click", () => {
    document.getElementById("swipe-text").style.display = "contents";
    document.getElementById("about-me").style.display = "none";
    var i = 0;
    var txt = "I am a React Front-End Developer based in Chennai, a tech-savvy engineering graduate passionate about building pixel perfect and intuitive web applications. \n When I'm not typing my way through lines of code, I enjoy playing my guitar and singing to my favorite songs! \n I'm currently pursuing my Master's in Full Stack Web Development from Skill Lync.";
    var speed = 50;
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("swipe-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
})

// weather widget
$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = '0a686e818c9418c440e8b5b0b58bc5a3';
        let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;
        let city = "Chennai";
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        $.get(baseURL,function(res){
            let data = res.current;
            let temp = Math.floor(data.temp - 273);
            let condition = data.weather[0].description;

            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
        })
        
    }
    getLocation();
})






