document.addEventListener('DOMContentLoaded', () => {
    const characterCards = document.querySelectorAll('.character-card');
    let selectedCharacter = null;

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' class from previously selected character
            if (selectedCharacter) {
                selectedCharacter.classList.remove('selected');
            }

            // Add 'selected' class to the clicked character
            card.classList.add('selected');
            selectedCharacter = card; // Update the currently selected character

            // Optional: Log selected character name to console
            const characterName = card.querySelector('h3').textContent;
            console.log(characterName + " selected");
        });
    });
});
