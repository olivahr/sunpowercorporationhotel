function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (email === "empleados@company.com" && pass === "SunPower2026") {
    window.location.href = "details.html";
  } else {
    alert("Invalid corporate credentials");
  }
}
