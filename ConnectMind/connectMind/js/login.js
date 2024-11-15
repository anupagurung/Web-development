const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
}
// You can add more validation here (e.g., regex for email)
alert("Login successful!");
return false; // Prevent form submission for demo purposes
