const appProjet = Vue.createApp({
    /*Ceci créer l'app Vue. Dans le project, c'est où les informations du projet seront stocker après les avoir récupérés   */
    data() {
        return {
            message: "Chargement...",
            project: null

        };
    },
    /* Les paramètres de l'url seront recupérés, donc il va recupéré le id de l'url  */
    mounted() {
        const params = new URLSearchParams(window.location.search);
        const projId = params.get("proj-id");
        /*Les données du fichier projects.json seront converties et il cherchera le projet à qui appartient l'id pour les stocker dans project */
        fetch("./projects.json")
            .then(data => data.json())
            .then(data => {
                this.project = data.find(p=> p.id == projId);
            })
            /* Si une erreur survient, le message d'erreur sera envoyer */
            .catch(err => {
                console.error(err);
                this.message = "Erreur de chargement.";
            });
    }
});

/* Lie l'application Vue avec l'élément DOM ayant l'id page-projet*/
appProjet.mount('#page-projet');

/*Lorsque le document charge, il reçoit l'année actuelle et l'envoie ver la balise footer dans un span avec l'id "#current-year"  */

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

