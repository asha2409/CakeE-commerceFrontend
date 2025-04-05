# CakeE-commerceFrontend
🚀 JavaScript DOM Event Handling Project
This project is a simple interactive webpage that demonstrates JavaScript DOM manipulation and event handling. It consists of three core files: HTML, CSS, and JavaScript.

📁 Files Overview
index.html: The main HTML structure of the webpage.

Style.css: Contains styling for layout and aesthetics.

index.js: Handles JavaScript logic like click events and DOM updates.

🖥️ Features
Displays a basic web interface with:

A heading (Hello Dom).

A subheading (Welcome to event handling).

An input box with a submit button.

A dynamic heading (h1) which is updated on button click.

Button click changes:

The inner text of the dynamic heading to "Hello Welcome Dom".

🧠 How It Works
User enters a value in the input field.

Upon clicking the "Submit" button:

JavaScript captures the event.

It updates the content of the h1 element with the new text.

Styling is applied through Style.css.

📸 Screenshot (Optional)
You can add a screenshot here of the working webpage.

🛠️ Setup Instructions
Clone or download this repository.

Make sure all three files (index.html, Style.css, index.js) are in the same directory.

Open index.html in a web browser to run the project.

📌 Sample Code Snippet
JavaScript Event Handling Example:

javascript
Copy
Edit
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("heading1").innerHTML = "Hello Welcome Dom";
});
🧑‍💻 Author
Shaik Asha Muskan
