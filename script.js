// Gallery Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Form submitted successfully! We'll get back to you soon.");
    document.getElementById("contact-form").reset();
}

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('receiptForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const regNo = document.getElementById('regNo').value;
    const roomNo = document.getElementById('roomNo').value;
    const amount = document.getElementById('amount').value;
    const session = document.getElementById('session').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const receipt = document.getElementById('receipt').files[0];
    const formMessage = document.getElementById('formMessage');

    // Validate PDF file
    if (receipt && receipt.type !== 'application/pdf') {
        formMessage.textContent = 'Please upload a valid PDF file.';
        formMessage.style.color = 'red';
        return;
    }

    // Validate registration number (additional check if needed)
    if (!/^[A-Za-z0-9]+$/.test(regNo)) {
        formMessage.textContent = 'Please enter a valid alphanumeric registration number.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate form submission (replace with actual backend logic)
    if (studentName && regNo && roomNo && amount && session && branch && semester && receipt) {
        formMessage.textContent = 'Receipt submitted successfully!';
        formMessage.style.color = 'green';
        
        // Log form data (for demo; replace with actual backend API call)
        console.log({
            studentName,
            regNo,
            roomNo,
            amount,
            session,
            branch,
            semester,
            receipt: receipt.name
        });

        // Reset form
        this.reset();
    } else {
        formMessage.textContent = 'Please fill all fields and upload a PDF.';
        formMessage.style.color = 'red';
    }
});