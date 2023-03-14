

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw amount from input field
    const withdrawField = document.getElementById('user-withdraw');
    const withdrawAmount = withdrawField.value;
    const convertedWithdrawAmount = parseFloat(withdrawAmount);

    // get total withdraw
    const withdrawBox = document.getElementById('withdraw-amount');
    const withdraw = withdrawBox.innerText;
    const convertedWithdraw = parseFloat(withdraw);
    withdrawBox.innerText = convertedWithdrawAmount.toFixed(2);
    
    /* // set total deposit
    const totalDeposit = convertedDeposit + convertedDepositAmount;
    depositBox.innerText = totalDeposit; */
    
    withdrawField.value = '';

    // get previous balance
    const balanceBox = document.getElementById('total-balance');
    const balance = balanceBox.innerText;
    const convertedBalance = parseFloat(balance);

    // set total balance
    const totalBalanceAfterWithdraw = convertedBalance - convertedWithdrawAmount;
    balanceBox.innerText = totalBalanceAfterWithdraw.toFixed(2); 
});