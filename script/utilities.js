function clicked(){
    const seatArea = document.getElementById('seat-area');
    seatArea.scrollIntoView();
}

function setBackgroundColor(element) {
    element.classList.add('bg-green-500');
    element.classList.add('text-white');
}

function removeBackgroundColor(element) {
    element.classList.remove('bg-green-500');
    element.classList.remove('text-white');
}

function updateSeatCount(seatsLeft, seatsLeftDisplay) {
    seatsLeft--;
    seatsLeftDisplay.innerText = seatsLeft + ' seats left';
    return seatsLeft;
}

function disableUnselectedButtons(allButtons, shouldDisable) {
    for (let i = 0; i < allButtons.length; i++) {
        if (!allButtons[i].classList.contains('bg-green-500')) {
            allButtons[i].disabled = shouldDisable; 
        }
    }
}


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}