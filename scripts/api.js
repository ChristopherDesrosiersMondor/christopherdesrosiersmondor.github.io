/*
Source: https://freshman.tech/wikipedia-javascript/
User: Ayo
Utilisation: l<ensemble de ce fichier Js haha
*/
const btn_recherche = document.querySelector('#btn-recherche')

btn_recherche.addEventListener("click", envoyerRequete)

async function envoyerRequete() {
    const stringRecherche = document.querySelector('#search-input')
    const stringQuery = stringRecherche.value
    console.log(stringQuery.trim())

    try {
        const resultats = await rechercheWiki(stringQuery)
        displayResults(resultats);
    } catch (anError) {
        console.log(anError)
        alert("La recherche n'a pas resolue")
    }
}

/*
url a modifier pour les requete api de wikipedia
https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=&srlimit=20&srsearch=SEARCH_QUERY_GOES_HERE
*/

async function rechercheWiki(stringQuery) {
    const urlRequete = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&srlimit=20&srsearch={stringQuery}'
    const reponseServeur = await fetch(urlRequete)
    console.log(reponseServeur.status)

    if (!reponseServeur.ok) {
        throw Error(reponseServeur.statusText)
    }

    const json = await reponseServeur.json()
    return json
}

function displayResults(results) {
    // Get a reference to the `.js-search-results` element
    const searchResults = document.querySelector('#search-results');
  
    // Iterate over the `search` array. Each nested object in the array can be
    // accessed through the `result` parameter
    results.query.search.forEach(result => {
      const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
  
      // Append the search result to the DOM
      searchResults.insertAdjacentHTML(
        'beforeend',
        `<div class="result-item">
          <h3 class="result-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
          <span class="result-snippet">${result.snippet}</span><br>
        </div>`
      );
    });
  }