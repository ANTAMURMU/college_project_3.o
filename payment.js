// Retrieve appointment details from localStorage
const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails'));

// Display appointment details on the payment page
if (appointmentDetails) {
    document.getElementById('payment-department').textContent = appointmentDetails.department;
    document.getElementById('payment-date').textContent = appointmentDetails.date;
    document.getElementById('payment-time').textContent = appointmentDetails.time;
    document.getElementById('payment-name').textContent = appointmentDetails.name;
    document.getElementById('payment-phone').textContent = appointmentDetails.phone;
}

// Handle payment button click
document.getElementById('make-payment').addEventListener('click', () => {
    alert('Redirecting to payment gateway...');
    // Add payment gateway integration here
});