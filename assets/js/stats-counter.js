document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('hero-count');
    if (counter) {
        let count = 0;
        const target = 41;
        const interval = setInterval(() => {
            count++;
            counter.textContent = count;
            if (count >= target) clearInterval(interval);
        }, 40);
    }
});