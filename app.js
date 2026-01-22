// ==================================================
// ESPERAR A QUE CARGUE TODO EL HTML
// ==================================================
document.addEventListener("DOMContentLoaded", () => {

  // ==================================================
  // CREDENCIALES PERMITIDAS
  // ==================================================
  const VALID_EMAIL = "empleados@sunpowerc.energy";
  const VALID_PASSWORD = "Sunpower";

  // ==================================================
  // ELEMENTOS DEL DOM
  // ==================================================
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error");

  // ==================================================
  // VALIDACIÓN BÁSICA DE ELEMENTOS
  // ==================================================
  if (!form || !emailInput || !passwordInput || !errorMsg) {
    console.error("❌ ERROR: No se encontraron los elementos del login.");
    return;
  }

  // ==================================================
  // EVENTO LOGIN
  // ==================================================
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    console.log("Login attempt:", email, password);

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // ✅ LOGIN OK
      sessionStorage.setItem("auth", "true");
      errorMsg.style.display = "none";
      console.log("✅ LOGIN SUCCESS");
      window.location.href = "video.html";
    } else {
      // ❌ LOGIN FAIL
      console.log("❌ LOGIN FAILED");
      errorMsg.textContent = "Credenciales incorrectas. Acceso denegado.";
      errorMsg.style.display = "block";
      passwordInput.value = "";
    }
  });

});
