document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    yesButton.addEventListener('click', function() {
        // Show the glowing "Thank You" message
        thankYouMessage.style.opacity = '1';

        // Send email via Formspree
        sendEmail('She said Yes');
    });

    noButton.addEventListener('click', function() {
        // Send email via Formspree
        sendEmail('She said No');
    });

    function sendEmail(response) {
        fetch('https://formspree.io/f/xeojggbq', { // Replace with your Formspree endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                response: response
            })
        })
        .then(response => {
            if (response.ok) {
                // Handle success
                console.log('Email sent successfully.');
                thankYouMessage.textContent = 'Thank you for your response!';
                // Optionally, you can hide the message after a delay
                setTimeout(() => thankYouMessage.style.opacity = '0', 3000);
            } else {
                // Handle server-side errors
                console.error('Error sending email:', response.statusText);
            }
        })
        .catch(error => {
            // Handle network errors
            console.error('Error:', error);
        });
    }

    // Hide the "Thank You" message when clicking anywhere else
    document.addEventListener('click', function(event) {
        if (!thankYouMessage.contains(event.target) && event.target !== yesButton) {
            thankYouMessage.style.opacity = '0';
        }
    });
});
