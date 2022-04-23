/* function to validate the information in the form */

  function validateForm() {
  let nm = document.forms["contactForm"]["fname"].value;
  let ue = document.forms["contactForm"]["userEmail"].value;
  let phn = document.forms["contactForm"]["phoneNumber"].value;
  let mes = document.forms["contactForm"]["msg"].value;
  if (nm == "") {
    alert("Name must be filled out");
    return false;
  }
  if (ue == "") {
    alert("Please enter your email address");
    return false;
  }
  if (phn == "") {
    alert("Please enter your mobile number");
    return false;
  }
  if (mes == "") {
    alert("Please enter your message");
    return false;
  }
  document.getElementById("contactForm").reset()
  alert("Hello "+nm+". Thank you for contacting us. We will return to you shortly via "+ue+" or "+phn);
}



