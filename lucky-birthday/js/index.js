const inputDay = document.getElementById("inputDay");
const inputMonth = document.getElementById("inputMonth");
const button = document.getElementById("button");
const result = document.getElementById("result");

fetch("https://raw.githubusercontent.com/Yota002/sites/master/lucky-birthday/json/birthdays.json")
    .then((response) => response.json())
    .then((data) => {
        let birthdays = data.days;
        let daysInMonths = data.daysInMonths;
        button.addEventListener("click", () => {
            if (inputDay.value > daysInMonths[inputMonth.value]) {
                result.textContent = `Error (${inputMonth.value} doesn't have ${inputDay.value} days)`;
                return;
            }

            if (inputDay.value <= 0) {
                result.textContent = `Error (${inputDay.value} day doesn't exist)`;
                return;
            }

            birthdays.find(function (day, index) {
                if (day.month == inputMonth.value && day.day == inputDay.value)
                    result.textContent = `Your position in rating is ${index + 1}!`;
            });
        });
    });