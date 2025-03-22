// Handle form submission
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const department = document.getElementById('department').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Store the appointment details in localStorage
    localStorage.setItem('appointmentDetails', JSON.stringify({
        department,
        date,
        time,
        name,
        phone
    }));

    // Redirect to the payment page
    window.location.href = 'payment.html';
});