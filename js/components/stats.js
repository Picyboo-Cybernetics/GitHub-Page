// /js/components/stats.js
// Stats Component
class Stats {
    constructor() {
        this.container = document.getElementById('statsGrid');
        if (this.container) {
            this.render();
        }
    }
    
    render() {
        this.container.innerHTML = '';
        
        CONFIG.opensourceStats.forEach((stat, index) => {
            const card = this.createStatCard(stat, index);
            this.container.appendChild(card);
        });
    }
    
    createStatCard(stat, index) {
        const card = createElement('div', 'stat-card');
        card.style.animationDelay = `${index * 0.1}s`;
        
        const number = createElement('div', 'stat-number', {
            textContent: stat.number
        });
        
        const label = createElement('div', 'stat-label', {
            textContent: stat.label
        });
        
        card.appendChild(number);
        card.appendChild(label);
        
        return card;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Stats());
} else {
    new Stats();
}