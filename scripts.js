window.onload = function() {
    clock();
}

function clock() {
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();

    hr = padSingleDigits(hr);
    min = padSingleDigits(min);

    date = addOrdinalSuffix(date);

    document.getElementById("time").innerHTML = `${hr}:${min}`;
    document.getElementById("date").innerHTML = `${days[day - 1]} ${date} ${months[month]}`;

    setTimeout(clock, 1000);
}

function padSingleDigits(num) {
    if (num < 10) {
        num = "0" + num;
    }

    return num;
}

function addOrdinalSuffix(date) {
    if (date == 1 || date == 21 || date == 31) {
        date = date + "st";
    }
    else if (date == 2 || date == 22) {
        date = date + "nd";
    }
    else if (date == 3 || date == 23) {
        date = date + "rd";
    }
    else {
        date = date + "th";
    }

    return date;
}