const MAX_MINUTES = 59
const MIN_MINUTES = 0

let minutes = 0

let addMinute = () => {
    if (minutes < MAX_MINUTES) {
        minutes++
    }
    console.log('minutes: ', minutes);
}

let subMinute = () => {
    if (minutes > MIN_MINUTES) {
        minutes--
    }
    console.log('minutes: ', minutes);
}

const upButton = document.getElementById('upButton')
const downButton = document.getElementById('downButton')

upButton.addEventListener('click', addMinute)
downButton.addEventListener('click', subMinute)


//setTimeout para decrementar el timer
