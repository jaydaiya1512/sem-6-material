const allowedPasswords = ["7001", "7004", "7024", "7026", "7030", "7040"];
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");
const accessButton = document.getElementById("access-btn");

loginButton.addEventListener("click", () => {
  const password = passwordInput.value;
  if (allowedPasswords.includes(password)) {
    window.location.href = "study.html"; // Redirect to study materials page
  } else {
    errorMsg.textContent = "Incorrect password 😏! You cannot access!";
  }
});

accessButton.addEventListener("click", () => {
  const phoneNumber = "7861838882"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("I want access 🥹");
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
});

function goBack() {
  window.location.href = "study.html"; // Redirect to study.html
}
