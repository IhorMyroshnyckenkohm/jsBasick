function ageMessage(age) {
    let message = "Вам " + age + " ";

    if (age % 10 === 1 && age % 100 !== 11) {
        message += "рік";
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
        message += "роки";
    } else {
        message += "років";
    }

    console.log(message);
}

ageMessage(21);
ageMessage(32);
ageMessage(12);
