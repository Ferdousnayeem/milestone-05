

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const getWithdrawInputAmount = getInputValue('withdraw-field');

    const withdrawBox = getBoxElementValue('withdraw-total');

    const totalWithdraw = getWithdrawInputAmount + withdrawBox;

    console.log(totalWithdraw);

    const setWithdraw = setBoxValue('withdraw-total', totalWithdraw);

    const previousBalanceBox = getBoxElementValue('balance-total');

    const totalBalanceAfterWithdraw = previousBalanceBox - getWithdrawInputAmount; 
    
    const afterWithdrawTotalBalance = setBoxValue('balance-total', totalBalanceAfterWithdraw); 

})