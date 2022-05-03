function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector("form");
const tournamentCity = document.querySelector(".text-label");
const tournament = document.querySelector(".checkbox-input[location]");
const confirmModal = document.querySelector(".confirm-modal");
const confirmModalBtn = document.querySelector(".confirm-modal-btn");
const content = document.querySelector(".content");
const confirmClose = document.querySelector(".confirm-close");
const locationInput = document.querySelectorAll(".chekbox-input");

confirmModal.style.display = "none";
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
const modalclose = document.querySelector(".close");
modalclose.addEventListener("click",closeModal);

function closeModal(){
  modalbg.style.display = "none";
}


function validate(){
  const nom = document.getElementById("last").value;
  const prenom = document.getElementById("first").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const checkboxInput = document.getElementById("checkbox1").value;
  const confirmModal = document.getElementById("confirm-modal");
  
  Validname(nom);
  Validname(prenom);
  Validmail(email);
  Validbirthdate(birthdate);
  Validquantity(quantity);
}

function Validname(input){
  const regexnom = /^[a-z é-]+$/i;
  console.log(input);
  if(input.length>2 && regexnom.test(input)){
    console.log("ok");
  }
  else{console.log("KO");}
  
}
function Validmail(email){
  const regexmail = /^\S+@\S+\.\S+$/;
  console.log(email);
  if(email && regexmail.test(email)){
    formData[2].setAttribute("data-error-visible", "true");
  }else{
    formData[2].setAttribute("data-error-visible", "false");
  }
}
function Validbirthdate(birthdate){
  const regexbirthdate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
   console.log(birthdate);
  if(birthdate && regexbirthdate.test(birthdate)){
    formData[3].setAttribute("data-error-visible", "true");
  }else{
    formData[3].setAttribute("dara-error-visible", "false");
  }
}
function Validquantity(quantity){
  const regexquantity = /[^A-Za-z<>()\[\]\\.,;:\s@"][0-9]{0,}/
  console.log(quantity);
  if(quantity && regexquantity.test(quantity)){
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "veuillez indiquer le nombre de tournoi");
  }else{
    formData[4].setAttribute("data-error-visible", "false");
  }
}
var Form = document.getElementById("form");
//form.addEventListener('click', verif);

function verif(){
  var span = document.getElementById("formData");
  var inputs = span.querySelectorAll("location");
  var response = document.getElementById("response");

  for (var i = 0; i < inputs.length; ++i){
    if (inputs[i].checked){
      response.innerText += 'le bouton '+i+' est checked \r\n';
    }else{
      response.innerText += 'Le bouton '+i+' n\'est pas checked \r\n';
    }
  }
}

function Valid() {
  function closeConfirmModal(){
  confirmModal.style.display = "none";
  }
  modalbg.style.display = "none";
  confirmModal.style.display = "flex";
  confirmModalBtn.addEventListener("click", closeConfirmModal);
  confirmModalClose.addEventListener("click", closeConfirmModal);
}
