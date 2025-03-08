 // Sample list of doctors
const doctors = [
    {
        name: "Dr. Anjali Sharma",
        specialty: "General Physician",
        experience: "10 years",
        image: "images/doctor1.jpg",
        availability: "Available Today"
    },
    {
        name: "Dr. Rajesh Kumar",
        specialty: "Cardiologist",
        experience: "15 years",
        image: "images/doctor2.jpg",
        availability: "Available Tomorrow"
    },
    // Add more doctors here...
];

const doctorGrid = document.getElementById("doctor-grid");

// Function to display doctors
function displayDoctors(filteredDoctors) {
    doctorGrid.innerHTML = ""; // Clear the current doctor grid
    filteredDoctors.forEach(doctor => {
        const doctorCard = document.createElement("div");
        doctorCard.classList.add("doctor-card");

        doctorCard.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}">
            <h2>${doctor.name}</h2>
            <p><strong>Specialty:</strong> ${doctor.specialty}</p>
            <p><strong>Experience:</strong> ${doctor.experience}</p>
            <p><strong>Availability:</strong> ${doctor.availability}</p>
            <button onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
        `;

        doctorGrid.appendChild(doctorCard);
    });
}

// Function to filter doctors based on search input
function filterDoctors() {
    const searchInput = document.getElementById("doctor-search").value.toLowerCase();
    const filteredDoctors = doctors.filter(doctor =>
        doctor.specialty.toLowerCase().includes(searchInput)
    );
    displayDoctors(filteredDoctors);
}

// Function to handle booking appointments
function bookAppointment(doctorName) {
    alert(`Booking appointment with ${doctorName}`);
    // Redirect to a booking page or open a modal for appointment scheduling
}

// Video Conferencing
document.getElementById("start-video-call").addEventListener("click", () => {
    alert("Starting video call...");
    // Integrate video conferencing API here
});

// Remote Patient Monitoring
document.getElementById("connect-device").addEventListener("click", () => {
    alert("Connecting to monitoring device...");
    // Integrate wearable device API here
});

// Electronic Prescriptions
document.getElementById("request-prescription").addEventListener("click", () => {
    alert("Requesting prescription...");
    // Integrate e-prescription API here
});

// Appointment Scheduling
document.getElementById("schedule-appointment").addEventListener("click", () => {
    alert("Scheduling appointment...");
    // Integrate scheduling API here
});

// EHR Integration
document.getElementById("view-ehr").addEventListener("click", () => {
    alert("Viewing health records...");
    // Integrate EHR API here
});

// Display all doctors initially
displayDoctors(doctors);