Shared Dependencies:

1. Exported Variables:
   - `flashcards`: An array of objects, each representing a flashcard with an emoji and its corresponding Greek word.
   - `currentCardIndex`: An integer representing the current flashcard being displayed.

2. Data Schemas:
   - `Flashcard`: An object with properties `emoji` (string) and `greekWord` (string).

3. ID Names of DOM Elements:
   - `flashcard-container`: The container for the flashcard game.
   - `emoji-display`: The element where the emoji is displayed.
   - `greek-word-display`: The element where the Greek word is displayed.
   - `next-button`: The button to move to the next flashcard.
   - `prev-button`: The button to move to the previous flashcard.
   - `theme-toggle`: The button to switch between light and dark mode.

4. Message Names:
   - `flashcardChange`: Event fired when the flashcard changes.
   - `themeChange`: Event fired when the theme changes.

5. Function Names:
   - `loadFlashcard()`: Function to load a flashcard into the DOM.
   - `nextFlashcard()`: Function to move to the next flashcard.
   - `prevFlashcard()`: Function to move to the previous flashcard.
   - `toggleTheme()`: Function to switch between light and dark mode.
   - `adjustForMobile()`: Function to adjust the layout for mobile devices.

6. Shared CSS Classes (from Tailwind CSS):
   - `container`, `mx-auto`, `p-4`, `text-center`, `bg-white`, `dark:bg-gray-800`, `text-black`, `dark:text-white`, etc. These classes are used across multiple files for consistent styling.

7. Shared Assets:
   - `images/emoji_animals/`: Directory containing emoji images used in the flashcards.

8. Shared Libraries:
   - `tailwind.css`: The Tailwind CSS library file, used across all HTML files for styling.