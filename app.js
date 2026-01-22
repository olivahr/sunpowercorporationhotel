// ===============================
// CREDENCIALES PERMITIDAS
// ===============================
const VALID_EMAIL = "empleados@sunpower.energy";
const VALID_PASSWORD = "Sunpower.2026";

// ===============================
// ELEMENTOS
// ===============================
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");

// ===============================
// LOGIN
// ===============================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    // ✔️ ACCESO PERMITIDO
    sessionStorage.setItem("auth", "true"); // GUARDA SESIÓN
    errorMsg.style.display = "none";
    window.location.href = "video.html";
  } else {
    // ❌ ACCESO DENEGADO
    errorMsg.textContent = "Credenciales incorrectas. Acceso denegado.";
    errorMsg.style.display = "block";
    passwordInput.value = "";
  }
});

