
// Get references to the modal elements
const bookingFormModal = document.getElementById('booking-form');
const paymentSummaryModal = document.getElementById('payment-summary');
const paymentOptionsModal = document.getElementById('payment-options');

// Get references to the close buttons
const closeButtons = document.querySelectorAll('.close');

// Get reference to the doctor grid
const doctorGrid = document.querySelector('.doctor-grid');

// Get reference to the appointment form
const appointmentForm = document.getElementById('appointment-form');

// Get reference to the payment summary elements
const doctorNameElement = document.getElementById('doctor-name');
const appointmentDateElement = document.getElementById('appointment-date');
const appointmentTimeElement = document.getElementById('appointment-time');

// Get reference to the make payment button
const makePaymentButton = document.getElementById('make-payment');

// Variable to store the selected doctor's name
let selectedDoctorName = '';

// Function to open the booking form modal
function openBookingForm(doctorName) {
    selectedDoctorName = doctorName;
    bookingFormModal.style.display = 'block';
}

// Function to open the payment summary modal
function openPaymentSummary(date, time) {
    doctorNameElement.textContent = selectedDoctorName;
    appointmentDateElement.textContent = date;
    appointmentTimeElement.textContent = time;
    paymentSummaryModal.style.display = 'block';
}

// Function to open the payment options modal
function openPaymentOptions() {
    paymentOptionsModal.style.display = 'block';
}

// Function to close all modals
function closeModals() {
    bookingFormModal.style.display = 'none';
    paymentSummaryModal.style.display = 'none';
    paymentOptionsModal.style.display = 'none';
}

// Event listener for doctor cards to open the booking form
doctorGrid.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const doctorCard = event.target.closest('.doctor-card');
        const doctorName = doctorCard.querySelector('h2').textContent;
        openBookingForm(doctorName);
    }
});

// Event listener for the appointment form submission
appointmentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Here you can add code to send the form data to a server or handle it as needed
    console.log('Appointment Details:', { name, email, phone, date, time });

    // Open the payment summary modal
    openPaymentSummary(date, time);

    // Close the booking form modal
    closeModals();
});

// Event listener for the make payment button
makePaymentButton.addEventListener('click', () => {
    // Close the payment summary modal
    closeModals();

    // Open the payment options modal
    openPaymentOptions();
});

// Event listener for payment method buttons
document.querySelectorAll('.payment-method').forEach(button => {
    button.addEventListener('click', () => {
        const paymentMethod = button.getAttribute('data-method');
        alert(`Payment method selected: ${paymentMethod}`);
        // Here you can add code to handle the payment process
        closeModals();
    });
});

// Event listener for close buttons to close modals
closeButtons.forEach(button => {
    button.addEventListener('click', closeModals);
});

// Event listener to close modals when clicking outside of them
window.addEventListener('click', (event) => {
    if (event.target === bookingFormModal || event.target === paymentSummaryModal || event.target === paymentOptionsModal) {
        closeModals();
    }
});


// addition of js
// Get all "Book Consultation" buttons
const bookButtons = document.querySelectorAll('.book-consultation');

// Get the booking form and its elements
const bookingForm = document.getElementById('booking-form');
const doctorNameInput = document.getElementById('doctor-name');
const appointmentDateInput = document.getElementById('date');
const appointmentTimeInput = document.getElementById('time');
const confirmBookingButton = document.getElementById('confirm-booking');

// Get the payment summary modal and its elements
const paymentSummary = document.getElementById('payment-summary');
const paymentDoctorName = document.getElementById('doctor-name');
const paymentAppointmentDate = document.getElementById('appointment-date');
const paymentAppointmentTime = document.getElementById('appointment-time');
const paymentTotalFee = document.getElementById('total-fee');

// Store the selected doctor's details
let selectedDoctor = {
    name: '',
    price: 0,
};

// Add event listeners to all "Book Consultation" buttons
bookButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const doctorCard = button.closest('.doctor-card');
        selectedDoctor.name = doctorCard.querySelector('h2').textContent;
        selectedDoctor.price = doctorCard.getAttribute('data-price');

        // Open the booking form
        bookingForm.style.display = 'block';
    });
});

// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the appointment details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Set the payment summary details
    paymentDoctorName.textContent = selectedDoctor.name;
    paymentAppointmentDate.textContent = date;
    paymentAppointmentTime.textContent = time;
    paymentTotalFee.textContent = `₹${selectedDoctor.price}`;

    // Close the booking form
    bookingForm.style.display = 'none';

    // Open the payment summary modal
    paymentSummary.style.display = 'block';
});

// Handle payment button click
document.getElementById('make-payment').addEventListener('click', () => {
    // Redirect to the payment page (replace 'payment.html' with your actual payment page URL)
    window.location.href = 'payment.html';
});

// Close modals when the close button is clicked
document.querySelectorAll('.close').forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        bookingForm.style.display = 'none';
        paymentSummary.style.display = 'none';
    });
});