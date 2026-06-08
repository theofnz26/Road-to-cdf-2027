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