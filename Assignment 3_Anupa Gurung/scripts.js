document.addEventListener("DOMContentLoaded", function() {
    //  Alerting user on clicking "Book a Counselor"
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            if (event.target.textContent.includes('Book a Counselor')) {
                alert('Redirecting to booking page...');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // User Health Improvement Graph using Chart.js
    const ctx = document.getElementById('healthChart').getContext('2d');
    const healthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March'], // Time labels
            datasets: [{
                label: 'Mental Health Improvement Score',
                data: [45, 70, 30], // Example user scores over time
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderColor: 'rgba(0, 128, 128, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Your Mental Health Improvement Over Time'
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select elements from the DOM
    const bookingForm = document.getElementById("bookingForm");
    const appointmentsBody = document.getElementById("appointmentsBody");

    // Event listener for form submission
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get form values
        const counselor = document.getElementById("counselor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Define counselor specialization based on selection
        let specialization = "";
        if (counselor === "Astha Joshi") {
            specialization = "Anxiety Specialist";
        } else if (counselor === "Anupa Gurung") {
            specialization = "Depression Specialist";
        } else if (counselor === "sara Ghale") {
            specialization = "General Therapist";
        }

        // Create a new row for the upcoming appointment
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${date}</td>
            <td>${time}</td>
            <td>${counselor}</td>
            <td>${specialization}</td>
        `;

        // Append the new row to the upcoming appointments table body
        appointmentsBody.appendChild(newRow);

        // Reset the form
        bookingForm.reset();

        // Alert user about successful booking (optional)
        alert("Your appointment has been successfully booked!");
    });
});
