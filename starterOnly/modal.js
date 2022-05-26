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
const confirmModalBtn = document.querySelector(".confirm-modal-btn");
const content = document.querySelector(".content");
const confirmClose = document.querySelector(".confirm-close");


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

// on ferme la modal
function closeConfirmModal(){ 
  closeModal(); 
  
  const modalbg = document.querySelector(".modal-body");
  modalbg.innerHTML  = "modal-body";
  
  form.style.display = "block"; 
  form.reset(); 
  modalbg.appendChild(form);
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

  const ValidnameReturn = Validname(nom);
  const ValidfirstReturn = Validfirst(prenom);
  const ValidmailReturn = Validmail(email);
  const ValidbirthdateReturn = Validbirthdate(birthdate);
  const ValidquantityReturn = Validquantity(quantity);
  const ValidlocationReturn = Validlocation(location);
  const Validcheckbox1Return = Validcheckbox1(checkbox1);

  const formIsValid =
  ValidnameReturn &&      
  ValidfirstReturn&&   
  ValidmailReturn&&     
  ValidbirthdateReturn&&
  ValidquantityReturn&&
  ValidlocationReturn&&
  Validcheckbox1Return;

  console.log(formIsValid);

  if(formIsValid){
    Valid();
  }
}

//verify prenom
function Validfirst(prenom){
  const regexnom = /^[a-z é-]+$/i;
  console.log(prenom);
  if(prenom.length>2 && regexnom.test(prenom)){
    formData[0].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[0].setAttribute("data-error-visible", "true");
    formData[0].setAttribute("data-error", "veuillez entrée un prenom valide");
    return false;
  }
}
//verify nom
function Validname(nom){
  const regexnom = /^[a-z é-]+$/i;
  console.log(nom);
  if(nom.length>2 && regexnom.test(nom)){
    formData[1].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[1].setAttribute("data-error-visible", "true");
    formData[1].setAttribute("data-error", "veuillez entrée un nom valide");
    return false;
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
    return true;
  }else{
    formData[3].setAttribute("data-error-visible", "true");
    formData[3].setAttribute("data-error", "veuillez saisir une date");
    return false;
  }
}
//verify quantity
function Validquantity(quantity){
  const regexquantity = /^[0-9]{1,2}$/;
  console.log(quantity);
  if(regexquantity.test(quantity)){
    formData[4].setAttribute("data-error-visible", "false");
    return true;
  }
  else{
    formData[4].setAttribute("data-error-visible", "true");
    formData[4].setAttribute("data-error", "veuillez indiquer le nombre de tournoi.");
    return false;
  }
}

//verify location
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

//read accept terms
function Validcheckbox1(checkbox1){
  console.log(checkbox1);
  if(checkbox1.checked){
    formData[6].setAttribute("data-error-visible", "false");
    return true;
  }else{
    formData[6].setAttribute("data-error-visible", "true");
    formData[6].setAttribute("data-error", "veuillez lire et accepter les conditions.");
    return false;
  }
}

//close modal
function Valid() {
  closeModal();
  form.style.display = "none";

  const modalbg = document.querySelector(".modal-body");
  modalbg.innerHTML =+ "<div class='confirmBodyModal' id='confirmBodyModal'>"+
      " <div class='modal-body'>"+
         " <div class='content'>"+
          "  <span class='confirm-close'></span>"+
          "  <p class='confirm-modal-message'>Merci pour votre réservation</p>"+
          "  <button class='confirm-modal-btn'>Fermer</button>"+
        "  </div>"+
      "  </div>"+
    " </div>";

     launchModal();

     const modalConfirmationClose = document.querySelector(".confirm-modal-btn");
     modalConfirmationClose.addEventListener("click",closeConfirmModal); 
}