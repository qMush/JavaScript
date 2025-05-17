let minValue;
let maxValue;
let answerNumber;
let orderNumber = 1;
let gameRun = true;

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
    "Я сразу знал",
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

function numberToText(n) {
    const ones = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let text = '';
    let sign = n < 0 ? 'минус ' : '';
    n = Math.abs(n);

    const h = Math.floor(n / 100);
    const t = Math.floor((n % 100) / 10);
    const o = n % 10;

    if (h > 0) text += hundreds[h] + ' ';
    if (t > 1) {
        text += tens[t] + ' ';
        if (o > 0) text += ones[o];
    } else if (t === 1) {
        text += teens[o];
    } else {
        if (o > 0 || h === 0) text += ones[o];
    }

    return sign + text.trim();
}

function getAnswerText(n) {
    const text = numberToText(n);
    return text.length <= 20 ? text : n.toString();
}

function startGame() {
    const minInput = parseInt(document.getElementById('minInput').value);
    const maxInput = parseInt(document.getElementById('maxInput').value);

    minValue = isNaN(minInput) ? -999 : Math.max(-999, Math.min(999, minInput));
    maxValue = isNaN(maxInput) ? 999 : Math.max(-999, Math.min(999, maxInput));

    if (minValue > maxValue) {
        [minValue, maxValue] = [maxValue, minValue];
    }

    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `${getRandomPhrase(guessPhrases)} ${getAnswerText(answerNumber)}?`;

    document.getElementById('startForm').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
}

document.getElementById('btnStart').addEventListener('click', startGame);

document.getElementById('btnRetry').addEventListener('click', function () {
    document.getElementById('startForm').style.display = 'block';
    document.getElementById('gameArea').style.display = 'none';
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue > maxValue) {
            answerField.innerText = `Вы загадали неправильное число!\n🤔`;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${getRandomPhrase(morePhrases)} ${getAnswerText(answerNumber)}?`;
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue > maxValue) {
            answerField.innerText = `Вы загадали неправильное число!\n🤔`;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${getRandomPhrase(lessPhrases)} ${getAnswerText(answerNumber)}?`;
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `${getRandomPhrase(winPhrases)}!`;
        gameRun = false;
    }
});
