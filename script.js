// Button on Home Section

function showMessage() {
    alert("Hello! Welcome to my website.");
}


// Contact Form

function submitForm(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if fields are filled
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show success message
    alert("Thank you, " + name + "! Your message has been submitted.");

    // Clear the form
    document.querySelector("form").reset();
}
