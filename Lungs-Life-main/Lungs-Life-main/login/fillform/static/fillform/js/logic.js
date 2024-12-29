
//cursor effect

const cursor = document.querySelector('.cursor');

// Move the cursor with the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
   
});

// Add hover effect for cursor scaling on list items
document.querySelectorAll('.container li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(6)';
        item.querySelector('a').style.color = 'sky-blue' // Scale up when hovering
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        item.querySelector('a').style.color = 'white' // Scale back down when not hovering
    });
});

// Reset the cursor when mouse leaves the nav
cursor.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
});

function showAboutSection() {
    cursor.style.display = 'none'; // Hide the custom cursor
    document.getElementById('about-section').style.display = 'block'; // Show the About section
}



const form = document.querySelector("#smokingForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const year = document.querySelector("#num").value; // Number of years
    const day = document.querySelector("#dayk").value; // Cigarettes per day
    const price = document.querySelector("#price").value; // Price per cigarette

    // Convert input values to numbers
    const years = Number(year);
    const cigarettesPerDay = Number(day);
    const pricePerCigarette = Number(price);

    // Validate inputs
    if (years <= 0 || cigarettesPerDay <= 0 || pricePerCigarette <= 0) {
        document.querySelector("#result").textContent =
            "Please enter positive values for all fields.";
        return;
    }

    // Calculate total days
    const totalDays = years * 365;

    // Calculate the total cost
    const totalCost = totalDays * cigarettesPerDay * pricePerCigarette;

    // Display the result
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = "Total cost is: " + totalCost.toFixed(2) + " INR";
});




// robo anmation

gsap.from("#logox", {
    opacity:0,
    delay:0.4,
    duration:1,
    x:-70
})

