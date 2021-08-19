// console.log('I am in a separate file')
// case handler function 
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    
    //  calculate total
    calculatetotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculatetotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone handler function
/* function updatePhoneNumber(isPhoneIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if (isPhoneIncreasing) {
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if(phoneNumber>0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
} */

// handle case
// increase number
document.getElementById('case-plus').addEventListener('click', function () {
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1; */
    updateProductNumber('case', 59, true);
  
});

// decrese number
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});



// handle phone event
// increase phone number
document.getElementById('phone-plus').addEventListener('click', function () {
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    phoneInput.value = parseInt(phoneNumber) + 1; */
    updateProductNumber('phone', 1219, true);
});

// decrease phone number 
document.getElementById('phone-minus').addEventListener('click', function () {
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    caseNumber = parseInt(caseNumber) - 1; */
    updateProductNumber('phone', 1219, false);
});


