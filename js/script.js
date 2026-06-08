const deckForm = document.getElementById("deckForm");
const deckList = document.getElementById("deckList");

if (deckForm) {
  deckForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const deckName = document.getElementById("deckName").value;

    if (deckName === "") {
      alert("Veuillez entrer un nom de deck.");
      return;
    }

    const deckBlock = document.createElement("article");
    deckBlock.classList.add("deck-card");

    deckBlock.innerHTML = `
      <h3>${deckName}</h3>

      <form class="matchup-form">
        <input type="text" placeholder="Nom du matchup">
        <input type="number" placeholder="Progression %" min="0" max="100">
        <button type="submit">Ajouter matchup</button>
      </form>

      <div class="matchup-list"></div>
    `;

    deckList.appendChild(deckBlock);
    deckForm.reset();

    const matchupForm = deckBlock.querySelector(".matchup-form");
    const matchupList = deckBlock.querySelector(".matchup-list");

    matchupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const matchupName = matchupForm.querySelector("input[type='text']").value;
      const progressValue = matchupForm.querySelector("input[type='number']").value;

      if (matchupName === "" || progressValue === "") {
        alert("Veuillez remplir le matchup et la progression.");
        return;
      }

      const matchupBlock = document.createElement("div");
      matchupBlock.classList.add("matchup");

      matchupBlock.innerHTML = `
        <p>${matchupName} - ${progressValue}%</p>
        <progress value="${progressValue}" max="100"></progress>
      `;

      matchupList.appendChild(matchupBlock);
      matchupForm.reset();
    });
  });
}
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

if (eventForm) {
  eventForm.addEventListener("submit", function (event) {
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
      <p><strong>Date :</strong> ${date}</p>
      <p><strong>Type :</strong> ${type}</p>
      <p><strong>Deck prévu :</strong> ${deck}</p>
    `;

    eventList.appendChild(eventCard);
    eventForm.reset();
  });
}
const cdfProgressBar = document.getElementById("cdfProgressBar");
const cdfProgressText = document.getElementById("cdfProgressText");

if (cdfProgressBar && cdfProgressText) {
  const startDate = new Date("2026-05-24");
  const endDate = new Date("2027-05-24");
  const today = new Date();

  const totalTime = endDate - startDate;
  const elapsedTime = today - startDate;

  let progress = (elapsedTime / totalTime) * 100;

  if (progress < 0) {
    progress = 0;
  }

  if (progress > 100) {
    progress = 100;
  }

  progress = Math.round(progress);

  cdfProgressBar.value = progress;
  cdfProgressText.textContent = "Progression vers le CDF 2027 : " + progress + "%";
}