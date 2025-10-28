gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
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


gsap.from('.carrousel', {
    y: 100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '.carrousel',
        markers: true
    }
});


const app = Vue.createApp({
    data() {
        return {
            message: "Chargement...",
            projects: []
        };
    },
    mounted() {
        fetch("./projects.json")
            .then(data => data.json())
            .then(data => {
                this.projects = data;
                console.log(this.projects);
                this.message = "";
            })
            .catch(err => {
                console.error(err);
                this.message = "Erreur de chargement.";
            });
    }
});



app.mount('.carrousel');



document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});



