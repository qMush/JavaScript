let minValue, maxValue, answerNumber, orderNumber = 1, gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const guessPhrases = [
    "Может быть, это число",
    "Точно, это должно быть",
    "Думаю, вы загадали",
    "А если так: это число",
    "Неужели это"
];

const winPhrases = [
    "Я сразу знал)",
    "Это было легко",
    "Я всегда угадываю"
];

const morePhrases = [
    "А может быть больше?",
    "Может, это большее число?",
    "Попробуем увеличить!",
    "Я уверен, что это большее число!"
];

const lessPhrases = [
    "А может быть меньше?",
    "Попробуем уменьшить?",
    "Наверное, это меньшее число!",
    "Я думаю, что это число меньше!"
];

function getRandomPhrase(phrases) {
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
}

function startGame() {
    minValue = 0;
    maxValue = 1000;  
    
    answerNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;  // Генерация случайного числа
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `${getRandomPhrase(guessPhrases)} ${answerNumber}?`;
}


document.getElementById('btnRetry').addEventListener('click', function () {
    startGame();
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue > maxValue) {
            answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${getRandomPhrase(morePhrases)} ${answerNumber}?`;
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue > maxValue) {
            answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${getRandomPhrase(lessPhrases)} ${answerNumber}?`;
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `${getRandomPhrase(winPhrases)}!`;
        gameRun = false;
    }
});

// Инициализируем игру при загрузке страницы
startGame();
