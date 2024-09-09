window.addEventListener('load', function() {
    const logoAnimation = document.getElementById('logo-animation');
    const content = document.getElementById('content');

    // Hide the logo animation and show the content after 3 seconds
    setTimeout(function() {
        logoAnimation.style.display = 'none';
        content.classList.remove('hidden');
    }, 3000); // 3000ms equals 3 seconds
});
