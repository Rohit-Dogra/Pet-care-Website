document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("serviceSelect").value;

    if (name && email && service) {
        alert(`Booking Confirmed!\n\nName: ${name}\nEmail: ${email}\nService: ${service}`);
        document.getElementById("bookingForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
