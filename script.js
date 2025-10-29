gsap.registerPlugin(ScrollTrigger);
/*enregistre le plugin pour pouvoir l'utiliser */

/*Il charge ses animations lors du chargement de la page*/
window.addEventListener("load", () => {
    /*l'élément DOM avec les classes suivantes reçoivent une animations d'apparition*/
    gsap.from('.signature', {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 1.5,
        stagger: {
            each: 0.3
        }
    });
    gsap.from('.ligne', {
        opacity: 0,
        delay: 2.5,
        duration: 1
    });

    gsap.from('.lien', {
        opacity: 0,
        delay: 3
    });

});

/*L'élément DOM reçoit une animation d'apparition lorsque l'élément DOM entre dans la fênetre */
gsap.from('.carrousel', {
    y: 100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '.carrousel'
    }
});

    /*Ceci créer l'app Vue. Dans le project, c'est où les informations du projet seront stocker après les avoir récupérés   */
const app = Vue.createApp({
    
    data() {
        return {
            message: "Chargement...",
            projects: []
        };
    },
        /* Les paramètres de l'url seront recupérés, donc il va recupéré le id de l'url  */
    mounted() {
          /*Les données du fichier projects.json seront converties et il cherchera le projet à qui appartient l'id pour les stocker dans project */
        fetch("./projects.json")
            .then(data => data.json())
            .then(data => {
                this.projects = data;
                this.message = "";
            })
             /* Si une erreur survient, le message d'erreur sera envoyer */
            .catch(err => {
                console.error(err);
                this.message = "Erreur de chargement.";
            });
    }
});


/* Lie l'application Vue avec l'élément DOM ayant la classe carrousel*/
app.mount('.carrousel');


/*Lorsque le document charge, il reçoit l'année actuelle et l'envoie ver la balise footer dans un span avec l'id "#current-year"  */
function updateCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", updateCurrentYear);



