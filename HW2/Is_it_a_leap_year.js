function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " є високосним роком.");
    } else {
        console.log(year + " не є високосним роком.");
    }
}

isLeapYear(2024);
