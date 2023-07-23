```javascript
let flashcards = [
  { emoji: 'images/emoji_animals/lion.png', greekWord: 'λιοντάρι' },
  { emoji: 'images/emoji_animals/cat.png', greekWord: 'γάτα' },
  // Add more flashcards as needed
];

let currentCardIndex = 0;

function loadFlashcard() {
  let flashcard = flashcards[currentCardIndex];
  document.getElementById('emoji-display').src = flashcard.emoji;
  document.getElementById('greek-word-display').innerText = flashcard.greekWord;
}

function nextFlashcard() {
  currentCardIndex = (currentCardIndex + 1) % flashcards.length;
  loadFlashcard();
  document.dispatchEvent(new Event('flashcardChange'));
}

function prevFlashcard() {
  currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
  loadFlashcard();
  document.dispatchEvent(new Event('flashcardChange'));
}

document.getElementById('next-button').addEventListener('click', nextFlashcard);
document.getElementById('prev-button').addEventListener('click', prevFlashcard);

loadFlashcard(); // Load the first flashcard on page load
```