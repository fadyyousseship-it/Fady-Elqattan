module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site-shell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site-content.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fadyyousseship-it.github.io/Portofolio'),
    title: {
        default: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].name} | Portfolio`,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].name}`
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].description,
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].name} | Portfolio`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].description,
        type: 'website',
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].siteName,
        images: [
            '/brand/og-image.svg'
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].name} | Portfolio`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].description,
        images: [
            '/brand/og-image.svg'
        ]
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg'
    }
};
function RootLayout({ children }) {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].name,
        jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].title,
        email: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].email}`,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].linkedin,
        sameAs: [
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].linkedin,
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].githubPrimary,
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].githubSecondary,
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profile"].aisuUrl
        ],
        alumniOf: 'Horus University',
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"].description
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteShell"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(personSchema)
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/site-shell.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SiteShell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SiteShell() from the server but SiteShell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/site-shell.tsx", "SiteShell");
}),
"[project]/components/site-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/site-shell.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/data/site-content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certificates",
    ()=>certificates,
    "contactLinks",
    ()=>contactLinks,
    "currentlyLearning",
    ()=>currentlyLearning,
    "experience",
    ()=>experience,
    "featuredProjects",
    ()=>featuredProjects,
    "leadership",
    ()=>leadership,
    "navigation",
    ()=>navigation,
    "openSource",
    ()=>openSource,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "researchInterests",
    ()=>researchInterests,
    "seo",
    ()=>seo,
    "skillGroups",
    ()=>skillGroups,
    "stats",
    ()=>stats,
    "summary",
    ()=>summary,
    "ventures",
    ()=>ventures
]);
const profile = {
    name: 'Fady Elqattan',
    fullName: 'Fady Elqattan',
    title: 'Intelligent Cybersecurity Student | Software Developer | Open Source Advocate',
    location: 'Egypt',
    university: 'Horus University',
    faculty: 'Faculty of Artificial Intelligence',
    major: 'Intelligent Cybersecurity',
    tagline: 'Building Technology. Creating Impact.',
    heroSubLine: 'Cybersecurity · Software Engineering · Artificial Intelligence · Open Source',
    availabilityBadge: 'Available for Opportunities',
    email: 'fadyyoussefabdelmassih@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fady-youssif-abd-elmassih-54b08a278/',
    githubPrimary: 'https://github.com/fadyyousseship-it',
    githubSecondary: 'https://github.com/FadyElqattan',
    aisuUrl: 'https://a-i-s-u.me',
    instagramUrl: 'https://www.instagram.com/aisu_hue/',
    cvUrl: '/Fady_Elqattan_Cybersecurity_CV.pdf'
};
const certificates = [
    'Cybersecurity Fundamentals',
    'Networking & Systems',
    'Linux & OS Security',
    'Python for Security & Automation',
    'AI & Data Foundations'
];
const summary = `I am an Intelligent Cybersecurity student passionate about building practical technology solutions, exploring secure systems, and contributing to open-source communities. My interests are centered on cybersecurity, software development, system analysis, and secure product design. I enjoy turning ideas into working tools, from security-focused applications and technical experiments to community-driven educational projects.

Beyond technical development, I actively contribute to student-led technology communities, helping organize teams, develop technical initiatives, and create opportunities for students to learn, collaborate, and build. I believe in learning through building, engineering with purpose, and using technology to solve meaningful real-world problems.`;
const stats = [
    '180–200 community members (approx.)',
    '300+ event attendees',
    '2 career sessions',
    '5+ technical domains'
];
const currentlyLearning = [
    'Networks',
    'Operating Systems',
    'Reverse Engineering',
    'Penetration Testing',
    'Cybersecurity Fundamentals'
];
const skillGroups = [
    {
        title: 'Programming',
        skills: [
            'Python',
            'Excel',
            'C++',
            'C',
            'JavaScript',
            'HTML/CSS',
            'React'
        ]
    },
    {
        title: 'Data Analysis',
        skills: [
            'Pandas',
            'NumPy',
            'Matplotlib',
            'Seaborn',
            'FastAPI',
            'Flask'
        ]
    },
    {
        title: 'Data Tools & Visualization',
        skills: [
            'Power BI',
            'SQL',
            'Google Sheets',
            'Excel'
        ]
    },
    {
        title: 'Web',
        skills: [
            'HTML/CSS',
            'JavaScript',
            'React'
        ]
    },
    {
        title: 'Backend',
        skills: [
            'FastAPI',
            'Flask',
            'Python'
        ]
    },
    {
        title: 'Databases',
        skills: [
            'SQL',
            'PostgreSQL'
        ]
    },
    {
        title: 'Dev Tools',
        skills: [
            'Git',
            'GitHub',
            'CLion',
            'VS Code'
        ]
    },
    {
        title: 'Interests',
        skills: [
            'Cybersecurity',
            'Network Security',
            'Operating Systems',
            'Reverse Engineering',
            'Penetration Testing'
        ]
    }
];
const projects = [
    {
        slug: 'md-simulation-dashboard',
        title: 'MDSimulation Dashboard',
        type: 'Scientific Computing / Molecular Dynamics / Software Engineering',
        status: 'In Development',
        summary: 'A dashboard for interacting with live molecular dynamics simulations and exploring scientific analysis in real time.',
        stack: [
            'Python',
            'MDAnalysis',
            'IMDv3 streaming protocol',
            'imdclient',
            'FastAPI',
            'Flask',
            'React'
        ],
        highlights: [
            'Live simulation status monitoring',
            'Streaming simulation data',
            'Frame-based molecular analysis',
            'Distance and angle calculations',
            'Radius of Gyration analysis',
            'Time-dependent scientific analysis'
        ],
        myRole: 'Designed and worked on the architecture connecting MD simulation data to an interactive analytical interface.',
        problem: 'Molecular dynamics workflows need a bridge between raw simulation outputs and a usable, interactive analysis interface for researchers.',
        solution: 'I worked on a system that streams scientific simulation data into a dashboard and makes it easier to inspect frames, compute geometric metrics, and track time-based trends.',
        architecture: 'Data ingestion from MD simulation streams → processing and analysis layer → API endpoints → interactive dashboard UI.',
        result: 'The project strengthened my understanding of scientific software architecture, real-time data flow, and interface design for research tooling.',
        demo: 'Live simulation dashboard demo placeholder',
        github: 'https://github.com/fadyyousseship-it',
        featured: true
    },
    {
        slug: 'human-rights-journey-through-time',
        title: 'Human Rights – Journey Through Time',
        type: 'Web / EdTech',
        status: 'Completed',
        summary: 'A single-file educational timeline that presents the historical evolution of human rights through interactive storytelling.',
        stack: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        highlights: [
            'Interactive timeline',
            'Educational storytelling',
            'Milestone-based historical presentation',
            'Visual narrative design'
        ],
        myRole: 'Designed and built the interactive timeline and presentation experience.',
        problem: 'Human rights history is dense and complex, so students benefit from a clearer narrative structure and visual progression.',
        solution: 'I created a single-page educational experience that organizes key milestones into a readable timeline and guides users through important historical developments.',
        architecture: 'Single-page front-end with HTML structure, styling, and JavaScript-driven timeline interactivity.',
        result: 'The project sharpened my ability to turn educational content into a clear, engaging digital experience.',
        demo: 'Live HTML timeline demo',
        github: 'https://github.com/fadyyousseship-it',
        featured: true
    },
    {
        slug: 'smart-library-management-system',
        title: 'Smart Library Management System',
        type: 'Software Engineering',
        status: 'Working Prototype',
        summary: 'A library-focused application that brings together backend logic, user interface, and system architecture fundamentals.',
        stack: [
            'C++',
            'HTML',
            'CSS',
            'JavaScript'
        ],
        highlights: [
            'C++ application logic',
            'Frontend and backend integration',
            'User-facing interface',
            'Architecture fundamentals'
        ],
        myRole: 'Built the software structure and coordinated the integration between application logic and interface flow.',
        problem: 'A library system benefits from a clear separation between business logic and the user experience, especially in a small software project.',
        solution: 'I implemented a modular design that exposes the core library operations through a practical interface and helps demonstrate software engineering concepts.',
        architecture: 'C++ backend processing + HTML/CSS/JavaScript front-end interaction + system-level logic flow.',
        result: 'This project improved my understanding of software architecture, user interactions, and end-to-end system design.',
        demo: 'Library management interactive prototype',
        github: 'https://github.com/fadyyousseship-it',
        featured: true
    },
    {
        slug: 'flappy-bird-cpp-game',
        title: 'Flappy Bird – C++ Game Development',
        type: 'Game Development',
        status: 'Completed',
        summary: 'A 2D Flappy Bird-inspired game built through C++ and SFML, covering gameplay loops, collision logic, and graphics rendering.',
        stack: [
            'C++',
            'SFML',
            'CLion'
        ],
        highlights: [
            'Game loop',
            'Input handling',
            'Collision detection',
            'Graphics and game logic'
        ],
        myRole: 'Designed and implemented the core gameplay behavior and rendering.',
        problem: 'A simple game project allows the opportunity to learn how motion, input, and collision systems interact inside a real-time simulation.',
        solution: 'I built a classic side-scrolling game loop with input handling, obstacle logic, and visual feedback in C++ using SFML.',
        architecture: 'Game loop → input handling → physics and collision checks → rendering pipeline.',
        result: 'The project developed my understanding of real-time systems, UI/game design and performance-oriented logic.',
        demo: 'Playable game prototype',
        github: 'https://github.com/fadyyousseship-it',
        featured: false
    },
    {
        slug: 'hacker-statistics',
        title: 'Hacker Statistics',
        type: 'Python Data Analysis',
        status: 'Completed',
        summary: 'A completed learning project focused on statistical analysis and exploratory data work in Python.',
        stack: [
            'Python',
            'NumPy',
            'Pandas',
            'Matplotlib'
        ],
        highlights: [
            'Statistical analysis',
            'Data exploration',
            'Visualization'
        ],
        myRole: 'Built and analyzed the dataset using Python tools for data-driven insights.',
        problem: 'Learning projects benefit from a clear workflow that joins data exploration, analysis, and visual explanation.',
        solution: 'I applied Python-based data analysis methods to explore patterns and communicate insights with visual summaries.',
        architecture: 'Data import → analysis → visualization → summary of findings.',
        result: 'This project reinforced my foundation in Python analysis workflows and statistical thinking.',
        demo: 'Completed learning project',
        github: 'https://github.com/fadyyousseship-it',
        featured: false
    },
    {
        slug: 'beyond-earth',
        title: 'Beyond Earth',
        type: 'Browser Game / Educational Simulation',
        status: 'Working Prototype',
        summary: 'An offline-capable, browser-first Mars exploration and survival adventure designed for young learners, combining gameplay, story, resource management, and educational mission structure.',
        stack: [
            'Phaser 3',
            'JavaScript',
            'Vite',
            'LocalStorage',
            'HTML',
            'CSS'
        ],
        highlights: [
            'Offline-capable browser gameplay',
            'Persistent in-browser progression and save state',
            'Mission flow involving scanning, mining, collecting, crafting, and base building',
            'Seasonal campaign with resource, crop, and production management',
            'Context-aware companion guidance and educational mission design'
        ],
        myRole: 'Built and contributed to a game-driven educational project focused on survival, exploration, and mission progression in a browser environment.',
        problem: 'The project needed a way to combine interactive learning, survival gameplay, and long-form mission progression in a lightweight browser experience without requiring a backend or paid services.',
        solution: 'I worked on a browser-based game structure that uses Phaser 3, persistent LocalStorage, and a mission-driven world loop to support exploration, evidence gathering, resource processing, and returning-rocket gameplay.',
        architecture: 'Single-page browser app → Phaser scene system and world state → inventory, construction, crop, and mission overlays → LocalStorage save system.',
        result: 'The project strengthened my understanding of browser-based game architecture, offline-friendly front-end design, and educational game systems that combine gameplay with learning goals.',
        demo: 'Browser-based Mars survival game with story and mission progression',
        github: 'https://github.com/fadyyousseship-it/Beyond-Earth',
        featured: true
    },
    {
        slug: 'stock-market-analyzer',
        title: 'Stock Market Analyzer',
        type: 'Data Analysis / Planned',
        status: 'Planned',
        summary: 'A planned project focused on market data analysis and interactive financial insight generation.',
        stack: [
            'Python',
            'Pandas',
            'Matplotlib',
            'Power BI'
        ],
        highlights: [
            'Market trend analysis',
            'Financial data exploration',
            'Visualization'
        ],
        myRole: 'Planned the structure and analytical approach for a future market-data project.',
        problem: 'Financial data requires structured analysis and careful interpretation before practical decision support can be built.',
        solution: 'I intend to structure a workflow around data collection, transformation, market trend analysis, and chart-based explanation.',
        architecture: 'Data ingestion → cleaning and transformation → technical analysis → reporting and charts.',
        result: 'This project is a future direction for combining data analysis, product thinking, and practical financial insight.',
        demo: 'Planned dashboard concept',
        github: 'https://github.com/fadyyousseship-it',
        featured: false
    }
];
const featuredProjects = projects.filter((project)=>project.featured);
const leadership = {
    organization: 'Evolve-AISU HUE, Horus University',
    role: 'Evolve-AISU HUE community leadership contributor',
    details: 'Helped build and expand the community, contributed to organizational and technical leadership, developed technical teams and internal structures, planned educational and technical initiatives, promoted open-source culture, and connected students with opportunities.',
    initiatives: [
        'Choose Your Character: two career-exploration sessions, 300+ attendees, covering AI Engineering, Software Development, Business, Hardware, Cybersecurity.',
        'Open Source Initiative: event initiative introducing students to collaborative development and contribution.',
        'Egypt Space Agency educational trip: initiative approved for coordination with the agency by the university dean.',
        'Game Jam: explored and planned as a potential student event direction.'
    ]
};
const openSource = {
    title: 'GSoC Applicant / Open Source Project Exploration',
    description: 'Open-source project exploration centered on the MDAnalysis IMDv3 Dashboard concept, with technical architecture investigation and communication with mentors.',
    projectIdea: 'MDAnalysis IMDv3 Dashboard'
};
const researchInterests = [
    'Cybersecurity (network security and secure systems)',
    'Operating systems and system internals',
    'Reverse engineering and malware analysis',
    'Penetration testing and ethical hacking'
];
const experience = {
    title: 'Educational Content Development & Teaching Assistance',
    organization: 'Dr. Keroles Gamil',
    role: 'Teaching / Educational Content Assistant',
    areas: [
        'Programming and AI',
        'Science curriculum content'
    ],
    responsibilities: [
        'Structured educational materials for students and lesson preparation.',
        'Created curriculum-based explanations, exercises, and model answers.',
        'Prepared summaries, lesson resources, and assessments for learning support.',
        'Developed study resources for Grade 2 Preparatory Science, Grade 5–6 Science, and Grade 2 Baccalaureate Programming & AI.'
    ],
    placeholder: '[TODO: Add sample materials to publish here.]'
};
const ventures = [
    {
        name: 'SME Financial Intelligence Platform',
        description: 'AI-powered financial control layer for small online businesses that transforms CSV and Excel files from Instagram and dropshipping stores into reports on revenue, profit, advertising efficiency, product performance, and KPIs.',
        stack: [
            'Python',
            'FastAPI',
            'PostgreSQL'
        ]
    },
    {
        name: 'Evolve',
        description: 'AI + human research initiative focused on mental health and addiction-related research, combining scientific research and AI for responsible, evidence-based solutions.',
        stack: [
            'AI',
            'Research',
            'Responsible Technology'
        ]
    },
    {
        name: 'AISU Technical Ecosystem',
        description: 'Community learning ecosystem with roadmaps, website, chatbot, learning resources, and team management.',
        stack: [
            'Community Education',
            'AI',
            'Learning Infrastructure'
        ]
    }
];
const navigation = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/projects',
        label: 'Projects'
    },
    {
        href: '/leadership',
        label: 'Leadership'
    },
    {
        href: '/research',
        label: 'Research'
    },
    {
        href: '/startups',
        label: 'Startups'
    },
    {
        href: '/skills',
        label: 'Skills'
    },
    {
        href: '/contact',
        label: 'Contact'
    }
];
const contactLinks = [
    {
        label: 'LinkedIn',
        href: profile.linkedin
    },
    {
        label: 'GitHub',
        href: profile.githubPrimary
    },
    {
        label: 'Email',
        href: `mailto:${profile.email}`
    },
    {
        label: 'CV',
        href: profile.cvUrl
    }
];
const seo = {
    siteName: 'Fady Elqattan Portfolio',
    description: 'Portfolio for Fady Elqattan, an Intelligent Cybersecurity student, software developer, and open-source advocate focused on AI, software engineering, and research.'
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0313szfc8rg-w._.js.map