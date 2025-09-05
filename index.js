let clickableBox = document.querySelector(".clickableBox");
let startButton = document.querySelector(".startButton");
let displayText = document.querySelector(".displayText");

clickableBox.style.pointerEvents = "none";

let startTime = 0;
let endTime = 0;
let reactionTime = 0;
let isStarted = false;
let timeoutId = null;

startButton.addEventListener("click", () => {
    const startTimeout = Math.floor(Math.random() * 4) + 2;
    clickableBox.style.pointerEvents = "auto"; 
    clickableBox.style.backgroundColor = "Gray";
    displayText.textContent = "Wait for green...";
    isStarted = false; 
    timeoutId = setTimeout(() => {
        isStarted = true;
        clickableBox.style.backgroundColor = "Green";
        startTime = Date.now();
    }, startTimeout * 1000);
});

clickableBox.addEventListener("keypress", () => {
    if(!isStarted) {        
        clearTimeout(timeoutId)
        clickableBox.style.pointerEvents = "none";
        displayText.textContent = "Clicked before start";        
        console.log("Clicked before start");
        return;
    }

    endTime = Date.now();
    clickableBox.style.backgroundColor = "Red";
    reactionTime = endTime - startTime;
    displayText.textContent = `Reaction Time: ${reactionTime} Ms`;
    console.log(`Reaction Time: ${reactionTime} Ms`);

    
    setTimeout(() => {
        clickableBox.style.backgroundColor = "Gray";
        displayText.textContent = "Click Start to play again";
        isStarted = false;
    }, 2000); 
});
