document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your login logic here
    console.log('Login attempted with username:', username, 'and password:', password);
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your signup logic here
    console.log('Signup attempted with fullname:', fullname, 'email:', email, 'username:', username, 'and password:', password);
});
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h2').innerText;
            const productPrice = productCard.querySelector('.price').innerText;
            alert(`Added ${productName} to cart. Price: ${productPrice}`);
            // Add your cart logic here
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bookConsultationButtons = document.querySelectorAll('.doctor-card button');

    bookConsultationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const doctorCard = button.closest('.doctor-card');
            const doctorName = doctorCard.querySelector('h2').innerText;
            const doctorSpecialty = doctorCard.querySelector('p').innerText;
            alert(`Booked consultation with ${doctorName}, ${doctorSpecialty}`);
            // Add your booking logic here
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Validate inputs
        if (!doctor || !date || !time || !name || !phone) {
            alert('Please fill out all fields.');
            return;
        }

        // Display confirmation
        alert(`Appointment booked with ${doctor} on ${date} at ${time}. We will contact you at ${phone}.`);

        // Clear the form
        appointmentForm.reset();

        // In a real app, you would send this data to a backend server
        console.log('Appointment Details:', { doctor, date, time, name, phone });
    });
});
//after changes
document.getElementById('loginButton').addEventListener('click', function() {
    var loginOptions = document.getElementById('loginOptions');
    if (loginOptions.style.display === 'none') {
        loginOptions.style.display = 'block';
    } else {
        loginOptions.style.display = 'none';
    }
});