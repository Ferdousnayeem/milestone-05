function getPin() {
    const pin = generatePin();
    const pinString = pin + "";
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

document.getElementById('generate-pin').addEventListener("click", function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    } else {
    const newTypedNumber = previousTypedNumber + number;
    typeNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none'
    } 
    else {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'block'
    }
})