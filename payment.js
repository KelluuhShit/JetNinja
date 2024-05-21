    const paymentEmailCont = document.getElementById('paymentEmailCont');
    const emailAlert = document.getElementById('emailAlert'); // Assuming you have an element with the id 'emailAlert' in your HTML
    const makeDeposit = document.getElementById('deposit-btn');
    const makeTransact = document.getElementById('makeTransact');
    // let currentUserBal = 0;
    makeDeposit.addEventListener('click', () => {
        paymentEmailCont.style.display = 'flex';
    });
    

function initializePayment(email, amount, reference, callback_url) {
    // Initialize Paystack SDK with your public key
    if (window.PaystackPop) {
        var paystack = window.PaystackPop.setup({
            key: 'pk_test_b0d6ef2b63f05e61e4cec98643aee5972e7f9af5', // Replace with your actual Paystack public key
            email: email,
            amount: amount * 100, // Convert amount to kobo (Paystack expects amount in kobo)
            currency: 'KES',
            ref: reference,
            metadata: {
                custom_fields: [
                    {
                        display_name: "Customer Email",
                        variable_name: "email",
                        value: email
                    }
                ]
            },
            callback: function(response) {
                // Handle successful payment callback
                console.log(response);
                console.log(amount + "deposited")
                
                function updateUserBalance(amount) {
                    let userBal = document.getElementById('userBal');
                    let currentUserBal = parseInt(userBal.textContent);
                    userBal.textContent = '';
                    // Add the amount to the current balance
                    currentUserBal = amount;
                
                    // Update the balance in the DOM
                    userBal.textContent = currentUserBal;
                    document.getElementById('userBal').textContent = currentUserBal;
                    // Store the updated balance in localStorage
                    localStorage.setItem('userBalance', currentUserBal);
                }
                updateUserBalance(amount);
                
                // Optionally redirect or perform other actions after successful payment
            },
            onClose: function() {
                // Handle payment modal closure
                console.log('Payment modal closed');
            }
        });
        // Open Paystack payment modal
        paystack.openIframe();
    } else {
        console.error('PaystackPop is not available.');
    }

    
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

makeTransact.addEventListener("click", ()=> {
    
    const amountDepositError = document.getElementById('amountDepositError');
    console.log('deposit');
    var email = document.getElementById('paymentEmail').value;
    var amount = document.getElementById('paymentAmount').value;

    if (amount < 100 ){
        amountDepositError.style.color = 'rgba(255, 0, 0, 1)';
        return;
    }
    if (!email) {
        emailAlert.style.display = 'block'
        setTimeout(() => {
            emailAlert.style.display = 'none'
        }, 1500);
        return;
    }
    // Validate email format
    if (!validateEmail(email)) {
        emailAlert.style.display = 'block'
        setTimeout(() => {
            emailAlert.style.display = 'none'
        }, 1500);
        return;
    }
    var reference = 'ACT_' + Math.random().toString(36).substring(7); // Generate a unique reference for each transaction
    var callback_url = 'https://6624f8c8427b5faa6d30f32b--tikconverse.netlify.app/'; // Callback URL after payment completion
    initializePayment(email, amount, reference, callback_url);
    paymentEmailCont.style.display = 'none';
    
});