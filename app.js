// LOGIN
function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!email || !pass) {
    alert("Please enter both email and password");
    return;
  }

  if (email === "empleados@company.com" && pass === "SunPower2026") {
    sessionStorage.setItem("auth", "true");
    window.location.href = "details.html";
  } else {
    alert("Invalid corporate credentials");
  }
}

// LOGOUT
function logout() {
  sessionStorage.removeItem("auth");
  window.location.href = "index.html";
}

// RESERVA
function reserveRoom(event, paymentUrl) {
  event.preventDefault();

  const form = event.target;
  const inputs = form.querySelectorAll("input");
  const name = inputs[0].value.trim();
  const employeeID = inputs[1].value.trim();
  const checkin = inputs[2].value;

  if (!name || !employeeID || !checkin) {
    alert("Please fill in all fields");
    return false;
  }

  // Guardamos la reserva localmente
  const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
  reservations.push({
    name,
    employeeID,
    checkin,
    dateReserved: new Date().toISOString()
  });
  localStorage.setItem("reservations", JSON.stringify(reservations));

  // REDIRIGE a Square para pagar
  window.location.href = paymentUrl;
  return false;
}
