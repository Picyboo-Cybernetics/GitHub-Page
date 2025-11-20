// /js/config.js
// Configuration and Constants
const CONFIG = {
    company: {
        name: 'Picyboo Cybernetics Inc.',
        country: 'Canada',
        province: 'British Columbia',
        incorporated: 'October 26, 2021',
        offices: {
            registration: 'Langley, British Columbia',
            trading: 'Toronto, Ontario'
        },
        email: 'company@picyboo.com'
    },
    
    github: {
        org: 'Picyboo-Cybernetics',
        baseUrl: 'https://github.com/Picyboo-Cybernetics'
    },
    
    projects: [
        {
            id: 'hnqa',
            icon: 'fa-brain',
            title: 'HNQA',
            subtitle: 'Hybrid Neural Quantum Architecture',
            impact: 'Probabilistic inference with quantum-inspired state superposition',
            description: 'Neural architecture implementing quantum superposition principles for maintaining multiple hypothesis states. Enables contextual resolution without premature probability collapse. Addresses AI brittleness through probabilistic state management in classical computing environments.',
            keywords: ['Quantum ML', 'Probabilistic AI', 'Superposition', 'PyTorch'],
            badges: ['research', 'implementation'],
            doi: 'https://doi.org/10.5281/zenodo.17455262',
            github: 'https://github.com/Picyboo-Cybernetics/picyboo-public-hnqa'
        },
        {
            id: 'msa',
            icon: 'fa-project-diagram',
            title: 'MSA',
            subtitle: 'Meta-Synthetic Architecture',
            impact: 'Meta-coordination layer for multi-agent system coherence',
            description: 'Meta-coordination framework enforcing logical coherence across specialized subsystems. Prevents conflicting state updates while enabling cross-domain knowledge transfer. Implements stable knowledge accumulation and causal reasoning through constraint-based coordination protocols.',
            keywords: ['Continual Learning', 'Multi-Agent Systems', 'Meta-Learning', 'Causal Inference'],
            badges: ['research', 'implementation'],
            doi: 'https://doi.org/10.5281/zenodo.17455369',
            github: 'https://github.com/Picyboo-Cybernetics/picyboo-public-msa'
        },
        {
            id: 'niep',
            icon: 'fa-sync-alt',
            title: 'NIEP',
            subtitle: 'Neuro-Inspired Error Propagation',
            impact: 'Biologically-inspired continual learning with catastrophic forgetting mitigation',
            description: 'Backpropagation variant implementing refractory periods and eligibility traces for stable incremental learning. Eliminates catastrophic interference in continuous task streams while maintaining computational efficiency. Includes TensorFlow/PyTorch implementations for production deployment.',
            keywords: ['Continual Learning', 'Refractory Gating', 'Neural Networks', 'TensorFlow'],
            badges: ['research', 'production'],
            doi: 'https://doi.org/10.5281/zenodo.17455451',
            github: 'https://github.com/Picyboo-Cybernetics/picyboo-public-niep'
        },
        {
            id: 'qreduct',
            icon: 'fa-compress-alt',
            title: 'Q-Reduct',
            subtitle: 'Quantum-Ready Erasure Codec',
            impact: 'Constraint-based compression with Grover-accelerated reconstruction',
            description: 'Erasure coding implementation achieving 80-90% size reduction by encoding only mathematical constraints specifying data uniqueness. Reconstruction via Grover search reduces complexity from O(2^n) to O(2^(n/2)). Prototype implementation with classical simulation and quantum circuit specifications.',
            keywords: ['Quantum Algorithms', 'Grover Search', 'Information Theory', 'Qiskit'],
            badges: ['research', 'prototype'],
            doi: 'https://doi.org/10.5281/zenodo.17455524',
            github: 'https://github.com/Picyboo-Cybernetics/picyboo-public-qreduct'
        },
        {
            id: 'fta',
            icon: 'fa-globe-americas',
            title: 'FinTrace Atlas',
            subtitle: 'International Financial Oversight Visualization',
            impact: 'Geospatial regulatory network visualization framework',
            description: 'Interactive mapping framework for financial regulatory structures and supervisory networks. Implements geospatial data modeling connecting authorities, legal frameworks, and institutional relationships across jurisdictions. Built with D3.js, Leaflet, and RESTful API architecture.',
            keywords: ['D3.js', 'Geospatial', 'Regulatory Data', 'REST API'],
            badges: ['tool', 'production'],
            github: 'https://github.com/Picyboo-Cybernetics/picyboo-fin-trace-atlas-fta',
            demo: 'https://picyboo.net/public/fta/'
        }
    ],
    
    opensourceStats: [
        { number: '5', label: 'Research Projects' },
        { number: '9', label: 'Open Source Repos' },
        { number: '4', label: 'White Papers' },
        { number: 'MIT', label: 'License' }
    ]
};