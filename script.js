function toggleLight() {
    const bulb = document.getElementById('lightBulb');
    const btn = document.getElementById('switchBtn');

    // Check if the image source currently shows the 'off' bulb
    if (bulb.src.match("bulboff")) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        btn.innerHTML = "Turn Off";
        btn.style.backgroundColor = "#7f8c8d"; // Change button color when on
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        btn.innerHTML = "Turn On";
        btn.style.backgroundColor = "#f39c12"; // Change button color when off
    }
}