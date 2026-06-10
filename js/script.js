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

    const deckName = document.getElementById("deckName").value;

    if (deckName === "") {
      alert("Veuillez entrer un nom de deck.");
      return;
    }

    const deckCard = document.createElement("article");
    deckCard.classList.add("deck-card");

    deckCard.innerHTML = `
      <h3>${deckName}</h3>

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

    deckList.appendChild(deckCard);
    deckForm.reset();

    const matchupForm = deckCard.querySelector(".matchup-form");
    const matchupList = deckCard.querySelector(".matchup-list");

    matchupForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const matchupName = matchupForm.querySelector("input").value;
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

    const myDeck = document.getElementById("simpleMyDeck").value;
    const opponentDeck = document.getElementById("simpleOpponentDeck").value;
    const result = document.getElementById("simpleResult").value;
    const comment = document.getElementById("simpleComment").value;

    if (myDeck === "" || opponentDeck === "") {
      alert("Veuillez remplir les decks.");
      return;
    }

    const matchCard = document.createElement("article");
    matchCard.classList.add("card");

    matchCard.innerHTML = `
      <h3>Match simple</h3>
      <p><strong>${myDeck}</strong> vs <strong>${opponentDeck}</strong></p>
      <p>Résultat : ${result}</p>
      <p>Commentaire : ${comment}</p>
    `;

    historyList.appendChild(matchCard);
    simpleMatchForm.reset();
  });
}

if (tournamentForm) {
  tournamentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("tournamentName").value;
    const deck = document.getElementById("tournamentDeck").value;
    const rounds = document.getElementById("tournamentRounds").value;
    const comment = document.getElementById("tournamentComment").value;

    if (name === "" || deck === "" || rounds === "") {
      alert("Veuillez remplir le tournoi.");
      return;
    }

    const tournamentCard = document.createElement("article");
    tournamentCard.classList.add("card");

    tournamentCard.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Deck joué :</strong> ${deck}</p>
      <p><strong>Rounds :</strong></p>
      <p>${rounds}</p>
      <p><strong>Commentaire :</strong> ${comment}</p>
    `;

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
    const name = document.getElementById("eventName").value;
    const deck = document.getElementById("eventDeck").value;

    if (date === "" || name === "" || deck === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const eventCard = document.createElement("article");
    eventCard.classList.add("event-card");

    eventCard.innerHTML = `
      <h3>${name}</h3>
      <p>Date : ${date}</p>
      <p>Type : ${type}</p>
      <p>Deck prévu : ${deck}</p>
    `;

    eventList.appendChild(eventCard);
    eventForm.reset();
  });
}