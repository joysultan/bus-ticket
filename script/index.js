// Set up elements and variables
const totalPriceElement = document.getElementById('total-price');
let seatsLeft = 40;
let selectSeatsCount = 0;
const seatLeftDisplay = document.getElementById('seats-left-display');
seatLeftDisplay.innerText = seatsLeft + ' seats left';
const seatDetailsContainer = document.getElementById('selected-seats');
const totalPriceDisplay = document.getElementById('total-price');
const afterDiscountTotalDisplay = document.getElementById('after-discount');
const seatPrice = 550;
let totalPrice = 0;
const couponInput = document.getElementById('couponInput');
const applyButton = document.getElementById('applyButton');



// Add event listeners to seat buttons
const allButtons = document.querySelectorAll('.seat-btn');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function () {
        toggleSeatSelection(allButtons[i]);
    });
}

function toggleSeatSelection(button) {
    if (button.classList.contains('bg-green-500')) {
        deselectSeat(button);
    } else {
        if (seatsLeft > 0 && selectSeatsCount < 5) {
            selectSeat(button);
        }
    }

    if (selectSeatsCount === 5) {
        disableUnselectedButtons(allButtons, true);
    } else {
        disableUnselectedButtons(allButtons, false);
    }
}

// Select a seat
function selectSeat(button) {
    setBackgroundColor(button);
    selectSeatsCount++;
    seatsLeft--;
    seatLeftDisplay.innerText = seatsLeft + ' seats left';

    const rowLabel = button.innerText.charAt(0);

    const seatInfo = document.createElement('div');
    seatInfo.classList.add('flex', 'items-center', 'justify-between');
    seatInfo.innerHTML = `
        <p style="font-weight: 600;">${button.innerText}</p>
        <p style="font-weight: 600;">${rowLabel}</p>
        <p style="font-weight: 600;">BDT ${seatPrice}</p>
    `;
    seatInfo.setAttribute('id', 'seat-' + button.innerText);
    seatDetailsContainer.appendChild(seatInfo);

    totalPrice += seatPrice;
    updateTotalPrice();
}

// Deselect a seat
function deselectSeat(button) {
    removeBackgroundColor(button);
    selectSeatsCount--;
    seatsLeft++;
    seatLeftDisplay.innerText = seatsLeft + ' seats left';

    const seatInfo = document.getElementById('seat-' + button.innerText);
    if (seatInfo) {
        seatDetailsContainer.removeChild(seatInfo);
    }

    totalPrice -= seatPrice;
    updateTotalPrice();
}

// Update total price display
function updateTotalPrice() {
    totalPriceDisplay.innerText = totalPrice;
    afterDiscountTotalDisplay.innerText = totalPrice; 
}

// Define discount rates
const discountRates = {
    'NEW15': 15,
    'Couple20': 20
};

// Function to apply the discount
function applyDiscount() {
    const originalTotalPrice = totalPrice;
    const couponCode = couponInput.value;

    if (discountRates[couponCode]) {
        const discount = (originalTotalPrice * discountRates[couponCode]) / 100;
        const discountedTotal = originalTotalPrice - discount;
        
        afterDiscountTotalDisplay.innerText = discountedTotal.toFixed(2);
        
        applyButton.disabled = true;
        couponInput.disabled = true;
    } else {
        alert("Invalid coupon code.");
    }
}

// Enable apply button for valid coupon codes
couponInput.addEventListener('input', function() {
    const couponCode = couponInput.value;
    applyButton.disabled = !discountRates[couponCode];
});

// Event listener for apply button
applyButton.addEventListener('click', applyDiscount);

// Helper functions to add/remove background color for selected seats
function setBackgroundColor(button) {
    button.classList.add('bg-green-500', 'text-white');
}

function removeBackgroundColor(button) {
    button.classList.remove('bg-green-500', 'text-white');
}

// Helper function to disable/enable unselected buttons based on selection count
function disableUnselectedButtons(buttons, disable) {
    buttons.forEach(button => {
        if (!button.classList.contains('bg-green-500')) {
            button.disabled = disable;
        }
    });
}

function homePage(){
    window.location.href="index.html"
}

function nextBtn(){
   window.location.href= "success.html"
    
}




