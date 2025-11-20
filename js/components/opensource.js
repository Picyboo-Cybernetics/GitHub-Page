// /js/components/opensource.js
// Open Source Component
class OpenSource {
    constructor() {
        this.container = document.getElementById('opensourceStats');
        if (this.container) {
            this.render();
        }
    }
    
    render() {
        this.container.innerHTML = '';
        
        CONFIG.opensourceStats.forEach((stat, index) => {
            const statCard = this.createStatCard(stat, index);
            this.container.appendChild(statCard);
        });
    }
    
    createStatCard(stat, index) {
        const card = createElement('div', 'opensource-stat');
        card.style.animationDelay = `${index * 0.1}s`;
        
        const number = createElement('div', 'opensource-stat-number', {
            textContent: stat.number
        });
        
        const label = createElement('div', 'opensource-stat-label', {
            textContent: stat.label
        });
        
        card.appendChild(number);
        card.appendChild(label);
        
        return card;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new OpenSource());
} else {
    new OpenSource();
}