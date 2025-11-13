document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message");

  // Basic validation
  if (!username || !email || !password || !confirmPassword) {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  // Password match check
  if (password !== confirmPassword) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  // Save user to localStorage (simulate database)
  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  message.style.color = "green";
  message.textContent = "Account created successfully! Redirecting...";

  setTimeout(() => {
    window.location.href = "index.html"; // Go back to login
  }, 1500);
});
