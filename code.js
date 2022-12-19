//Setting how the numbers can be inputted:
let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('keypress', function(event) {
        let value = element.value;
        //when a key is pressed it'll check if there are more than two digits in number value:
        if (value.match(/\d{2,}/)) {
            // If it does, prevent the change from being applied:
            event.preventDefault();
          }
    })
});

//Play btn:
let buttonsBox = document.querySelector("#buttonsBox"); 
let playBtn = document.getElementById("playBtn");
setPlayBtnListeners(playBtn);

let pauseButton;
let pauseIcon;
let pauseBar1;
let pauseBar2;
function timerStart() {
    //Substitue to a pause btn:
    buttonsBox.removeChild(playBtn);  
    pauseButton = document.createElement("button");
    pauseButton.classList.add("pause-button");  
        pauseIcon = document.createElement("div");
        pauseIcon.classList.add("pause-icon");  
            pauseBar1 = document.createElement("div");
            pauseBar1.classList.add("pause-bar");
            pauseBar2 = document.createElement("div");
            pauseBar2.classList.add("pause-bar");
        pauseIcon.appendChild(pauseBar1);  
        pauseIcon.appendChild(pauseBar2);  
    pauseButton.appendChild(pauseIcon);
    buttonsBox.insertBefore(pauseButton, buttonsBox.firstChild);
    pauseButton.addEventListener("click", resumePlay);
    
    //Starts the timer:
}

//When pause button is triggered:
function resumePlay(){
    //Resume back to play button:
    playBtn = document.createElement('button');
    playBtn.id = 'playBtn';
    buttonsBox.removeChild(pauseButton);
    buttonsBox.insertBefore(playBtn, buttonsBox.firstChild);
    setPlayBtnListeners(playBtn);

    //Changes the variables in order to make the count continue:
}


//Set the playBtn listeners
function setPlayBtnListeners(playBtn) {
    playBtn.addEventListener("click", timerStart);
    numbers.forEach(element => {
        element.addEventListener("keydown", function(event) {
            if (event.keyCode === 13) {
            timerStart();
            }
        });    
    });
}

