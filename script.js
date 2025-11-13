document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

if (username === "admin" && password === "12345") {
  localStorage.setItem("username", username); // Save username
  message.style.color = "green";
  message.textContent = "Login successful! Redirecting...";
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
}

  // Example of dynamic check (simulate server login)
  if (username === "admin" && password === "12345") {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Redirect example
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});
