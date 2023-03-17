function getInputValue(inputById) {
    const getInput = document.getElementById(inputById);
    const inputString = getInput.value;
    const inputAmount = parseFloat(inputString);
    getInput.value = '';
    console.log(inputAmount);
    return inputAmount;
}

function getBoxElementValue(boxElementValue) {
    const boxElement = document.getElementById(boxElementValue);
    const boxElementString = boxElement.innerText;
    const boxElementAmount = parseFloat(boxElementString);
    console.log(boxElementAmount);
    return boxElementAmount;
}

function setBoxValue(boxId, boxValue) {
    const element = document.getElementById(boxId);
    element.innerText = boxValue;
}