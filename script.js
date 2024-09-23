const themeToggle = document.getElementById('theme-toggle');

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = 'Light';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = 'Dark';
    }
}


const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDarkScheme);

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(!isDark);
});

