function login() {
  const emailInput = document.getElementById("email");
  const passInput = document.getElementById("password");

  const email = emailInput.value.trim().toLowerCase();
  const pass = passInput.value.trim();

  const USER = "empleados@company.com";
  const PASS = "SunPower2026";

  if (!email || !pass) {
    alert("Please enter email and password");
    return;
  }

  if (email === USER && pass === PASS) {
    sessionStorage.setItem("auth", "true");
    window.location.href = "details.html";
  } else {
    alert("Invalid corporate credentials");
    passInput.value = "";
    passInput.focus();
  }
}
