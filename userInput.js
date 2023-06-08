// Get reference to text area
const textArea = document.querySelector('.textarea-field');
  
// Get reference to button
const button = document.querySelector('#submit-button');

// Store data in local storage when user types
button.addEventListener('click', (e) => {
    const userInput = textArea.value;
    localStorage.setItem('userInput', userInput);
    console.log(userInput)
  });

// Setting focus on the textarea when page loads
document.getElementById("user-input").focus();
