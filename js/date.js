function showDate() {
    var d = new Date();
    var day = getWeekDay(d.getDay());
    var date = d.getDate();
    var month = getMonthName(d.getMonth()+1);

    var today = day + ", " + date + ". " + month;

    document.getElementById("dateClock").innerText = today;
    document.getElementById("dateClock").textContent = today;
}

function getWeekDay(i) {
    const weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    return weekdays[i-1];
}

function getMonthName(i) {
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    return monthNames[i-1];
}

showDate();
