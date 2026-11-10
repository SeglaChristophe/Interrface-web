/**
 * Question 6 - Appels API avec fetch et async/await
 * Charger des recettes depuis une API externe
 */

/**
 * Charge les recettes depuis l'API
 */
async function chargerRecettes() {
    // TODO: Afficher un message de chargement dans #recettes
       recettes.textContent = `chargement en cours`;
    // TODO: Utiliser try/catch pour gérer les erreurs
       try {
    // TODO: Utiliser await fetch() pour récupérer les données de l'API
    // URL: https://dummyjson.com/recipes?limit=3
    const response =  await fetch("https://dummyjson.com/recipes?limit=3");

    // TODO: Vérifier si la réponse est ok (response.ok)
    if(!response.ok){
        throw new Error("Erreur serveur");
    }
    // TODO: Convertir la réponse en JSON avec await response.json()
    const data = await response.json();
    // TODO: Récupérer le tableau recipes depuis data.recipes
    const liste = data.recipes;
    // TODO: Vider la liste #recettes
     recettes.textContent = "";
    // TODO: Parcourir les recettes et créer un <li> pour chacune
    // Format: "nom - prepTimeMinutes min - cuisine"
    liste.forEach(recette => {
         const li = document.createElement("li");
         li.textContent = `${recette.name} - ${recette.prepTimeMinutes} min - ${recette.cuisine}`;
         recettes.appendChild(li);
    });
    // TODO: En cas d'erreur, afficher un message d'erreur dans #recettes 
       } catch (error) {
        recettes.textContent = "Erreur lors du chargement des recettes.";
       }
   
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#charger, #recettes)
    const recettes = document.querySelector("#recetttes");
    const charger = document.querySelector("#charger");

    // TODO: Au clic sur #charger, appeler chargerRecettes()
    charger.addEventListener("click", () => { 
        chargerRecettes();
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { chargerRecettes, initialiser };
