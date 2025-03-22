// Functionality for Video Conferencing
document.getElementById('start-video-call').addEventListener('click', () => {
    alert('Starting video call...');
    // Add video call functionality here (e.g., using WebRTC)
});

// Functionality for Remote Patient Monitoring
document.getElementById('connect-device').addEventListener('click', () => {
    alert('Connecting to monitoring device...');
    // Simulate vital signs update
    document.getElementById('heart-rate').textContent = '72';
    document.getElementById('blood-pressure').textContent = '120/80';
    document.getElementById('oxygen-level').textContent = '98';
});

// Functionality for Electronic Prescriptions
document.getElementById('request-prescription').addEventListener('click', () => {
    alert('Requesting prescription...');
    // Simulate prescription list update
    const prescriptionList = document.getElementById('prescription-list');
    prescriptionList.innerHTML = '<p>1. Paracetamol 500mg</p><p>2. Vitamin C 1000mg</p>';
});

// Functionality for EHR Integration
document.getElementById('view-ehr').addEventListener('click', () => {
    alert('Fetching health records...');
    // Simulate EHR records update
    const ehrRecords = document.getElementById('ehr-records');
    ehrRecords.innerHTML = '<p>1. Medical History</p><p>2. Lab Results</p>';
});