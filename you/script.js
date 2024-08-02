document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    yesButton.addEventListener('click', () => {
        // Open the desired website
        window.open('https://coderr.me/you/yes', '_blank');

        // Send message to Formspree
        fetch('https://formspree.io/f/xeojggbq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'She said Yes'
            })
        }).then(response => {
            if (response.ok) {
                alert('Your response has been sent. Thank you!');
            } else {
                alert('There was an issue sending your response.');
            }
        });
    });

    noButton.addEventListener('click', () => {
        // Open the desired website
        window.open('https://coderr.me/you/no', '_blank');

        // Send message to Formspree
        fetch('https://formspree.io/f/xeojggbq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'She said No'
            })
        }).then(response => {
            if (response.ok) {
                alert('Your response has been sent. Thank you!');
            } else {
                alert('There was an issue sending your response.');
            }
        });
    });
});
