// Display username (if passed from login)
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "User";
  document.getElementById("usernameDisplay").textContent = username;

  // Live Clock
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").textContent = time;
  }
  setInterval(updateClock, 1000);
  updateClock(); // run immediately

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "index.html";
  });
});
