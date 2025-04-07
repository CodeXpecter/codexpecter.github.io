/**
 * Animations and UI enhancement utilities
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations to elements
    function addEntranceAnimations() {
        const card = document.querySelector('.card');
        const formGroups = document.querySelectorAll('.form-group');
        const header = document.querySelector('.card-header');
        
        // Set initial opacity to 0
        [card, header, ...formGroups].forEach(el => {
            if (el) el.style.opacity = '0';
        });
        
        // Animate card entrance
        if (card) {
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Animate header
        if (header) {
            setTimeout(() => {
                header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                header.style.opacity = '1';
            }, 300);
        }
        
        // Animate form groups with staggered delay
        formGroups.forEach((group, index) => {
            setTimeout(() => {
                group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                group.style.opacity = '1';
                group.style.transform = 'translateY(0)';
            }, 600 + (index * 150));
        });
    }
    
    // Add button hover effects
    function addButtonEffects() {
        const buttons = document.querySelectorAll('button, a.btn-primary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(1px)';
                this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
            });
        });
    }
    
    // Add input focus effects
    function addInputEffects() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('input-focused');
            });
        });
    }
    
    // Initialize animations
    function initAnimations() {
        addEntranceAnimations();
        addButtonEffects();
        addInputEffects();
    }
    
    // Run animation setup after a slight delay
    setTimeout(initAnimations, 100);
});
