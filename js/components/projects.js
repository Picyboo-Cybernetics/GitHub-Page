// /js/components/projects.js
// Projects Component - GitHub Repo Style
class Projects {
    constructor() {
        this.container = document.getElementById('projectsList');
        if (this.container) {
            this.render();
        }
    }
    
    render() {
        this.container.innerHTML = '';
        
        CONFIG.projects.forEach((project, index) => {
            const repo = this.createRepoCard(project, index);
            this.container.appendChild(repo);
        });
    }
    
    createRepoCard(project, index) {
        const repo = createElement('article', 'project-repo');
        repo.id = `project-${project.id}`;
        repo.style.animationDelay = `${index * 0.1}s`;
        
        // Header
        const header = createElement('div', 'project-repo-header');
        
        // Info
        const info = createElement('div', 'project-repo-info');
        
        const name = createElement('div', 'project-repo-name');
        const icon = createElement('div', 'project-repo-icon');
        icon.innerHTML = `<i class="fas ${project.icon}"></i>`;
        const title = createElement('h3', 'project-repo-title', { 
            textContent: project.title 
        });
        name.appendChild(icon);
        name.appendChild(title);
        
        const subtitle = createElement('p', 'project-repo-subtitle', { 
            textContent: project.subtitle 
        });
        
        const badges = createElement('div', 'project-repo-badges');
        project.badges.forEach(badgeType => {
            const badge = createElement('span', `repo-badge repo-badge-${badgeType}`);
            badge.textContent = this.getBadgeText(badgeType);
            badges.appendChild(badge);
        });
        
        info.appendChild(name);
        info.appendChild(subtitle);
        info.appendChild(badges);
        header.appendChild(info);
        
        // Impact
        const impact = createElement('div', 'project-repo-impact', { 
            textContent: `→ ${project.impact}` 
        });
        
        // Description
        const description = createElement('p', 'project-repo-description', { 
            textContent: project.description 
        });
        
        // Meta
        const meta = createElement('div', 'project-repo-meta');
        
        // Topics
        const topics = createElement('div', 'project-repo-topics');
        project.keywords.forEach(keyword => {
            const topic = createElement('span', 'repo-topic', { 
                textContent: keyword 
            });
            topics.appendChild(topic);
        });
        
        // Links
        const links = createElement('div', 'project-repo-links');
        
        const githubLink = createElement('a', 'repo-link', {
            href: project.github,
            target: '_blank'
        });
        githubLink.innerHTML = '<i class="fab fa-github"></i> Repository';
        links.appendChild(githubLink);
        
        if (project.doi) {
            const doiLink = createElement('a', 'repo-link', {
                href: project.doi,
                target: '_blank'
            });
            doiLink.innerHTML = '<i class="fas fa-file-alt"></i> Paper';
            links.appendChild(doiLink);
        }
        
        if (project.demo) {
            const demoLink = createElement('a', 'repo-link', {
                href: project.demo,
                target: '_blank'
            });
            demoLink.innerHTML = '<i class="fas fa-rocket"></i> Live Demo';
            links.appendChild(demoLink);
        }
        
        meta.appendChild(topics);
        meta.appendChild(links);
        
        // Assemble
        repo.appendChild(header);
        repo.appendChild(impact);
        repo.appendChild(description);
        repo.appendChild(meta);
        
        return repo;
    }
    
    getBadgeText(type) {
        const labels = {
            research: 'Research',
            implementation: 'Implementation',
            production: 'Production',
            prototype: 'Prototype',
            tool: 'Tool'
        };
        return labels[type] || type;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Projects());
} else {
    new Projects();
}