// عداد الزوار
let visitors = 1258;
setInterval(() => {
    visitors += Math.floor(Math.random() * 3);
    document.getElementById('visitors').innerText = visitors.toLocaleString();
}, 2000);

// توقيت المغرب
function updateMoroccoTime() {
    const options = { 
        timeZone: 'Africa/Casablanca',
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    };
    const time = new Date().toLocaleTimeString('ar-MA', options);
    document.getElementById('morocco-time').innerText = time;
}
setInterval(updateMoroccoTime, 1000);
updateMoroccoTime();
