// Функция для создания снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '&#10052;'; // Код снежинки
    snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Случайная позиция по горизонтали
    snowflake.style.fontSize = Math.random() * 60 + 30 + 'px'; // Случайный размер
    
    // Задаем случайную скорость вращения (от 2 до 5 секунд)
    const rotationSpeed = Math.random() * 3 + 2; // Значение от 2 до 5 секунд
    const directrotation = Math.random() >.5? 'Rotate': 'InvertRotate';
    const fallSpeed = Math.random() * 5 + 5;
    snowflake.style.animation = `snowflake${directrotation} ${rotationSpeed}s linear infinite`;
    document.body.appendChild(snowflake);
  
    // Анимация падения снежинки
    setTimeout(() => {
        snowflake.style.transition = `top ${fallSpeed}s linear`;
        snowflake.style.top = window.innerHeight + 'px'; // Падает до низа экрана
    }, 10);
  
    // Удаляем снежинку после падения
    setTimeout(() => {
        snowflake.remove();
    }, 10100);
  }
  
  // Создаем снежинки каждые 200 миллисекунд
  setInterval(createSnowflake, 200);