// Get references to DOM elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Add event listener to form submit event
form.addEventListener('submit', e => {
	// Prevent default form submission behavior
	e.preventDefault();

	// Get form input values
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	// Validate form input
	if (name === '' || email === '' || message === '') {
		alert('Please fill out all fields');
	} else {
		// Send form data to server
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				message
			})
		})
		.then(response => {
			if (response.ok) {
				alert('Form submitted successfully');
				form.reset();
			} else {
				alert('An error occurred. Please try again later.');
			}
		})
		.catch(error => {
			alert('An error occurred. Please try again later.');
		});
	}
});
