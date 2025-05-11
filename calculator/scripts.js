let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

// Обработчики для цифр
for (let i = 0; i <= 9; i++) {
  document.getElementById('btn_' + i).addEventListener('click', function () {
    inputWindow.value += i;
  });
}

// Операции
document.getElementById('btn_sum').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'sum';
  inputWindow.value = '';
});

document.getElementById('btn_def').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'def';
  inputWindow.value = '';
});

document.getElementById('btn_mult').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'mult';
  inputWindow.value = '';
});

document.getElementById('btn_div').addEventListener('click', function () {
  lastOperand = parseFloat(inputWindow.value);
  operation = 'div';
  inputWindow.value = '';
});

document.getElementById('btn_sqrt').addEventListener('click', function () {
  const value = parseFloat(inputWindow.value);
  if (value >= 0) {
    inputWindow.value = Math.sqrt(value);
  } else {
    inputWindow.value = 'Ошибка';
  }
  lastOperand = 0;
  operation = null;
});

// Вычисление
document.getElementById('btn_calc').addEventListener('click', function () {
  const currentValue = parseFloat(inputWindow.value);
  let result;

  switch (operation) {
    case 'sum':
      result = lastOperand + currentValue;
      break;
    case 'def':
      result = lastOperand - currentValue;
      break;
    case 'mult':
      result = lastOperand * currentValue;
      break;
    case 'div':
      result = currentValue === 0 ? 'Ошибка' : lastOperand / currentValue;
      break;
    default:
      result = inputWindow.value;
  }

  operation = null;
  lastOperand = 0;
  inputWindow.value = result;
});

// Очистка
document.getElementById('btn_clr').addEventListener('click', function () {
  lastOperand = 0;
  operation = null;
  inputWindow.value = '';
});
