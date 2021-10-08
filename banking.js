

function getInputValue(inputId, outputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    const output = document.getElementById(outputId);
    const outputValue = parseFloat(output.innerText);

    if (inputValue >= 0) {
        const outputTotal = outputValue + inputValue;
        return output.innerText = outputTotal
    }





    input.value = "";
}


function getBalence(input, output, istrue) {
    const balence = document.getElementById(input);

    const balanceDeposit = parseFloat(balence.innerText);
    // console.log(balanceDeposit)

    const inputBalence = document.getElementById(output)

    const inputBalenceValue = parseFloat(inputBalence.value);
    // console.log(inputBalence.value);

    const balenceTotal = balanceDeposit + inputBalenceValue;

    // inputBalence.value = "";

    // if (istrue == true) {
    //     balence.innerText = balanceDeposit + inputBalenceValue;
    // } else if (istrue == false) {
    //     balence.innerText = balanceDeposit - inputBalenceValue;
    // }

    if (inputBalence.value < 0) {


    }




    if (inputBalence.value < 0) {
        balence.innerText = balence.innerText;

    }

    inputBalence.value = "";


    return balence.innerText = balenceTotal


}
const inputs = document.getElementById('deposit-input');
inputs.addEventListener('keyup', function (even) {
    const deeteConfarm = document.getElementById('diposit-btn');
    if (even.target.value >= 0) {
        document.getElementById('diposit-btn').removeAttribute("disabled");
    } else {
        deeteConfarm.setAttribute("disabled", true);
    }
})

const deposit = document.getElementById('diposit-btn');
deposit.addEventListener('click', function () {

    getInputValue('deposit-input', 'diposit-money');
    getBalence('balance', 'deposit-input', true)


})
document.getElementById('withdraw-btn').addEventListener('click', function () {

    getInputValue('withdraw-input', 'withdraw-value');
    getBalence('balance', 'withdraw-input', false)
});