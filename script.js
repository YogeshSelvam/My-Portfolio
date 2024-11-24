document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    
    // Apply saved user preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            toggleButton.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            document.body.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
    // Add Scroll Animation for Timeline Items
const timelineItems = document.querySelectorAll('.timeline-item');
window.addEventListener('scroll', () => {
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('visible');
        }
    });
});

// Initialize EmailJS with your Public Key (User ID)
emailjs.init("hPx2t0--zHxq9O5rJ"); // Replace 'your_public_key' with the Public Key you copied

// Form submission logic
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the data for the email template
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_e7tf0pf", "template_qtggtih", templateParams)
        .then(function(response) {
            console.log("Message sent successfully:", response);
            alert("Your message has been sent!");
        }, function(error) {
            console.log("Failed to send message:", error);
            alert("There was an error sending your message. Please try again.");
        });
});


});