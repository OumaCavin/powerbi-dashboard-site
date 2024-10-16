// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const dashboard = document.getElementById('dashboard');
    body.classList.toggle('dark-mode');
    
    // Toggle iframe border colors when in dark mode
    if (body.classList.contains('dark-mode')) {
        dashboard.querySelector('iframe').style.border = '2px solid #fff';
    } else {
        dashboard.querySelector('iframe').style.border = '2px solid #ccc';
    }
}

// Add event listener to dark mode button
document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.addEventListener('click', toggleDarkMode);
});
