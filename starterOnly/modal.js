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
const confirmModal = document.querySelector(".confirm-modal");
const confirmModalBtn = document.querySelector(".confirm-modal-btn");
const content = document.querySelector(".content");
const confirmClose = document.querySelector(".confirm-close");


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
  const prenom = document.getElementById("first").value;
  const nom = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const location = document.getElementById('input[name="location"]');
  const checkbox1 = document.getElementById("checkbox1");
  const confirmModal = document.getElementById("confirm-modal");

  Validname(nom);
  Validfirst(prenom);
  Validmail(email);
  Validbirthdate(birthdate);
  Validquantity(quantity);
  Validlocation(location);
  Validcheckbox1(checkbox1);
}
//verify prenom
function Validfirst(prenom){
  const regexnom = /^[a-z é-]+$/i;
  console.log(prenom);
  if(prenom.length>2 && regexnom.test(prenom)){
    formData[0].setAttribute("data-error-visible", "false");
    return false;
  }
  else{
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "veuillez entrée un prenom valide");
    return true;
  }
}
//verify nom
function Validname(nom){
  const regexnom = /^[a-z é-]+$/i;
  console.log(nom);
  if(nom.length>2 && regexnom.test(nom)){
    formData[1].setAttribute("data-error-visible", "false");
    return false;
  }
  else{
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "veuillez entrée un nom valide");
    return true;
  }
}
//verify e-mail
function Validmail(email){
  const regexmail = /^\S+@\S+\.\S+$/;
  console.log(email);
  if(regexmail.test(email)){
    formData[2].setAttribute("data-error-visible", "false");
    return true;
  }else{
    formData[2].setAttribute("data-error-visible", "true");
    formData[2].setAttribute("data-error", "veuillez entrée un e-mail valide");
    return false;
  }
}
//verify birthdate
function Validbirthdate(birthdate){
  const regexbirthdate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
   console.log(birthdate);
  if(regexbirthdate.test(birthdate)){
    formData[3].setAttribute("dara-error-visible", "false");
    return false;
  }else{
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "veuillez saisir une date");
    return true;
  }
}
//verify quantity
function Validquantity(quantity){
  const regexquantity = /^[0-9]{1,2}$/;
  console.log(quantity);
  if(regexquantity.test(quantity)){
    formData[4].setAttribute("data-error-visible", "false");
    return false;
  }
  else{
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "veuillez indiquer le nombre de tournoi.");
    return true;
  }
}

function Validlocation(location){
  console.log(location);
  if (document.querySelector('input[name="location"]:checked') ==null) {
    formData[5].setAttribute("data-error-visible", "true");
    formData[5].setAttribute("data-error", "selectionner un tournoi.");
    return false;
    }
    else{
    formData[5].setAttribute("data-error-visible", "false");
    return true;
    }
}

function Validcheckbox1(checkbox1){
  console.log(checkbox1);
  if(checkbox1.checked){
    formData[6].setAttribute("data-error-visible", "false");
    return false;
  }else{
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "veuillez lire et accepter les conditions.");
    return true;
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