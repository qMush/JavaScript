const personGenerator = {
    surnameJson: `{
        "count": 5,
        "list": {
            "id_1": "Иванов",
            "id_2": "Петров",
            "id_3": "Сидоров",
            "id_4": "Кузнецов",
            "id_5": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 5,
        "list": {
            "id_1": "Екатерина",
            "id_2": "Анна",
            "id_3": "Мария",
            "id_4": "Наталья",
            "id_5": "Ольга"
        }
    }`,
    patronymicJson: `{
        "count": 5,
        "list": {
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Петрович",
            "id_5": "Владимирович"
        }
    }`,
    professionJson: {
        male: ["Слесарь", "Военный", "Шахтёр", "Инженер"],
        female: ["Медсестра", "Учительница", "Актриса", "Бухгалтер"]
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber(max = 1, min = 0) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    randomValue(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomGender() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName(gender) {
        return gender === this.GENDER_MALE
            ? this.randomValue(this.firstNameMaleJson)
            : this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname(gender) {
        let surname = this.randomValue(this.surnameJson);
        return gender === this.GENDER_FEMALE ? surname + 'а' : surname;
    },

    randomPatronymic(gender) {
        let base = this.randomValue(this.patronymicJson);
        return gender === this.GENDER_FEMALE ? base.replace('ич', 'на') : base;
    },

    randomProfession(gender) {
        return gender === this.GENDER_MALE
            ? this.professionJson.male[this.randomIntNumber(this.professionJson.male.length - 1)]
            : this.professionJson.female[this.randomIntNumber(this.professionJson.female.length - 1)];
    },

    randomBirthDate() {
        const year = this.randomIntNumber(2005, 1970);
        const months = [
            ['января', 31], ['февраля', 28], ['марта', 31], ['апреля', 30],
            ['мая', 31], ['июня', 30], ['июля', 31], ['августа', 31],
            ['сентября', 30], ['октября', 31], ['ноября', 30], ['декабря', 31]
        ];
        const monthIndex = this.randomIntNumber(11, 0);
        const month = months[monthIndex][0];
        const day = this.randomIntNumber(months[monthIndex][1], 1);
        return `${day} ${month} ${year} г.р.`;
    },

    getPerson() {
        const gender = this.randomGender();
        return {
            gender: gender,
            firstName: this.randomFirstName(gender),
            surname: this.randomSurname(gender),
            patronymic: this.randomPatronymic(gender),
            birthDate: this.randomBirthDate(),
            profession: this.randomProfession(gender)
        };
    }
};
