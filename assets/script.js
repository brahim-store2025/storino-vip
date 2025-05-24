
window.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        const formatted = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} `
                        + `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
        document.getElementById('clock').textContent = '⏰ ' + formatted;
    }
    setInterval(updateClock, 1000);
    updateClock();

    let visitors = 1400;
    function updateVisitors() {
        visitors += Math.floor(Math.random() * 3);
        document.getElementById('visitors').textContent = '👥 ' + visitors + ' visiteurs';
    }
    setInterval(updateVisitors, 2000);
    updateVisitors();
});
