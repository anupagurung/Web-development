// Change navbar background color on scroll with smooth transition
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#f7f7f7'; // Change to a light gray
        header.style.transition = 'background-color 0.3s ease'; // Smooth transition
    } else {
        header.style.backgroundColor = '#fff'; // Original color
        header.style.transition = 'background-color 0.3s ease';
    }
});

// Interactive mood tracker with dynamic message update
document.querySelectorAll('.mood-options button').forEach(button => {
    button.addEventListener('click', function() {
        const mood = this.textContent;
        const moodMessageContainer = document.createElement('p'); // Create a new element to hold the message
        moodMessageContainer.classList.add('mood-message');

        let message = '';

        switch (mood) {
            case '😊':
                message = "We're glad you're feeling great!";
                break;
            case '😐':
                message = "It's okay to feel neutral. Take things easy.";
                break;
            case '😢':
                message = "We're sorry you're feeling down. Take some time to care for yourself.";
                break;
            case '😠':
                message = "Feeling angry? Consider taking a break to calm down.";
                break;
            case '😴':
                message = "Feeling tired? Rest is essential for your mental health.";
                break;
        }

        // Update the page with the new message, or update an existing message
        const existingMessage = document.querySelector('.mood-message');
        if (existingMessage) {
            existingMessage.textContent = message;
        } else {
            moodMessageContainer.textContent = message;
            document.querySelector('.mood-tracker').appendChild(moodMessageContainer);
        }
    });
});

// Smooth scroll for internal links with error handling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.error(`Section with ID "${sectionId}" not found.`);
        }
    });
});

// Enhanced "Get Started" button animation with shadow effect
const getStartedButton = document.querySelector('.button');

getStartedButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#218838'; // Darker green on hover
    this.style.transform = 'scale(1.05)'; // Slight zoom effect
    this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)'; // Shadow effect
    this.style.transition = 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease';
});

getStartedButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#28a745'; // Original color
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none'; // Remove shadow effect
});



let currentIndex = 0;

// Function to change displayed issues (not necessary for the current setup but included for future use)
function changeIssue(n) {
    const cards = document.querySelectorAll('.issue-card');
    currentIndex += n;

    // Loop back if out of bounds
    if (currentIndex < 0) {
        currentIndex = 0; // Prevent going below 0
    } else if (currentIndex >= cards.length) {
        currentIndex = cards.length - 1; // Prevent going out of bounds
    }

    // Hide all cards and show only the current one (if you decide to implement showing one card at a time)
    cards.forEach((card, index) => {
        card.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Initialize the display (to show all at once, this part is not needed)
document.querySelectorAll('.issue-card').forEach(card => card.style.display = 'block');

