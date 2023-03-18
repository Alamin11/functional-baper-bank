document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousBalanceTotal = getElementValueById('balance-total');

    // get previous withdraw amount
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // update new withdraw amount
    updateElementValue('withdraw-total', newWithdrawTotal);
    // update new balance total after withdraw
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    updateElementValue('balance-total', newBalanceTotal);

    // const previousBalanceTotal = getElementValueById('balance-total');
})