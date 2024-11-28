const startDate = new Date("2024-12-01T00:00:00");
const endDate = new Date("2024-12-24T23:59:59");
const currentDate = new Date();
const music = document.getElementById('background-music');

// Funkcja do obsługi odblokowywania zakładek
function unlockDays() {
    const today = new Date();
    const dayOfMonth = today.getDate();

    for (let i = 1; i <= dayOfMonth && i <= 24; i++) {
        const day = document.getElementById(`day-${i}`);
        day.classList.add('open');
        day.onclick = () => day.querySelector('.content').classList.toggle('hidden');
    }
}

// Funkcja do odliczania czasu
function updateCountdown() {
    const now = new Date();
    const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeRemaining = nextDay - now;

    if (timeRemaining > 0) {
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemaining / 1000) % 60);

        document.getElementById('timer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Inicjalizacja
function init() {
    unlockDays();
    setInterval(updateCountdown, 1000);
}

init();
