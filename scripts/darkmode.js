// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
}

// Event listener for theme change
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Event to fire when theme changes
document.body.addEventListener('themeChange', function() {
    if (document.body.classList.contains('dark')) {
        // Apply dark mode styles
        document.body.style.backgroundColor = '#1a202c';
        document.body.style.color = '#a0aec0';
    } else {
        // Apply light mode styles
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#1a202c';
    }
});