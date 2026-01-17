// LOGIN FUNCIONAL
function login(){
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if(email === "empleados@company.com" && pass === "SunPower2026"){
    sessionStorage.setItem("auth","true");
    window.location.href = "details.html";
  } else {
    alert("Invalid corporate credentials");
  }
}

// SLIDER FUNCIONAL
function slideNext(btn){
  const slider = btn.parentElement.querySelector('.slider');
  slider.scrollBy({left: slider.offsetWidth, behavior:'smooth'});
}
function slidePrev(btn){
  const slider = btn.parentElement.querySelector('.slider');
  slider.scrollBy({left: -slider.offsetWidth, behavior:'smooth'});
}
