let button = document.getElementById("read");

button.addEventListener('click',() => {
  document.querySelectorAll('.single-box').forEach(e => {
    e.classList.remove('unseen');
  });
  document.querySelectorAll('.dot').forEach(e => {
    e.classList.remove('dot');
  });
  document.getElementById('num').innerText = '0';
})
function updateBoxText() {
  // Get user input
  var userInput = document.getElementById("userInput").value;

  // Create a new paragraph element
  var newParagraph = document.createElement("p");

  // Set the class for the new paragraph
  newParagraph.className = "notifi";

  // Set the inner HTML for the new paragraph


  // Anew paragraph
  newParagraph.innerHTML = `
  <p class="notifi">
    <a href="#" class="name"> new user </a>comented: ${userInput}
  </p>
  <p class="time">Just now</p>
`;

// Append the new paragraph to the box-text div
document.getElementById("userInputDiv").appendChild(newParagraph);

  // Clear the input field for the next entry
  document.getElementById("userInput").value = '';
}