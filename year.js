/*Lorsque le document charge, il reçoit l'année actuelle et l'envoie ver la balise footer dans un span avec l'id "#current-year"  */

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
