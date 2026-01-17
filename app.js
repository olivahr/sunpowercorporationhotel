let a = Math.floor(Math.random() * 5) + 1;
let b = Math.floor(Math.random() * 5) + 1;

document.addEventListener("DOMContentLoaded", () => {
  const q = document.getElementById("captcha-question");
  if (q) q.textContent = `Human check: ${a} + ${b} = ?`;
});

function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  const ans = parseInt(document.getElementById("captcha-answer").value, 10);

  if (ans !== a + b) {
    alert("Human verification failed");
    return;
  }
  if (email === "empleados@company.com" && pass === "SunPower2026") {
    window.location.href = "details.html";
  } else {
    alert("Invalid credentials");
  }
}
