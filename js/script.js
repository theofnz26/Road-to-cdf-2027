const cdfBar = document.getElementById("cdfBar");
const cdfText = document.getElementById("cdfText");

if (cdfBar && cdfText) {
  const startDate = new Date("2026-05-24");
  const endDate = new Date("2027-05-24");
  const today = new Date();

  const total = endDate - startDate;
  const current = today - startDate;

  let progress = Math.round((current / total) * 100);

  if (progress < 0) {
    progress = 0;
  }

  if (progress > 100) {
    progress = 100;
  }

  cdfBar.value = progress;
  cdfText.textContent = "Progression vers le CDF 2027 : " + progress + "%";
}

const deckForm = document.getElementById("deckForm");
const deckList = document.getElementById("deckList");

if (deckForm) {
  deckForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // .trim() enlève les espaces au début et à la fin :
    // un nom composé uniquement d'espaces devient "" et sera refusé.
    const deckName = document.getElementById("deckName").value.trim();

    if (deckName === "") {
      alert("Veuillez entrer un nom de deck.");
      return;
    }

    const deckCard = document.createElement("article");
    deckCard.classList.add("deck-card");

    // Le nom du deck est saisi par l'utilisateur :
    // on l'affiche avec textContent pour éviter toute injection (XSS).
    const deckTitle = document.createElement("h3");
    deckTitle.textContent = deckName;
    deckCard.appendChild(deckTitle);

    // Ce formulaire ne contient AUCUNE donnée utilisateur (texte écrit par nous),
    // donc innerHTML est sans risque ici.
    const matchupZone = document.createElement("div");
    matchupZone.innerHTML = `
      <form class="matchup-form">
        <input type="text" placeholder="Deck adverse">
        <select>
          <option value="green">Maîtrisé</option>
          <option value="red">À travailler</option>
        </select>
        <button type="submit">Ajouter matchup</button>
      </form>

      <div class="matchup-list"></div>
    `;
    deckCard.appendChild(matchupZone);

    deckList.appendChild(deckCard);
    deckForm.reset();

    const matchupForm = deckCard.querySelector(".matchup-form");
    const matchupList = deckCard.querySelector(".matchup-list");

    matchupForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const matchupName = matchupForm.querySelector("input").value.trim();
      const status = matchupForm.querySelector("select").value;

      if (matchupName === "") {
        alert("Veuillez entrer un matchup.");
        return;
      }

      const matchup = document.createElement("p");
      matchup.classList.add(status);

      if (status === "green") {
        matchup.textContent = matchupName + " - maîtrisé";
      } else {
        matchup.textContent = matchupName + " - à travailler";
      }

      matchupList.appendChild(matchup);
      matchupForm.reset();
    });
  });
}

const simpleMatchForm = document.getElementById("simpleMatchForm");
const tournamentForm = document.getElementById("tournamentForm");
const historyList = document.getElementById("historyList");

if (simpleMatchForm) {
  simpleMatchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const myDeck = document.getElementById("simpleMyDeck").value.trim();
    const opponentDeck = document.getElementById("simpleOpponentDeck").value.trim();
    const result = document.getElementById("simpleResult").value;
    const comment = document.getElementById("simpleComment").value.trim();

    if (myDeck === "" || opponentDeck === "") {
      alert("Veuillez remplir les decks.");
      return;
    }

    const matchCard = document.createElement("article");
    matchCard.classList.add("card");

    // Toutes les données ci-dessous viennent de l'utilisateur :
    // on les affiche avec textContent (jamais innerHTML).
    const titre = document.createElement("h3");
    titre.textContent = "Match simple";

    const ligneDecks = document.createElement("p");
    ligneDecks.textContent = myDeck + " vs " + opponentDeck;

    const ligneResultat = document.createElement("p");
    ligneResultat.textContent = "Résultat : " + result;

    const ligneCommentaire = document.createElement("p");
    ligneCommentaire.textContent = "Commentaire : " + comment;

    matchCard.append(titre, ligneDecks, ligneResultat, ligneCommentaire);
    historyList.appendChild(matchCard);
    simpleMatchForm.reset();
  });
}

if (tournamentForm) {
  tournamentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("tournamentName").value.trim();
    const deck = document.getElementById("tournamentDeck").value.trim();
    const rounds = document.getElementById("tournamentRounds").value.trim();
    const comment = document.getElementById("tournamentComment").value.trim();

    if (name === "" || deck === "" || rounds === "") {
      alert("Veuillez remplir le tournoi.");
      return;
    }

    const tournamentCard = document.createElement("article");
    tournamentCard.classList.add("card");

    // Données saisies par l'utilisateur -> textContent (sécurité anti-XSS).
    const titre = document.createElement("h3");
    titre.textContent = name;

    const ligneDeck = document.createElement("p");
    ligneDeck.textContent = "Deck joué : " + deck;

    const ligneRounds = document.createElement("p");
    ligneRounds.textContent = "Rounds : " + rounds;

    const ligneCommentaire = document.createElement("p");
    ligneCommentaire.textContent = "Commentaire : " + comment;

    tournamentCard.append(titre, ligneDeck, ligneRounds, ligneCommentaire);
    historyList.appendChild(tournamentCard);
    tournamentForm.reset();
  });
}

const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

if (eventForm) {
  eventForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const date = document.getElementById("eventDate").value;
    const type = document.getElementById("eventType").value;
    const name = document.getElementById("eventName").value.trim();
    const deck = document.getElementById("eventDeck").value.trim();

    if (date === "" || name === "" || deck === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const eventCard = document.createElement("article");
    eventCard.classList.add("event-card");

    // Données saisies par l'utilisateur -> textContent (sécurité anti-XSS).
    const titre = document.createElement("h3");
    titre.textContent = name;

    const ligneDate = document.createElement("p");
    ligneDate.textContent = "Date : " + date;

    const ligneType = document.createElement("p");
    ligneType.textContent = "Type : " + type;

    const ligneDeck = document.createElement("p");
    ligneDeck.textContent = "Deck prévu : " + deck;

    eventCard.append(titre, ligneDate, ligneType, ligneDeck);
    eventList.appendChild(eventCard);
    eventForm.reset();
  });
}