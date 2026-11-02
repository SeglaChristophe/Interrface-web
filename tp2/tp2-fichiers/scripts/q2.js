/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */

// TODO: Créer une fonction fléchée add(a, b) qui retourne a + b
const add = (a,b) => a + b;

// TODO: Créer une fonction fléchée mul(a, b) qui retourne a * b
const mul = (a,b) => a * b;

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#a, #m, #res)
    const elemDom_a = document.querySelector("#a");
    const elemDom_m = document.querySelector("#m");
    const elemDom_res = document.querySelector("#res");
    // TODO: Au clic sur #a, calculer add(3, 4) et afficher dans #res
     elemDom_a.addEventListener("click",() => {
             const reponseAdd = add(3,4);
             elemDom_res.textContent = `${reponseAdd}`;
         });
    // TODO: Au clic sur #m, calculer mul(3, 4) et afficher dans #res
     elemDom_m.addEventListener("click",() => {
             const reponseMul = mul(3,4);
             elemDom_res.textContent = `${reponseMul}`;
         });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { add, mul, initialiser };
