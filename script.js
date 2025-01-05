// Имитация JSON-данных о занятиях
const classesData = [
    { id: 1, name: "Йога", time: "10:00", maxParticipants: 15, currentParticipants: 8 },
    { id: 2, name: "Пилатес", time: "11:30", maxParticipants: 12, currentParticipants: 10 },
    { id: 3, name: "Зумба", time: "18:00", maxParticipants: 20, currentParticipants: 15 },
    { id: 4, name: "Кроссфит", time: "19:30", maxParticipants: 10, currentParticipants: 8 }
];

// Функция для отображения занятий
function displayClasses() {
    const scheduleContainer = document.getElementById('schedule');
    scheduleContainer.innerHTML = '';

    classesData.forEach(classItem => {
        const classCard = document.createElement('div');
        classCard.className = 'class-card';
        classCard.innerHTML = `
            <h2>${classItem.name}</h2>
            <p>Время: ${classItem.time}</p>
            <p>Участники: <span id="participants-${classItem.id}">${classItem.currentParticipants}</span> / ${classItem.maxParticipants}</p>
            <button id="register-btn-${classItem.id}" onclick="registerForClass(${classItem.id})">Записаться</button>
            <button id="unregister-btn-${classItem.id}" onclick="unregisterFromClass(${classItem.id})">Отменить запись</button>
        `;
        scheduleContainer.appendChild(classCard);
        updateButtonsState(classItem.id);
    });
}

// Функция для обновления состояния кнопки
function updateButtonsState(classId) {
    const registerButton = document.getElementById(`register-btn-${classId}`);
    const unregisterButton = document.getElementById(`unregister-btn-${classId}`);
    const classItem = classesData.find(item => item.id === classId);

    if (classItem.currentParticipants >= classItem.maxParticipants) {
        registerButton.disabled = true;
        registerButton.textContent = 'Мест нет';
        unregisterButton.style.display = 'inline-block';
    } else {
        registerButton.disabled = false;
        registerButton.textContent = 'Записаться';
        unregisterButton.style.display = classItem.currentParticipants > 0 ? 'inline-block' : 'none';
    }
}

// Функция для записи/отмены записи на занятие
function registerForClass(classId) {
    const classItem = classesData.find(item => item.id === classId);
    const participantsElement = document.getElementById(`participants-${classId}`);

    if (classItem.currentParticipants < classItem.maxParticipants) {
        classItem.currentParticipants++;
        participantsElement.textContent = classItem.currentParticipants;
        updateButtonsState(classId);
    }
}

function unregisterFromClass(classId) {
    const classItem = classesData.find(item => item.id === classId);
    const participantsElement = document.getElementById(`participants-${classId}`);

    if (classItem.currentParticipants > 0) {
        classItem.currentParticipants--;
        participantsElement.textContent = classItem.currentParticipants;
        updateButtonsState(classId);
    }
}

// Инициализация отображения занятий
displayClasses();

