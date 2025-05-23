
let visitors = 1258;
setInterval(() => {
    visitors += Math.floor(Math.random() * 5);
    document.getElementById('visitors').innerText = visitors.toLocaleString();
}, 2000);

function updateMoroccoTime() {
    const options = { 
        timeZone: 'Africa/Casablanca',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    };
    const time = new Date().toLocaleTimeString('ar-MA', options);
    document.getElementById('morocco-time').innerText = time;
}
setInterval(updateMoroccoTime, 1000);
updateMoroccoTime();
