function updatePhoneNumber(isIncrease) {
    const increasePhoneQty = document.getElementById('phone-qty');
    const increaseQtyType = increasePhoneQty.value;
    const phoneQty = parseInt(increaseQtyType); 

    let qtyIncrease;

    if (isIncrease) {
        qtyIncrease = phoneQty + 1;
    } else {
        qtyIncrease = phoneQty - 1;
    }
    increasePhoneQty.value = qtyIncrease;
    return qtyIncrease;
}


function updatePhonePrice(qtyIncrease) {
    const itemPrice = qtyIncrease * 1219; 
    const itemElement = document.getElementById('phone-price');
    itemElement.innerText = itemPrice;
}


document.getElementById('phone-increase').addEventListener('click', function () {
    const qtyIncrease = updatePhoneNumber(true);

    updatePhonePrice(qtyIncrease);
});

document.getElementById('phone-decrease').addEventListener('click', function () {
    const qtyIncrease =  updatePhoneNumber(false);

    updatePhonePrice(qtyIncrease);
})