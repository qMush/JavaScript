document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById("generateBtn");
    const clearBtn = document.getElementById("clearBtn");

    generateBtn.addEventListener('click', function () {
        const person = personGenerator.getPerson();
        document.getElementById('firstNameOutput').innerText = person.firstName;
        document.getElementById('surnameOutput').innerText = person.surname;
        document.getElementById('patronymicOutput').innerText = person.patronymic;
        document.getElementById('genderOutput').innerText = person.gender;
        document.getElementById('birthDateOutput').innerText = person.birthDate;
        document.getElementById('professionOutput').innerText = person.profession;
    });

    clearBtn.addEventListener('click', function () {
        document.getElementById('firstNameOutput').innerText = 'Имя';
        document.getElementById('surnameOutput').innerText = 'Фамилия';
        document.getElementById('patronymicOutput').innerText = 'Отчество';
        document.getElementById('genderOutput').innerText = '—';
        document.getElementById('birthDateOutput').innerText = '—';
        document.getElementById('professionOutput').innerText = '—';
    });
});
