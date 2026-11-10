/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    // TODO: Étape 1 - Navigation entre les nœuds
    // Récupérez #fruits et #out
     const fruits = document.querySelector("#fruits");
     const out = document.querySelector("#out");

    // Utilisez firstElementChild, lastElementChild, children[0].nextElementSibling
    const X = fruits.firstElementChild.textContent;
    const Y = fruits.lastElementChild.textContent;
    const Z = fruits.children[0].nextElementSibling.textContent;
    // Affichez : "Premier : X | Dernier : Y | Après le 1er : Z"
    out.textContent = `Premier : ${X} | Dernier :  ${Y} | Après le 1er : ${Z}`;

    // TODO: Étape 2 - Création et insertion d'éléments
    const zone = document.querySelector("#zone");
    // Au clic sur #addHead, créez un <p> avec "(tête)" et utilisez prepend()
    const tete = document.querySelector("#addHead");
    tete.addEventListener("click",() => {
             const p = document.createElement("p");
             p.textContent = `(tête)`;
             zone.prepend(p);
         });
    // Au clic sur #addTail, créez un <p> avec "(fin)" et utilisez append()
    const fin = document.querySelector("#addTail");
    fin.addEventListener("click",() => {
             const p = document.createElement("p");
             p.textContent = `(fin)`;
             zone.append(p);
         });
    // TODO: Étape 3 - Clonage, remplacement et suppression
    const cards = document.querySelector("#cards");
    // Au clic sur #cloner, clonez le .card avec cloneNode(true), modifiez son texte et ajoutez-le
     const cloner = document.querySelector("#cloner");
     let numClone = 1;
    cloner.addEventListener("click",() => {
             const card = document.querySelector(".card");
             const clone = card.cloneNode(true);
             clone.textContent = `card #${numClone}`
             cards.append(clone);
             numClone++;
         });
    // Au clic sur #remplacer, remplacez la première .card avec replaceWith()
     const remplace = document.querySelector("#remplacer");
    remplace.addEventListener("click",() => {
             const card = document.querySelector("#card");
             const premEle = cards.firstElementChild;
             const div = document.createElement("div");
             div.textContent = `remplacement`;
             premEle.replaceWith(div);
         });
    // Au clic sur #vider, supprimez toutes les .card avec remove()
    const supprime = document.querySelector("#vider");
    supprime.addEventListener("click",() => {
             document.querySelectorAll(".card").forEach(card => card.remove());
         });
    // TODO: Étape 4 - Insertion à une position donnée
    // Au clic sur #ins2, créez un <li> "Étape 1.5" et insérez-le avant steps.children[1] avec before()
     const insertion = document.querySelector("#ins2");
     const steps = document.querySelector("#steps");
    insertion.addEventListener("click",() => {
              const li = document.createElement("li");
              li.textContent = `Étape 1.5`;
              steps.children[1].before(li);
         });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
