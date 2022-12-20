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

//Play button functionalities:
let buttonsBox = document.querySelector("#buttonsBox"); 
let playBtn = document.getElementById("playBtn");
setPlayBtnListeners(playBtn);

let pauseButton;
let pauseIcon;
let pauseBar1;
let pauseBar2;
function timerStart() {
    //Starts the timer:
    timer.time = (timer.hourField.value * 3600) + (timer.minuteField.value * 60) + (timer.secondField.value * 1);
    if(timer.time == 0) {
      timer.reverse();
    } else {
      timer.start();
    }

    //Then, substitue the playBtn o a pause btn:
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
}

//Pause button functionalities:
function resumePlay(){
    //Pauses the timer:
	timer.pause();
    //Then change back to a play button:
    playBtn = document.createElement('button');
    playBtn.id = 'playBtn';
    buttonsBox.removeChild(pauseButton);
    buttonsBox.insertBefore(playBtn, buttonsBox.firstChild);
    setPlayBtnListeners(playBtn);    
}

//Function to set the playBtn listeners
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

// Reset the timer when the "Reset" button is clicked
document.getElementById('reset').addEventListener('click', () => {
    timer.reset();
  });

//Class Timer:
class CountdownTimer {
  constructor() {
    this.time = 0;
    this.intervalId = null;
    this.hourField = document.getElementById('hour');
    this.minuteField = document.getElementById('minute');
    this.secondField = document.getElementById('second');
  }

  start() {
    // Turn the inputed time to seconds:
    this.time = (this.hourField.value * 3600) + (this.minuteField.value * 60) + (this.secondField.value * 1);

    this.intervalId = setInterval(() => {
      this.time--;

    // If the remaining time is less than 0, reset it to 0
    if (this.time < 0) {
        this.time = 0;
      }
  
      // Update the input fields with the remaining time
      this.hourField.value = `${Math.floor(this.time / 3600)}`.padStart(2, '0');
      this.minuteField.value = `${Math.floor((this.time % 3600) / 60)}`.padStart(2, '0');
      this.secondField.value = `${this.time % 60}`.padStart(2, '0');
      
    //if it reaches 00:00:00 should stop
    if (this.time === 0) {
        this.pause();
        resumePlay();
    }
      
    }, 1000);
  }

  reverse() {
    // Turn the inputed time to seconds:
    this.time = (this.hourField.value * 3600) + (this.minuteField.value * 60) + (this.secondField.value * 1);
    this.intervalId = setInterval(() => {
      this.time++;  
      // Update the input fields with the time
      this.hourField.value = `${Math.floor(this.time / 3600)}`.padStart(2, '0');
      this.minuteField.value = `${Math.floor((this.time % 3600) / 60)}`.padStart(2, '0');
      this.secondField.value = `${this.time % 60}`.padStart(2, '0');      
    }, 1000);
  }
  

  pause() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.pause();
    this.time = 0;
    this.hourField.value = '';
    this.minuteField.value = '';
    this.secondField.value = '';
    resumePlay();

  }
}

const timer = new CountdownTimer();
