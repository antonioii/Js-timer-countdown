//Setting how the numbers can be inputted
let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('keypress', function(event) {
        let value = element.value;
        //when a key is pressed it'll check if there are more than two digits in number value
        if (value.match(/\d{2,}/)) {
            // If it does, prevent the change from being applied
            event.preventDefault();
          }
    })
});

//Triggers the timerStart
let buttonsBox = document.querySelector("#buttonsBox"); 
let playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", timerStart);
numbers.forEach(element => {
    element.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
          timerStart();
        }
      });    
});  

function timerStart() {
    //Substitue to a pause btn
    buttonsBox.removeChild(playBtn);  
    let pauseButton = document.createElement("button");
    pauseButton.classList.add("pause-button");  
        const pauseIcon = document.createElement("div");
        pauseIcon.classList.add("pause-icon");  
            const pauseBar1 = document.createElement("div");
            pauseBar1.classList.add("pause-bar");
            const pauseBar2 = document.createElement("div");
            pauseBar2.classList.add("pause-bar");
        pauseIcon.appendChild(pauseBar1);  
        pauseIcon.appendChild(pauseBar2);  
    pauseButton.appendChild(pauseIcon);
    buttonsBox.insertBefore(pauseButton, buttonsBox.firstChild);
    
    //Starts the timer
}


