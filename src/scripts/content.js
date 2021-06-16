var banner = document.createElement("h2");
banner.id = "timer-banner"
banner.innerHTML = "";
document.body.insertBefore(banner,document.body.childNodes[0]);

var seconds = 0, minutes = 0, hours = 0, t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    banner.textContent = "You have wasted " + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + " of your life.";
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
