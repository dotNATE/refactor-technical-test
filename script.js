let showDaysButtonElement = $("#trigger")
let daysUntilListElement = $("#days-until")

let futureDates = {
    "Christmas": new Date(2021,12,25),
    "New Years": new Date(2022,1,1),
    "Valentines": new Date(2022,2,14)
}

function getDaysUntil(futureDate) {
    let currentDate = new Date()
    let differenceInMilliseconds = (futureDate-currentDate)
    let millisecondsPerDay = (24*3600*1000)
    let daysUntil = parseInt(differenceInMilliseconds/millisecondsPerDay)

    return daysUntil.toString()
}

function handleClickEvent() {
    for (let [dateString, futureDate] of Object.entries(futureDates)) {
        let daysUntil = getDaysUntil(futureDate)
        daysUntilListElement.append("<li>" + daysUntil + " days until " + dateString + " Day</li>")
    }
}

showDaysButtonElement.click(handleClickEvent)