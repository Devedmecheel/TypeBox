// Add a shadow to the header when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});