document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeToggleButton(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.getAttribute('data-theme') === 'light' 
                        ? 'dark' 
                        : 'light';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleButton(newTheme);
    });
});

function updateThemeToggleButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}