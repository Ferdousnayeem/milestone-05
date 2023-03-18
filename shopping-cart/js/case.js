document.getElementById('case-increase').addEventListener('click', function () {
    const itemQuantity = numberUpdate(true, 'case-qty');
    priceUpdate('case-price', itemQuantity);
    totalPriceUpdate()
 })
 document.getElementById('case-decrease').addEventListener('click', function () {
    const itemQuantity = numberUpdate(false, 'case-qty');
    priceUpdate('case-price', itemQuantity);
    totalPriceUpdate()
 })