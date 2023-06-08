// Get reference to text area
const textArea = document.querySelector(".textarea-field");

// Get reference to button
const button = document.querySelector("#submit-button");

// Hide button until user types in the text area
textArea.addEventListener("input", (e) => {
  // Check if the textarea is not empty
  if (e.target.value.trim() !== "") {
    // Make the button visible
    button.style.display = "block";
  } else {
    // Hide the button if textarea is empty
    button.style.display = "none";
  }
});

// Store data in local storage when user types
button.addEventListener("click", (e) => {
  const userInput = textArea.value;
  localStorage.setItem("userInput", userInput);
  console.log(userInput);
});

// Setting focus on the textarea when page loads
document.getElementById("user-input").focus();
