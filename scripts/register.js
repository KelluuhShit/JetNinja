const closeBtn = document.getElementById('clos-btn');
const regForm = document.getElementById('reg-form');
const opnReg = document.getElementById('reg-btn');
const userId = document.getElementById('user-id');
// const bonusPage = document.getElementById('bonus-sec');
// const claimBtn = document.getElementById('claim-bonus');
// const welBonus = document.getElementById('welcome-bonus');
//toast function
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    // Show the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); // Slight delay to ensure the element is appended before showing

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        // Remove the toast from the DOM after it hides
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 500); // Matches the CSS transition duration
    }, 3000);
}

closeBtn.addEventListener('click', ()=>{
    regForm.style.display = 'none'
})

opnReg.addEventListener('click', ()=>{
    regForm.style.display = 'flex'
})

document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is already registered
    let storedUserName = localStorage.getItem("username");
    
    if (storedUserName) {
        // Hide the registration form
        let regForm = document.getElementById("reg-form");
        regForm.style.display = 'none';
        
        // Show the user information
        let depositBtn = document.getElementById('deposit-btn');
        let opnReg = document.getElementById("reg-btn");
        let userId = document.getElementById("user-id");
        opnReg.style.display = 'none';
        userId.textContent = storedUserName;
        userId.style.display = 'block';
        depositBtn.style.display = 'block';
    }
});

document.getElementById("reg-complete-btn").addEventListener("click", function() {
    // Get the input values
    let userName = document.getElementById("user-name").value.trim();
    let phoneNumber = document.getElementById("phone-number").value.trim();
    let userPassword = document.getElementById("user-password").value.trim();
    let termsChecked = document.getElementById("check-terms").checked;

    // Validate the form fields
    if (userName === "") {
        alert("Username cannot be empty");
        return;
    }
    
    if (phoneNumber === "") {
        alert("Phone number cannot be empty");
        return;
    }

    if (!(/^\d{10}$/.test(phoneNumber))) {
        alert("Phone number must contain exactly 10 digits");
        return;
    }

    if (userPassword.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    if (!termsChecked) {
        alert("You must agree to the terms and conditions");
        return;
    }

    // Store username in local storage
    localStorage.setItem("username", userName);

    // Hide the registration form
    let regForm = document.getElementById("reg-form");
    regForm.style.display = 'none';

    // Simulate some additional actions after registration
    setTimeout(() => {
        let depositBtn = document.getElementById('deposit-btn');
        let opnReg = document.getElementById("reg-btn");
        let userId = document.getElementById("user-id");
        opnReg.style.display = 'none';
        userId.textContent = userName;
        userId.style.display = 'block';
        depositBtn.style.display = 'block';
    }, 1000);
});



// claimBtn.addEventListener('click',()=>{
//     bonusPage.style.display = 'none'
//     setTimeout(()=>{
//         userBal = welBonus.textContent;
        
//     }, 3000);
// })

const transactionList = document.getElementById('transactionList');

// Function to add a transaction to the list
function addTransactionToList(message) {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    transactionList.appendChild(listItem);
}
// let userBalWithdraw = Number();


// let userBalWithdrawAmt = document.getElementById('userBalWithdraw');
// userBalWithdrawAmt.textContent = currentUserBal; // amount on withdrawal page

const withIcon = document.getElementById('with-icon');
const backBtn = document.getElementById('backBtn').addEventListener('click', ()=>{
    withdrawalPage.style.display = 'none';
})
const withdrawalPage = document.getElementById('withdrawalPage');
withIcon.addEventListener('click', ()=>{
    withdrawalPage.style.display = 'block';
})
const withdrawBtn = document.getElementById('withdraw-btn');
const recentTransactions = document.getElementById('recent-tranactions');
// document.getElementById('userBalWithdraw').textContent = userBalvalue;
withdrawBtn.addEventListener('click', () => {
    console.log(currentUserBal);
    let withdrawalAmt = parseFloat(document.getElementById('withdrawal-amt').value); //amount on input

    if (withdrawalAmt <= 0) {
        showToast('Please enter a valid withdrawal amount.');
        return;
    }

    if (withdrawalAmt > currentUserBal) {
        showToast('Withdrawal amount cannot exceed balance.');
        return;
    }

    if (currentUserBal < 5000) {
        showToast('Balance is less than withdrawal limit (5000).');
        return;
    }

    if (currentUserBal >= withdrawalAmt) {
        recentTransactions.style.display = 'none';

        setTimeout(() => {
            addTransactionToList('Transaction successful. You will receive payment soon.');
            currentUserBal -= withdrawalAmt;
            document.getElementById('userBal').textContent = currentUserBal;
            console.log(userBalvalue);
        }, 3000);
    }
});
