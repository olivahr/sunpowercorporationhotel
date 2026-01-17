// LOGIN
const CORREO="empleados@company.com";
const PASS="SunPower2026";

function login(){
  const e=document.getElementById('email').value;
  const p=document.getElementById('password').value;
  const human=document.getElementById('humanCheck').checked;
  if(e===CORREO && p===PASS && human){
    document.getElementById('login').style.display='none';
    document.getElementById('app').style.display='block';
  } else {
    alert('Email, password incorrect or human check not checked!');
  }
}

// ABRIR DETALLES
function openDetails(room){
  localStorage.setItem('roomType', room);
  window.location.href='details.html';
}

// CARGAR DETALLES + FORMULARIO EN details.html
document.addEventListener('DOMContentLoaded',()=>{
  const detailsEl=document.getElementById('details');
  const formEl=document.getElementById('form');
  const roomType=localStorage.getItem('roomType');
  if(!roomType) return;

  let payLink="";
  if(roomType==="one"){
    detailsEl.innerHTML=`
      <h2>Standard Room – 1 Bed ($79 / week)</h2>
      <div class="gallery">
        <img id="mainImg" src="images/foto1.jpg">
        <div class="thumbs">
          <img src="images/foto1.jpg" onclick="swap(this)" class="active">
          <img src="images/foto2.jpg" onclick="swap(this)">
        </div>
      </div>
      <h3>Room Features</h3>
      <ul>
        <li>1 Queen Bed</li>
        <li>25 m²</li>
        <li>Private Bathroom</li>
        <li>Wi-Fi, Parking, Air Conditioning</li>
      </ul>
      <h3>Policies</h3>
      <ul>
        <li>Check-in: Employee selects time</li>
        <li>Check-out: Al finalizar el trabajo</li>
        <li>No public booking</li>
        <li>Corporate use only</li>
      </ul>
      <button onclick="openForm('one')">Reserve This Room</button>
    `;
    payLink="https://square.link/u/rQTpIlWx";
  } else if(roomType==="two"){
    detailsEl.innerHTML=`
      <h2>Double Room – 2 Beds ($89 / week)</h2>
      <div class="gallery">
        <img id="mainImg" src="images/foto3.jpg">
        <div class="thumbs">
          <img src="images/foto3.jpg" onclick="swap(this)" class="active">
          <img src="images/foto4.jpg" onclick="swap(this)">
        </div>
      </div>
      <h3>Room Features</h3>
      <ul>
        <li>2 Double Beds</li>
        <li>35 m²</li>
        <li>Private Bathroom</li>
        <li>Wi-Fi, Parking, Air Conditioning</li>
      </ul>
      <h3>Policies</h3>
      <ul>
        <li>Check-in: Employee selects time</li>
        <li>Check-out: Al finalizar el trabajo</li>
        <li>No public booking</li>
        <li>Corporate use only</li>
      </ul>
      <button onclick="openForm('two')">Reserve This Room</button>
    `;
    payLink="https://square.link/u/WqXjxpmq";
  }

  // FORMULARIO DE RESERVA
  window.openForm=function(room){
    formEl.innerHTML=`
      <h2>Reservation Information</h2>
      <label>Full Name</label><input id="fullName" placeholder="Full Name">
      <label>Corporate Email</label><input id="corpEmail" placeholder="Corporate Email">
      <label>Employee ID</label><input id="empId" placeholder="Employee ID">
      <label>Check-in Date</label><input type="date" id="checkinDate">
      <label>Check-in Time</label><input type="time" id="checkinTime">
      <label>Check-out</label><input type="text" value="Al finalizar el trabajo" disabled>
      <button id="payBtn">Proceed to Payment</button>
    `;
    document.getElementById('payBtn').onclick=()=>window.open(payLink,"_blank");
  }
});

// SLIDER
function swap(img){
  img.parentElement.querySelectorAll('img').forEach(i=>i.classList.remove('active'));
  img.classList.add('active');
  document.getElementById('mainImg').src=img.src;
}