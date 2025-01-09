const UNSPLASH_API_KEY = '3_UQ6H9sxZbse3IBUHnuxyjI7uo6ul4dsiuGPdilCbQ';

const dailyImage = document.getElementById('daily-image');
const photographerInfo = document.getElementById('photographer-info');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');

let currentImageId = '';

// Функция для получения случайного изображения
async function fetchRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}`);
        const data = await response.json();

        dailyImage.src = data.urls.regular;
        dailyImage.alt = data.alt_description || 'Случайное изображение';
        photographerInfo.textContent = `Фотограф: ${data.user.name}`;

        currentImageId = data.id;
        updateLikeCount();
    } catch (error) {
        console.error('Ошибка при загрузке изображения:', error);
    }
}

// Функция для обновления счетчика лайков
function updateLikeCount() {
    const likes = JSON.parse(localStorage.getItem('imageLikes')) || {};
    likeCount.textContent = likes[currentImageId] || 0;
}

// Обработчик клика по кнопке "Лайк"
likeButton.addEventListener('click', () => {
    const likes = JSON.parse(localStorage.getItem('imageLikes')) || {};
    likes[currentImageId] = (likes[currentImageId] || 0) + 1;
    localStorage.setItem('imageLikes', JSON.stringify(likes));
    updateLikeCount();
});

// Загрузка изображения при загрузке страницы
fetchRandomImage();

// Проверка и обновление изображения каждый день
const lastUpdateDate = localStorage.getItem('lastUpdateDate');
const currentDate = new Date().toDateString();

if (lastUpdateDate !== currentDate) {
    fetchRandomImage();
    localStorage.setItem('lastUpdateDate', currentDate);
}

