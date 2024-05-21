let storedBalance = Number();
storedBalance = localStorage.getItem('userBalance');
document.getElementById('userBal').textContent = storedBalance;

document.addEventListener('DOMContentLoaded', function() {
    // storedBalance = localStorage.getItem('userBalance');
    // if (storedBalance !== null) {
    //     document.getElementById('userBal').textContent = storedBalance;
    // } else {
    //     // If no balance is stored, initialize it to 0
    //     document.getElementById('userBal').textContent = '0';
    // }

    localStorage.getItem('currentUserBal', currentUserBal);
    document.getElementById('userBal').textContent = currentUserBal;
});



const stakeButton = document.getElementById('stakeButton');
const previousStopValues = [];
const nextRound = document.getElementById('nextRound');
const counterHeader = document.getElementById('counterHeader');
const glowingContainer = document.getElementById("glowingContainer");
const remStake = document.getElementById('remStake');
const addStake = document.getElementById('addStake');
// let counterStarted = false;
function playBustSound() {
    const bustSound = document.getElementById("bustSound");
    bustSound.play();
    }
    const waitingQue = document.getElementById('queu');
    const containers = document.querySelectorAll('.plrne');
    let index = 0;
    const spanElement = document.getElementById('ttl-bts');
    const playersContBox = document.getElementById('plr-stk');
    let playersContBoxShow = false

// Declare randomValues array in the global scope
let betCounter = false;
let count = 0.10;
let random = Math.floor(Math.random() * (70 - 40 + 1)) + 40;

    let wonResult;
    let multiplicationTimeout;
    let result;
    let countingElement = 0;
    let lastCounterValue;
    let animationStopped = false; // Flag to control animation stopping
    let bettingValid = false;
    let stakeExecuted;
    let cashoutMode;
    let subtractionExecuted = false;

function startCounting() {
    count += 1;
    betCounter = true;
    spanElement.textContent = count.toFixed(0);

    if (count >= random) {
        
        count = 0.10;
        
        random = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
        
        betCounter = false;
    } else {
        setTimeout(startCounting, 50);
    }

}

function shuffleItems() {
    const container = document.getElementById('shuffleContainer');
    const items = container.children;

    // Convert HTMLCollection to array for shuffling
    const itemsArray = Array.from(items);

    // Shuffle the array
    itemsArray.sort(() => Math.random() - 0.5);

    // Clear the container
    container.innerHTML = '';

    // Append shuffled items back to the container
    itemsArray.forEach(item => {
        container.appendChild(item);
    });

}




// Function to generate random numbers
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) * 10 + min;
}
let plrneContainers;
function randomizeStakeValues() {
    const userStakeContainer = document.getElementById('shuffleContainer');
    const plrneContainers = userStakeContainer.querySelectorAll('.plrne');

    // Generate random values and store them in an array
    const randomValues = [];
    for (let i = 0; i < plrneContainers.length; i++) {
        let minValue, maxValue;
        if (i === 0) {
            // First container, value ranges from 300 to 350
            minValue = 300;
            maxValue = 350;
        } else if (i === plrneContainers.length - 1) {
            // Last container, value ranges from 20 to 50
            minValue = 20;
            maxValue = 50;
        } else {
            // Other containers, value ranges from 20 to 350
            minValue = 20;
            maxValue = 350;
        }
        randomValues.push(getRandomNumber(minValue, maxValue));
    }

    // Sort the random values array in descending order
    randomValues.sort((a, b) => b - a);

    // Iterate through each plrne container and assign the sorted random values
    plrneContainers.forEach((container, index) => {
        // Find userStakeId and userCashoutId spans within the current plrne container
        const userStakeSpan = container.querySelector('#userStakeId');
        const userCashoutSpan = container.querySelector('#userCashoutId');
    
        // Assign the same random value to both userStakeId and userCashoutId spans
        const randomValue = randomValues[index];
        userStakeSpan.textContent = randomValue;
    
        // Function to generate and count
        function generateAndCount(max) {
            let currentValue = 0.55;
            const randomNumber = Math.floor(Math.random() * (max + 1));
            for (let i = 0; i <= randomNumber; i++) {
                setTimeout(() => {
                    // console.log(currentValue.toFixed(2));
                    currentValue *= 1.5; // Multiply by 1.5 after every two seconds
    
                    // Perform multiplication and update userCashoutSpan
                    const cashoutMultiplication = randomValue * currentValue;
                    userCashoutSpan.textContent = cashoutMultiplication.toFixed(0);
                }, i * 2000); // Change 2000 to adjust the interval (2 seconds in this case)
            }
        }
    
        // Example usage:
        const maxNumber = 10; // Change this to the maximum number you want
        generateAndCount(maxNumber);
    });
    
}





        // Define the event listener functions
        const oneHrdClickHandler = () => { addoneHrd(); };
        const twoHrdClickHandler = () => { addtwoHrd(); };
        const fiveHrdClickHandler = () => { addfiveHrd(); };
        const thsHsdClickHandler = () => { addThsd(); };
    
    


const coordinates = [
    [0, 0], [0.1, 0.003], [0.2, 0.01], [0.3, 0.022], [0.4, 0.04], [0.5, 0.063],
    [0.6, 0.09], [0.7, 0.1225], [0.8, 0.16], [0.9, 0.2025], [1, 0.25], [1.1, 0.3025],
    [1.2, 0.36], [1.3, 0.4225], [1.4, 0.49], [1.5, 0.5625], [1.6, 0.64], [1.7, 0.723],
    [1.8, 0.81], [1.9, 0.9025], [2, 1], [2.1, 1.1025], [2.2, 1.21], [2.3, 1.3225],
    [2.4, 1.44], [2.5, 1.5625], [2.6, 1.69], [2.7, 1.8225], [2.8, 1.96], [2.9, 2.1025],
    [3, 2.25],
    //  [3.1, 2.4025], [3.2, 2.56], 
    // [3.3, 2.7225], [3.4, 2.89], [3.5, 3.0625],
    // [3.6, 3.24],[3.7, 3.422], [3.8, 3.6], [3.9, 3.803], [4, 4]
];

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const scaleX = canvas.width / 4; // Scale factor for x-coordinate
const scaleY = canvas.height / 4; // Scale factor for y-coordinate
const imageWidth = 110; // Width of the image
const imageHeight = 70; // Height of the image
const animationSpeed = 10; // Speed of the image movement (lower values mean slower movement)

// Load the image
const image = new Image();
image.onload = function() {
    animateGraph(); // Initial animation
    animationRunning = true;
    drawWheel();
    stopHeartAnimation();
    glowingContainer.style.display = 'block';
};
image.src = './assets/awiator-win.png';

ctx.lineWidth = 5;

const counterElement = document.getElementById('counter');

// Start the counter immediately when opened
startCounter();
// displayContainer();
startCounting();
counterStarted = true;
console.log('counter started');
    function stopAnimation() {
        animationStopped = true; // Set the flag to stop animation
    }
    
    function startAnimation() {
        if (!animationRunning) {
            animationRunning = true;
            drawWheel(); // Start the animation loop
        }
    }
    
    function stopAnimation() {
        animationRunning = false; // Set the animation state to stopped
    }
    
    // Wheel properties
    const centerX = 0; // Position center horizontally at 0
    const centerY = canvas.height; // Position center vertically at the canvas height
    const radius = Math.min(canvas.width, canvas.height) / 0.4; // Increase radius to make the wheel larger
    const numSlices = 70; // Number of partitions
    const sliceColors = ['rgba(128, 128, 128, 0.1)', 'rgba(24, 23, 23,0.1)']; // Alternating colors
    
    let rotation = 0; // Initial rotation angle
    const rotationSpeed = 0.002; // Adjust rotation speed as needed
    
    function drawWheel() {
    
        // Draw wheel slices
        const sliceAngle = (Math.PI * 2) / numSlices;
        for (let i = 0; i < numSlices; i++) {
            const startAngle = i * sliceAngle + rotation;
            const endAngle = startAngle + sliceAngle;
    
            // Draw slice
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = sliceColors[i % sliceColors.length];
            ctx.fill();
        }
    
        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius / 45, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Center circle color
        ctx.fill();
    
        if (animationRunning) {
            rotation += rotationSpeed; // Update rotation angle only if animation is running
            requestAnimationFrame(drawWheel); // Call function recursively for smooth animation
        }
    }
    
    
    // Animation starts automatically when the page loads
    drawWheel();

        
        

    
function animateGraph(stopValue) {
    let index = 0;
    let progress = 0;
    let counterStarted = false;

    function animate() {
        if (animationStopped) return; // Check if animation should stop

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Redraw the line up to the current index
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let i = 0; i <= index; i++) {
            const x = coordinates[i][0] * scaleX;
            const y = canvas.height - coordinates[i][1] * scaleY;
            ctx.lineTo(x, y);
        }

        // Only draw fill and stroke if the counter is running
        if (!counterStarted) {
            ctx.strokeStyle = 'rgba(238, 8, 47, 0.993)';
            ctx.stroke();

            ctx.fillStyle = 'rgba(238, 8, 47, 0.5)';
            ctx.lineTo(coordinates[index][0] * scaleX, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fill();
        }

        // Draw the image at the current position of the line
        const currentX = coordinates[index][0] * scaleX - imageWidth / 3;
        const currentY = canvas.height - coordinates[index][1] * scaleY - imageHeight / 2;
        ctx.drawImage(image, currentX, currentY, imageWidth, imageHeight);

        // Check if the stop value is reached
        const stopY = canvas.height - stopValue * scaleY - imageHeight / 2;
        if (currentY >= stopY) {
            // Clear the canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            return; // Exit animation loop
        }

        // Animate the line and image movement
        progress += 1 / animationSpeed;
if (progress >= 1) {
    progress = 0;
    index++; // Increment index to move to the next coordinate

    

    if (index === coordinates.length) {
        index = coordinates.length - 1; // Set index to the last coordinate
        console.log('last coordinate reached');
        animationStopped = true;

          // Define a flag to control the animation
      


          function startHeartbeatAnimation() {
            // Heartbeat animation
            const heartbeatDuration = 5.5; // Duration of one heartbeat cycle in seconds (increase for slower animation)
            const minScale = 1; // Minimum scale factor
            const maxScale = 1.8; // Maximum scale factor
            let heartbeatStartTime = null;
        
            function animateHeartbeat(timestamp) {
                if (!heartbeatStartTime) {
                    heartbeatStartTime = timestamp;
                }
                const elapsed = (timestamp - heartbeatStartTime) / 1000; // Convert to seconds
                const t = elapsed % heartbeatDuration / heartbeatDuration; // Loop the animation every heartbeatDuration seconds
                const heartbeatScale = minScale + (maxScale - minScale) * Math.abs(0.5 - Math.abs(t - 0.5));
        
                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
        
                // Redraw the line with heartbeat animation
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                for (let i = 0; i <= index; i++) {
                    const x = coordinates[i][0] * scaleX;
                    const y = canvas.height - coordinates[i][1] * scaleY * heartbeatScale; // Apply heartbeat scale
                    ctx.lineTo(x, y);
                }
                ctx.strokeStyle = 'rgba(238, 8, 47, 0.993)';
                ctx.stroke();
        
                ctx.fillStyle = 'rgba(238, 8, 47, 0.5)';
                ctx.lineTo(coordinates[index][0] * scaleX, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();
                ctx.fill();
        
                // Draw the image with constant size
                const currentX = coordinates[index][0] * scaleX - imageWidth / 3;
                const currentY = canvas.height - coordinates[index][1] * scaleY * heartbeatScale - imageHeight / 2;
                ctx.drawImage(image, currentX, currentY, imageWidth, imageHeight);
        
                // Continue the animation loop if animation is running
                if (isAnimationRunning) {
                    requestAnimationFrame(animateHeartbeat);
                }else{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
        
            // Start the animation loop
            isAnimationRunning = true;
            requestAnimationFrame(animateHeartbeat);
        }
        
        startHeartbeatAnimation();
    }
    
}


        if (!counterStarted && currentY < canvas.height - coordinates[index][1] * scaleY - imageHeight / 2) {
            // // Start the counter when the line starts rising
            startCounter();
            counterStarted = true;
        }

        if (!animationStopped) {
            requestAnimationFrame(animate);
        }
    }

    animate(); // Call the animate function
}

let isAnimationRunning = true;

// Function to stop the animation
function stopHeartAnimation() {
  isAnimationRunning = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomStopValue() {
    const random = Math.random();
    let stopValue;
    if (random < 0.7) {
        // 70% of stops should be between 1.0 and 10.0
        stopValue = Math.random() * 9 + 1;
    } else if (random < 0.9) {
        // 20% of stops should be between 1.0 and 20.0
        stopValue = Math.random() * 19 + 1;
    } else {
        // 10% of stops should be between 1.0 and 10.0
        stopValue = Math.random() * 9 + 1;
    }
    return stopValue;
}



  function startProgress() {
    var progressBar = document.getElementById('progress-bar');
    var width = 100;
    var interval = setInterval(frame, 50);
  
    function frame() {
      if (width <= 0) {
        clearInterval(interval);
      } else {
        width -= 1;
        progressBar.style.width = width + '%';
        // progressBar.innerHTML = (width / 100) * 5 ;
        // if (width <= 20) {
        //   progressBar.style.backgroundColor = '#f44336';
        // }
      }
    }
  }

// Function to update the counter value and initiate the animation
function updateCounter(currentValue, stopValue, step, callback) {
    setCounterValue(currentValue); // Set the counter value
    
    if (currentValue > 0) {
        

glowingContainer.style.backgroundColor = 'rgba(87, 60, 184, 1)'; // Change glow to red
glowingContainer.style.boxShadow = '0 0 70px 50px rgba(87, 60, 184, 1)'; // Change glow to red

}

    if (currentValue > 2) {

        glowingContainer.style.backgroundColor = 'rgba(255, 0, 0, 1)'; // Change glow to red
        glowingContainer.style.boxShadow = '0 0 70px 50px rgba(255, 0, 0, 1)'; // Change glow to red
        
    }
    if (currentValue >=5 ){
        glowingContainer.style.backgroundColor = 'rgba(0, 255, 0, 1)'; // Change glow to green
        glowingContainer.style.boxShadow = '0 0 70px 50px rgba(0, 255, 0, 1)'; // Change glow to green

    }

    if (currentValue < stopValue) {
        // If the current value is less than the stop value, continue the animation
        continueAnimation(currentValue, stopValue, step, callback);
    } else {
        // If the stop value is reached, execute post-animation tasks
        handleAnimationCompletion(callback);
    }
}

// Function to set the counter value
// Function to set the counter value

function setCounterValue(value) {
    counterElement.textContent = value.toFixed(2) + 'X';
    countingElement = parseFloat(counterElement.textContent);
    // console.log(countingElement);
    
    lastCounterValue = value.toFixed(2);
}


// Function to continue the animation
function continueAnimation(currentValue, stopValue, step, callback) {
    setTimeout(() => {
        const step = 0.029;
        updateCounter(currentValue + step, stopValue, step, callback);
    }, 150); // Change the duration (in milliseconds) for smoother animation
}

const lastVals = document.getElementById('last-vals');
const forLi = document.getElementById('for-li');
// Function to handle tasks after the animation is completed
function handleAnimationCompletion(callback) {
    console.log("Last counter value:", lastCounterValue);
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item to the last counter value
    listItem.textContent = lastCounterValue;

    if(listItem.textContent <= 2){
        listItem.style.color = 'rgba(255, 0, 0, 1)';
    }
    if(listItem.textContent <= 4.9){
        listItem.style.color = 'rgba(87, 60, 184, 1)';
    }
    if(listItem.textContent >= 5 ){
        listItem.style.color = 'rgba(0, 255, 0, 1)';
    }

    lastVals.insertAdjacentElement('afterbegin', listItem);

    // Scroll to the end of the container
    listItem.scrollLeft = lastVals.scrollWidth;

    
    // Append the list item to the existing content of the 'last-vals' element
    lastVals.appendChild(listItem);
    showCounterHeader(); // Show the counter header
    setColorAndPlaySound(); // Set color and play bust sound
    scheduleNextRound(); // Schedule the next round and start progress
    restartCounter(); // Restart the counter after a delay
}

// Function to show the counter header
function showCounterHeader() {
    counterHeader.style.display = 'block';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



// Function to set color and play bust sound
function setColorAndPlaySound() {
    counterStarted = false
    console.log('counter stopped');
    stopHeartAnimation();
    animationStopped = true; // Set the flag to stop animation
    counterElement.style.color = '#da2f2f';
    addHandlers();
    glowingContainer.style.display = 'none';
    animationRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playBustSound();
    betTxt.textContent = 'BET'
    placeBet.style.backgroundColor = ''
    stakeExecuted = false;
    bettingValid = true;
    document.getElementById('fnlStake').textContent = fnlStake;
    cashoutMode = false;
    setTimeout(()=>{
        playersContBox.style.display = 'none';
    },1000)
}

// Function to schedule the next round and start progress
function scheduleNextRound() {
    setTimeout(() => {
        counterElement.style.color = 'rgba(0,0,0,0.0)';
        nextRound.style.display = 'block';
        counterHeader.style.display = '';
        animationStopped = false;
        animationRunning = true;
        startProgress();
        
        playersContBoxShow = false
        waitingQue.style.display = 'block';
    }, 5000);
    
}

let continueMultiplication = true;
function restartCounter() {
    // Clear any existing multiplication timeout
    clearTimeout(multiplicationTimeout);
    
    setTimeout(() => {
        startCounter();
        counterStarted = true;
        console.log('counter started');
        animateGraph();
        drawWheel();
        playersContBox.style.display = 'flex';
        waitingQue.style.display = 'none';
        startCounting();
        playersContBoxShow = true;
        
        bettingValid = false;
        subtractionExecuted = false;
        cashoutMode = false;

        // Define a recursive function to perform continuous multiplication
        function continuousMultiplication() {
            if (stakeExecuted == true && counterStarted == true && currentUserBal >= 0 && fnlStake <= currentUserBal) {
                placeBet.style.backgroundColor = 'orange';
                betTxt.textContent = 'CASHOUT';
                cashoutMode = true;
                
                // Check if fnlStake and countingElement are valid numbers
                if (!isNaN(fnlStake) && !isNaN(countingElement)) {
                    // Perform the multiplication
                    result = fnlStake * countingElement;

                document.getElementById("fnlStake").textContent = result.toFixed(1);

                    // Schedule the next multiplication after a delay
                    multiplicationTimeout = setTimeout(continuousMultiplication, 150); // Adjust delay as needed
                } else {
                    console.error("Invalid input: fnlStake or countingElement is not a number.");
                }
                
            } 
            
        }

        // Start the continuous multiplication process
        continuousMultiplication();

    }, 10000);
}




function startCounter() {
    shuffleItems();
    randomizeStakeValues();
    const initialValue = 1.0;
    const stopValue = getRandomStopValue().toFixed(1); // Use toFixed(1) to format to one decimal place
    // Reset index to 0
    index = 0;
    glowingContainer.style.display = 'block';
    counterElement.style.color = '';
    nextRound.style.display = '';
    animationRunning = true;
    const step = 0.1; // Adjust step size as needed for smoother or faster animation
    updateCounter(initialValue, stopValue, step, {
    });
    function displayContainer() {
        if (index < containers.length) {
            containers[index].style.display = 'flex';
            // spanElement.textContent = (index + 1);
            index++;
            setTimeout(displayContainer, 100); // Adjust the delay as needed
        }
    }
    displayContainer();
}

    
    let varStake = parseInt(document.getElementById('varStake').textContent);
    
    let fnlStake = parseInt(document.getElementById('fnlStake').textContent);
    let oneHrd = parseInt(document.getElementById('oneHrd').textContent);
    let twoHrd = parseInt(document.getElementById('twoHrd').textContent);
    let fiveHrd = parseInt(document.getElementById('fiveHrd').textContent);
    let thsHsd = parseInt(document.getElementById('thsHsd').textContent);
    let wonAmnt = document.getElementById('wonAmnt');

    //minus stake
    remStake.addEventListener('click', ()=>{
        console.log('remove');
        if (varStake && fnlStake >= 10){
            varStake -= 5;
        }
        else if (varStake && fnlStake <= 10){
            remStake.style.display = 'none'
            varStake -= 0;
        }
        console.log(varStake);
        document.getElementById('varStake').textContent = varStake;
        document.getElementById('fnlStake').textContent = varStake;
    })

    //add stake
    addStake.addEventListener('click', ()=>{
        console.log('add');
            varStake += 5
            if(varStake && fnlStake >= 10 ){
                remStake.style.display = ''
            }
        document.getElementById('varStake').textContent = varStake;
        document.getElementById('fnlStake').textContent = varStake;
    })


    function addoneHrd(){
        varStake = oneHrd
        fnlStake = oneHrd
        document.getElementById('varStake').textContent = varStake
        document.getElementById('fnlStake').textContent = fnlStake
    }

    const oneHrdBtn = document.getElementById('oneHrd');
    oneHrdBtn.addEventListener('click', oneHrdClickHandler);

    function addtwoHrd(){
        varStake = twoHrd
        fnlStake = twoHrd
        document.getElementById('varStake').textContent = varStake
        document.getElementById('fnlStake').textContent = fnlStake
    }

    const twoHrdBtn = document.getElementById('twoHrd');
    twoHrdBtn.addEventListener('click', twoHrdClickHandler);

    function addfiveHrd(){
        varStake = fiveHrd
        fnlStake = fiveHrd
        document.getElementById('varStake').textContent = varStake
        document.getElementById('fnlStake').textContent = fnlStake
    }

    const fiveHrdBtn = document.getElementById('fiveHrd');
    fiveHrdBtn.addEventListener('click', fiveHrdClickHandler);

    function addThsd(){
        varStake = thsHsd
        fnlStake = thsHsd
        document.getElementById('varStake').textContent = varStake
        document.getElementById('fnlStake').textContent = fnlStake
    }

    const thsHsdBtn = document.getElementById('thsHsd');
    thsHsdBtn.addEventListener('click', thsHsdClickHandler);

    // Function to remove event handlers
function removeHandlers() {
    oneHrdBtn.removeEventListener('click', oneHrdClickHandler);
    twoHrdBtn.removeEventListener('click', twoHrdClickHandler);
    fiveHrdBtn.removeEventListener('click', fiveHrdClickHandler);
    thsHsdBtn.removeEventListener('click', thsHsdClickHandler);
}

// Function to add event handlers again
function addHandlers() {
    oneHrdBtn.addEventListener('click', oneHrdClickHandler);
    twoHrdBtn.addEventListener('click', twoHrdClickHandler);
    fiveHrdBtn.addEventListener('click', fiveHrdClickHandler);
    thsHsdBtn.addEventListener('click', thsHsdClickHandler);
}

const placeBet = document.getElementById('placeBet');
const betTxt = document.getElementById('betTxt');
const nxtRnd = document.getElementById('nxtRnd');
const wnAlrt = document.getElementById('wnAlrt');
const rcgBal = document.getElementById('rcgBal');


    
    let userBal = parseInt(document.getElementById('userBal').textContent) || 0;
    let currentUserBal = Number();
    userBal = currentUserBal;
    document.getElementById('userBal').textContent = currentUserBal;
    currentUserBal = storedBalance;
placeBet.addEventListener('click', ()=>{
    betTxt.textContent = 'WAIT';
        console.log(userBal);
        console.log(fnlStake);
        console.log(currentUserBal);
        console.log(storedBalance);
    if (bettingValid == true && !subtractionExecuted && currentUserBal >= 10) {
        placeBet.style.backgroundColor = 'rgba(238, 8, 47, 0.5)';
        betTxt.textContent = 'STAKED';
        stakeExecuted = true;
        nxtRnd.style.display = 'none'
        removeHandlers();
        console.log(userBal);
        console.log(fnlStake);
        if(currentUserBal <= 10){
            placeBet.style.backgroundColor = 'rgb(19, 185, 19)';
            betTxt.textContent = 'BET';
            // rcgBal.style.display = 'block';
            // setTimeout(()=>{
            //     rcgBal.style.display = 'none';
            // },1000)
        }
        if(fnlStake > currentUserBal){
            placeBet.style.backgroundColor = 'rgb(19, 185, 19)';
            betTxt.textContent = 'BET';
        //     rcgBal.style.display = 'block';
        // setTimeout(()=>{
        //     rcgBal.style.display = 'none';
        // },1000)
        }
        else{
            
            currentUserBal -= fnlStake;
            document.getElementById('userBal').textContent = currentUserBal;
            subtractionExecuted = true;
        }
        // oneHrdBtn.removeEventListener('click', oneHrdClickHandler);
        // twoHrdBtn.removeEventListener('click', twoHrdClickHandler);
        // fiveHrdBtn.removeEventListener('click', fiveHrdClickHandler);
        // thsHsdBtn.removeEventListener('click', thsHsdClickHandler);
        
    }

    if(bettingValid == true && stakeExecuted == true){
        nxtRnd.style.display = 'none'
    }
    if(userBal <= 10){
            // rcgBal.style.display = 'block';
            // setTimeout(()=>{
            //     rcgBal.style.display = 'none';
            // },1000)
    }else{
        nxtRnd.style.display = 'block'
        setTimeout(()=>{
            nxtRnd.style.display = 'none'
        }, 1000)
    }
    if(bettingValid == true){
        nxtRnd.style.display = 'none'
    }
    else if(cashoutMode == true){
        nxtRnd.style.display = 'none'
    }
    
    
    

        if (cashoutMode == true){
            clearTimeout(multiplicationTimeout);
            wonResult = result;
            wonAmnt.textContent = wonResult;
            console.log(wonResult);
            betTxt.textContent = 'BET'
            placeBet.style.backgroundColor = ''
            nxtRnd.style.display = 'none'
            wnAlrt.style.display = 'block'
            setTimeout(()=>{
                wnAlrt.style.display = 'none'
            }, 2000)
            stakeExecuted = false;
            cashoutMode = false;
            currentUserBal += wonResult;
            fnlStake = 50;
            setTimeout(()=>{
                document.getElementById('userBal').textContent = Number(currentUserBal).toFixed(0);
            },1000)
            document.getElementById('fnlStake').textContent = fnlStake;
            
        }

});


localStorage.setItem('currentUserBal', currentUserBal);