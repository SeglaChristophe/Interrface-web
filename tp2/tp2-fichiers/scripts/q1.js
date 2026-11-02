/**
 * Question 1 - Convertisseur de température
 * Convertir des degrés Celsius en Fahrenheit
 */

// TODO: Déclarez des variables (nombre, string)
let tempCelsius = "";
let tempFahrenheit = 0;

/**
 * Convertit une température de Celsius en Fahrenheit
 * @param {number} celsius - La température en degrés Celsius
 * @returns {number} La température en degrés Fahrenheit
 */
function convertirCelsiusVersfahrenheit(celsius) {
    // TODO: Retourner le résultat de la conversion en utilisant l'expression c*9/5+32
    return celsius * 9 / 5 + 32;
}

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#c, #go, #out)
     const elemDom_c = document.querySelector("#c");
     const elemDom_go = document.querySelector("#go");
     const elemDom_out = document.querySelector("#out");
    // TODO: Au clic sur #go, convertir la valeur de #c et afficher dans #out
    elemDom_go.addEventListener("click",() => {
        const valEntrer = Number(elemDom_c.value);
        const valConverti = convertirCelsiusVersfahrenheit(valEntrer);
        elemDom_out.textContent = `${valEntrer}°C = ${valConverti}°F`;
    });
    // TODO: Gérer le cas où l'input est vide (afficher "Veuillez entrer une valeur")
    if(valEntrer === "" && valEntrer != 0){
        elemDom_out.textContent = 'Veuillez entrer une valeur';
    }
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { convertirCelsiusVersfahrenheit, initialiser };
