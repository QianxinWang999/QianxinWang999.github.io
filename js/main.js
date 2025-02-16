document.querySelector('.navbar .menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar .nav').classList.toggle('active');
}); 

document.addEventListener('DOMContentLoaded', function() {
    const positions = document.querySelectorAll('.position');
    
    positions.forEach(position => {
        const header = position.querySelector('.header');
        
        header.addEventListener('click', () => {
            position.classList.toggle('active');

            if (position.classList.contains('active')) {
                position.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}); 