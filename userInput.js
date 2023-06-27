const textArea = document.querySelector(".textarea-field");

const button = document.querySelector("#submit-button");

textArea.addEventListener("input", (e) => {
  if (e.target.value.trim() !== "") {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

button.addEventListener("click", (e) => {
  const userInput = textArea.value;
  localStorage.setItem("userInput", userInput);
  console.log(userInput);
});

document.getElementById("user-input").focus();
