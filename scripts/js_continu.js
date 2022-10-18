/*
Source: https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html
Utilisation: apprendre comment utiliser les variables et eventlistener en Javascript
User: Estelle Weyl           
*/
const taille = document.querySelector('#taille');
const poids = document.querySelector('#poids')
const imcResult = document.querySelector('#imc-result');

const imcCalcul = document.querySelector('#imc-calcul');

imcCalcul.addEventListener('click', () => {
const poidsFloat = parseFloat(poids.value);
const tailleFloat = parseFloat(taille.value);

const imc = poidsFloat / (tailleFloat**2);

/*
Source: https://stackoverflow.com/questions/24951045/how-to-change-the-text-of-a-label-for-using-javascript-jquery
Utilisation: savoir comment changer le texte d'un label
User: kiks73
*/
imcResult.innerHTML = imc.toString();

console.log(imc);
});