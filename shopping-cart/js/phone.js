document.getElementById('phone-increase').addEventListener('click', function () {
    const itemQuantity = numberUpdate(true, 'phone-qty');
    priceUpdate('phone-price', itemQuantity);
    totalPriceUpdate()
 })
 document.getElementById('phone-decrease').addEventListener('click', function () {
    const itemQuantity = numberUpdate(false, 'phone-qty');
    priceUpdate('phone-price', itemQuantity);
    totalPriceUpdate()
 })