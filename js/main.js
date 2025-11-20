// /js/main.js
// Main Application Initialization
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Log initialization
        console.log('Picyboo Cybernetics - Initializing...');
        
        // Setup global error handling
        this.setupErrorHandling();
        
        // Add fade-in animation to sections
        this.setupSectionAnimations();
        
        // Setup external link handling
        this.setupExternalLinks();
        
        console.log('Picyboo Cybernetics - Ready');
    }
    
    setupErrorHandling() {
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
        });
    }
    
    setupSectionAnimations() {
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        sections.forEach(section => observer.observe(section));
    }
    
    setupExternalLinks() {
        // Add security attributes to external links
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        
        externalLinks.forEach(link => {
            if (!link.hasAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new App());
} else {
    new App();
}

// Expose app for debugging (optional)
window.PicybooApp = {
    version: '1.0.0',
    config: typeof CONFIG !== 'undefined' ? CONFIG : null
};