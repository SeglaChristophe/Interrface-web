/**
 * Question 5 - Données numériques et gestion du temps
 * Compteur avec setInterval et clearInterval
 */

// TODO: Déclarez les variables nécessaires (éléments DOM, id de l'interval, valeur du compteur)

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#n, #start, #stop, #double)
    const n = document.querySelector("#n");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const double = document.querySelector("#double");

    let compteur = 0;
    let intervalId = null;
    // TODO: Au clic sur Start
    start.addEventListener("click",() => {
    // - Vérifier qu'un interval n'est pas déjà en cours
    if(intervalId === null){
    // - Lancer setInterval qui incrémente la valeur chaque seconde
    intervalId = setInterval(() => {
          compteur++;
          // - Afficher la nouvelle valeur dans #n
          n.textContent = compteur;
    }, 1000);
    // - Afficher la nouvelle valeur dans #n
    }
    });

    // TODO: Au clic sur Stop
    stop.addEventListener("click",() => {
    // - Utiliser clearInterval pour arrêter l'interval
     clearInterval(intervalId);
    // - Réinitialiser l'id de l'interval
    intervalId = null;
    });
    // TODO: Bonus - Au clic sur ×2
    double.addEventListener("click", () => { 
    // - Multiplier la valeur actuelle par 2
        compteur *= 2;
        n.textContent = compteur; 
    // - Afficher la nouvelle valeur
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
