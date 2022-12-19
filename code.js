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
