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
        delay: 3,
        duration: 1
    });

    gsap.from('.lien', {
        opacity: 0,
        delay: 4
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
        fetch("./projets.json")
            .then(data => data.json())
            .then(data => {
                this.projects = data;
                this.message = "";
            })
            .catch(err => {
                console.error(err);
                this.message = "Erreur de chargement.";
            });
    }
});


app.component('projet', {
    props: ["ptitle", "presume"],
    data() { },
    template: `
                <div class="couverture">
                    <h4>{{ptitle}}</h4>
                    <p class="resume">{{presume}}</p>
                    <button><a href="page_projet.html?proj-id=1">Voir plus</a></button>
                </div>
                `
});

app.mount('.carrousel');


