document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('HzBCWelohF1cQemYE'); // Replace with your EmailJS public key

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_v2ckqkm', 'template_usr3uy9', this)
                .then(() => {
                    console.log('SUCCESS!');
                    alert('Your message has been sent successfully!');
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send your message. Please try again later.');
                });
        }
    });
});

function validateForm() {
    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required.');
        return false;
    }

    return true;
}
