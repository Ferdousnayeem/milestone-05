function updateCaseNumber(isIncrease) {
    const increaseCaseQty = document.getElementById('case-qty');
    const increaseQtyType = increaseCaseQty.value;
    const caseQty = parseInt(increaseQtyType);

    let qtyIncrease;

    if (isIncrease) {
        qtyIncrease = caseQty + 1;
    } else {
        qtyIncrease = caseQty - 1;
    }
    increaseCaseQty.value = qtyIncrease;
    return qtyIncrease;
}

function updateCasePrice(qtyIncrease) {
    const itemPrice = qtyIncrease * 59;
    const itemElement = document.getElementById('case-price')
    itemElement.innerText = itemPrice;
}


document.getElementById('case-increase').addEventListener('click', function () {
    const qtyIncrease = updateCaseNumber(true);
    updateCasePrice(qtyIncrease)
});


document.getElementById('case-decrease').addEventListener('click', function () {
    const qtyIncrease = updateCaseNumber(false);
    updateCasePrice(qtyIncrease)
});