// Устанавливаем русскую локаль
moment.locale('ru');

function updateDateTime() {
    const now = moment();
    document.getElementById('hours').innerText = now.format('HH'); // Часы
    document.getElementById('minutes').innerText = now.format('mm'); // Минуты
    document.getElementById('seconds').innerText = now.format('ss'); // Секунды
    document.getElementById('current-date').innerText = now.format('dddd, D MMMM YYYY'); // Формат даты
}

// Обновляем время каждую секунду
setInterval(updateDateTime, 1000);
updateDateTime(); // Первоначальный вызов функции
