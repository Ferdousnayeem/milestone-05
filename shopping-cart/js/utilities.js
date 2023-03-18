// item quantities increase and decrease
function numberUpdate(isIncrease, getId) {
    const getElementById = document.getElementById(getId);
    const elementString = getElementById.value;
    const stringValue = parseInt(elementString);

    let itemQuantity;

    if (isIncrease) {
       itemQuantity = stringValue + 1;
    } else {
       itemQuantity = stringValue - 1;
    } 
    getElementById.value = itemQuantity;
    return itemQuantity;
 }

//  price set depending on item quantities

 function priceUpdate(priceId, itemQuantity) {
    const getItemPrice = document.getElementById(priceId);
    const itemPriceString = getItemPrice.innerText;
    const priceConversion = parseInt(itemPriceString);


    if (priceId == 'phone-price') {
       getItemPrice.innerText = itemQuantity * 1219;
    } else {
       getItemPrice.innerText = itemQuantity * 59;
    }
 }

//  subtotal, tax and total calculation

 function totalPriceUpdate() {
    const getCasePrice = document.getElementById('case-price');
    const casePriceString = getCasePrice.innerText;
    const casePriceConversion = parseInt(casePriceString);

    const getPhonePrice = document.getElementById('phone-price');
    const phonePriceString = getPhonePrice.innerText;
    const phonePriceConversion = parseInt(phonePriceString);

    const subtotal = casePriceConversion + phonePriceConversion; 

    let tax = subtotal * 0.1;
    let taxFixed = parseInt(tax.toFixed(2));

    const total = subtotal + taxFixed;

    console.log(typeof subtotal, typeof taxFixed, typeof total);

    const getSubtotalId = document.getElementById('sub-total');
    const subtotalString = getSubtotalId.innerText;
    getSubtotalId.innerText = subtotal;
    console.log(subtotal);

    const getTaxId = document.getElementById('tax');
    const taxString = getTaxId.innerText;
    getTaxId.innerText = taxFixed;
    console.log(taxFixed);

    const getTotalId = document.getElementById('total');
    const totalString = getTotalId.innerText;
    getTotalId.innerText = total;
    console.log(total);
 }