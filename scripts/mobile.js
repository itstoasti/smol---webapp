```javascript
window.addEventListener('resize', adjustForMobile);

function adjustForMobile() {
    const flashcardContainer = document.getElementById('flashcard-container');

    if (window.innerWidth <= 600) {
        flashcardContainer.classList.add('flex-col');
        flashcardContainer.classList.remove('flex-row');
    } else {
        flashcardContainer.classList.add('flex-row');
        flashcardContainer.classList.remove('flex-col');
    }
}

// Call the function initially to set the layout based on the initial window size
adjustForMobile();
```