const appProjet = Vue.createApp({
    data() {
        return {
            message: "Chargement...",
            project: null

        };
    },
    mounted() {
        const params = new URLSearchParams(window.location.search);
        const projId = params.get("proj-id");

        fetch("./projects.json")
            .then(data => data.json())
            .then(data => {
                this.project = data.find(p=> p.id == projId);
            })
            .catch(err => {
                console.error(err);
                this.message = "Erreur de chargement.";
            });
    }
});

appProjet.mount('#page-projet');

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

