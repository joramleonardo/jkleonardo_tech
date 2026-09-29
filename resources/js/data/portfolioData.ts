export interface ProjectItem {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: 'Online Shop' | 'Web App' | 'Event App' | 'Portal';
    featured: boolean;
    year: string;
    client: string;
    role: string;
    duration: string;
    impactMetric: string;
    impactLabel: string;
    secondaryMetric: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    liveUrl: string;
    domainLabel: string;
    repoUrl: string;
    accentFrom: string;
    accentTo: string;
    previewType: 'vela-aroma' | 'work-scheduler' | 'christmas-party' | 'ticketing-portal';
}

export interface ServiceItem {
    id: string;
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
    impact: string;
    iconName: 'code' | 'sparkles' | 'cart' | 'rocket';
}

export interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    projectSlug: string;
    metricHighlight: string;
    avatarInitials: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    timeline: string;
    description: string;
    deliverables: string[];
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ResumeExperienceItem {
    period: string;
    role: string;
    organization: string;
    location: string;
    summary: string;
    highlights: string[];
}

export interface ResumeEducationItem {
    period: string;
    degree: string;
    school: string;
    details: string;
}

export interface ResumeProjectItem {
    title: string;
    organization: string;
    technologies: string[];
    description: string;
    liveUrl?: string;
}

export interface ResumeReferenceItem {
    name: string;
    role: string;
    organization: string;
    phone: string;
}

export const STUDIO_PROFILE = {
    brandName: 'JKLeonardo',
    brandSuffix: 'Tech',
    founderName: 'Joram Kate Leonardo',
    shortName: 'Joram Leonardo',
    founderTitle: 'Full Stack Web Developer',
    profilePhotoUrl: '/images/profile.jpg',
    fallbackPhotoUrl: 'https://avatars.githubusercontent.com/u/46211987?v=4',
    resumePdfUrl: '/resume/Joram-Kate-Leonardo-Resume.pdf',
    tagline:
        'Detail-oriented Full Stack Web Developer experienced in developing, maintaining, and deploying web-based information systems, online stores, and custom web applications.',
    resumeSummary:
        'Detail-oriented Full Stack Web Developer with experience in developing, maintaining, and deploying web-based information systems for government and client projects. Skilled in Laravel, Vue.js, React, Inertia.js, MySQL, Tailwind CSS, database-driven application development, and AI-assisted development tools. Experienced in database administration, system customization, user support, system deployment, and project coordination, with a strong ability to translate operational requirements into functional and user-friendly systems.',
    availabilityText: 'Available for Web Projects & Development Inquiries',
    email: 'jkleonardo.tech@gmail.com',
    personalEmail: 'joramkatesleonardo@gmail.com',
    mailerEmail: 'hello@jkleonardo.tech',
    phone: '0949 320 5038',
    githubUrl: 'https://github.com/joramleonardo',
    githubHandle: '@joramleonardo',
    location: 'Imus, Cavite, Philippines',
    responseTime: 'Within 24 Hours',
    stats: [
        { value: '7+ Yrs', label: 'IT & Dev Experience', detail: 'Since 2018 at DOST' },
        { value: '8+', label: 'Systems Built', detail: 'Gov & Client Web Apps' },
        { value: 'Full-Stack', label: 'Laravel • Vue • React', detail: 'Inertia.js & MySQL' },
        { value: '100%', label: 'User-Friendly', detail: 'Clean & Practical UI' },
    ],
    socials: [
        { name: 'GitHub', url: 'https://github.com/joramleonardo', handle: '@joramleonardo' },
        { name: 'Vela Aroma PH', url: 'https://velaaromaph.jkleonardo.tech', handle: 'velaaromaph.jkleonardo.tech' },
        { name: 'ShiftSync Scheduler', url: 'https://workscheduler.jkleonardo.tech', handle: 'workscheduler.jkleonardo.tech' },
        { name: 'Party Planner Hub', url: 'https://christmasparty.jkleonardo.tech', handle: 'christmasparty.jkleonardo.tech' },
    ],
};

export const RESUME_EXPERIENCE: ResumeExperienceItem[] = [
    {
        period: 'March 2021 – Present',
        role: 'Computer Programmer II',
        organization: 'DOST-STII',
        location: 'Taguig, Metro Manila / Philippines',
        summary:
            'Lead full-stack development, database management, and deployment of web-based information systems for DOST-STII.',
        highlights: [
            'Analyze, design, and implement information systems and databases.',
            'Facilitate system development, customization, deployment, and maintenance.',
            'Manage database administration and system maintenance activities.',
            'Conduct system deployment, user training, and technical support.',
        ],
    },
    {
        period: 'January 2020 – February 2021',
        role: 'Project Assistant II',
        organization: 'DOST-MIMAROPA',
        location: 'Philippines',
        summary:
            'Supported regional health technology rollout, field deployment, and coordination with medical teams.',
        highlights: [
            'Assisted in the implementation of the "Rollout of RxBox Units" project.',
            'Facilitated the distribution and deployment of RxBox units.',
            'Coordinated closely with the RxBox RMT and RHU teams.',
            'Provided secretariat support for meetings, documentation, and other project-related activities.',
        ],
    },
    {
        period: 'July 2019 – February 2021',
        role: 'Computer Maintenance Technologist I',
        organization: 'DOST-STII',
        location: 'Philippines',
        summary:
            'Developed internal knowledge systems and provided technical support and end-user training.',
        highlights: [
            'Developed and implemented a Knowledge Management System.',
            'Facilitated system deployment and user training.',
            'Provided hardware and software technical support to end users.',
        ],
    },
    {
        period: 'July 2018 – March 2019',
        role: 'Computer Operator IV',
        organization: 'DOST-STII',
        location: 'Philippines',
        summary:
            'Assisted in designing, building, and deploying internal information systems.',
        highlights: [
            'Analyzed, designed, and implemented information systems.',
            'Assisted in system development, deployment, and training activities.',
        ],
    },
];

export const RESUME_EDUCATION: ResumeEducationItem[] = [
    {
        period: '2014 – 2018',
        degree: 'Bachelor of Science in Computer Science',
        school: 'De La Salle University - Dasmariñas',
        details:
            'Studied software engineering, database systems, systems analysis & design, and full-stack web application development.',
    },
];

export const RESUME_PROJECTS: ResumeProjectItem[] = [
    {
        title: 'DOST-STII Library Online Public Access Catalog (OPAC)',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'React 18',
            'TypeScript',
            'Inertia.js',
            'Tailwind CSS',
            'MySQL',
            'Vite',
            'Node.js',
        ],
        description:
            'A web-based Online Public Access Catalog for the DOST SciNET-PHIL union catalog, allowing users to search and browse library materials across DOST libraries and information centers.',
    },
    {
        title: 'DOSTv Project Management System',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 10',
            'PHP 8.1+',
            'Vue.js 3',
            'Inertia.js',
            'MySQL',
            'Tailwind CSS',
            'Vite',
            'Axios',
            'Chart.js',
            'Node.js',
        ],
        description:
            'A web-based system that manages the full lifecycle of TV production projects, including project setup, task assignment, progress tracking, file submission, review, and monitoring.',
    },
    {
        title: 'DOST Multimedia Collection',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'Vue 3',
            'Inertia.js',
            'MySQL',
            'Tailwind CSS',
            'Vite',
            'Laravel Sanctum',
            'Node.js',
            'Chart.js',
        ],
        description:
            'A role-based multimedia archive and publishing system for managing DOST event albums, photos, and videos. Includes an internal workflow where authors prepare event collections, publishers review and publish content, and a public-facing website for browsing media resources.',
    },
    {
        title: 'DOST-STII Ticketing Management System',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'Vue 3',
            'Inertia.js',
            'Tailwind CSS',
            'MySQL',
            'Laravel Sanctum',
            'Pest',
            'Chart.js',
            'Queued Email Workflows',
            'Google Sheets API',
        ],
        description:
            'A centralized ticket monitoring and administration system designed to manage service requests efficiently. Features a public portal where clients submit requests and an internal dashboard for staff to monitor, filter, update, and resolve tickets.',
        liveUrl: 'https://ticketingportal.jkleonardo.tech',
    },
];

export const RESUME_REFERENCES: ResumeReferenceItem[] = [
    {
        name: 'Chester Francisco',
        role: 'Information Technology Officer I',
        organization: 'DOST-STII',
        phone: '0966 970 9726',
    },
    {
        name: 'Etienne Wayne Amparado',
        role: 'Science Research Specialist I',
        organization: 'DOST-STII',
        phone: '0970 610 2876',
    },
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'vela-aroma-ph',
        slug: 'velaaromaph',
        title: 'Vela Aroma PH',
        subtitle: 'Online Candle Shop, Custom Order Builder & Admin Panel',
        category: 'Online Shop',
        featured: true,
        year: '2026',
        client: 'Vela Aroma PH',
        role: 'Full Stack Web Developer',
        duration: 'Live Website',
        impactMetric: 'Online Store',
        impactLabel: '+ Admin Dashboard',
        secondaryMetric: 'Easy Order Tracking',
        description:
            'An online store for handcrafted dessert-inspired candles. Customers can browse scents, add items to their cart, request custom event souvenirs, and track their orders with payment proof uploads.',
        challenge:
            'Taking orders and checking payment screenshots manually through social media chats was time-consuming and easy to lose track of.',
        solution:
            'I built a complete online shop with a built-in Admin Panel where the owner can easily add products, manage custom event orders, and verify customer payment proofs in one place.',
        results: [
            'Clean product catalog with stock tracking and scent details',
            'Simple order tracking link where buyers can upload their payment receipt',
            'Easy-to-use Admin Dashboard for updating products, prices, and banners',
        ],
        technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
        liveUrl: 'https://velaaromaph.jkleonardo.tech',
        domainLabel: 'velaaromaph.jkleonardo.tech',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-violet-600',
        accentTo: 'to-fuchsia-500',
        previewType: 'vela-aroma',
    },
    {
        id: 'work-scheduler',
        slug: 'workscheduler',
        title: 'ShiftSync — Work Scheduler',
        subtitle: 'Team Shift Planner, Overtime Tracker & Shareable Schedules',
        category: 'Web App',
        featured: true,
        year: '2026',
        client: 'Team Operations',
        role: 'Full Stack Web Developer',
        duration: 'Live Web App',
        impactMetric: 'Team Roster',
        impactLabel: '& Overtime Tracker',
        secondaryMetric: 'Shareable Link',
        description:
            'A simple web app that helps teams plan weekly work shifts, log overtime hours, add daily schedule notes, and share a live view-only schedule link with staff.',
        challenge:
            'Updating weekly shifts and tracking overtime in spreadsheets often caused confusion over which schedule version was the latest.',
        solution:
            'I created ShiftSync so managers can set repeating shift patterns, adjust individual days when needed, track overtime, and share one live link with the whole team.',
        results: [
            'Easy weekly shift planner with quick daily overrides and notes',
            'Built-in overtime hour logging and team member account management',
            'One-click shareable schedule link so everyone sees the latest roster',
        ],
        technologies: ['Laravel 12', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
        liveUrl: 'https://workscheduler.jkleonardo.tech',
        domainLabel: 'workscheduler.jkleonardo.tech',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-indigo-600',
        accentTo: 'to-violet-500',
        previewType: 'work-scheduler',
    },
    {
        id: 'christmas-party-planner',
        slug: 'christmasparty',
        title: 'Christmas Party & Exchange Gift Hub',
        subtitle: 'Secret Santa Generator, Wishlists, Live Voting & Potluck Splitter',
        category: 'Event App',
        featured: true,
        year: '2026',
        client: 'Group & Office Events',
        role: 'Full Stack Web Developer',
        duration: 'Live Web App',
        impactMetric: 'All-in-One',
        impactLabel: 'Party Organizer',
        secondaryMetric: 'Secret Santa + GCash',
        description:
            'A fun, interactive event website where groups can draw Secret Santa names with secret codenames, post wishlists, vote for party awards, and split food expenses via GCash.',
        challenge:
            'Organizing group parties usually means juggling separate apps for Secret Santa draws, wishlists, food assignments, and bill splitting.',
        solution:
            'I combined everything into one friendly event portal that automatically emails Secret Santa matches, lets members look up wishlists by codename, and tracks potluck contributions.',
        results: [
            'Automatic Secret Santa matching with fun codenames and email notifications',
            'Wishlist lookup and gift-idea boards for every participant',
            'Potluck food planner with GCash payment tracking and live party award polls',
        ],
        technologies: ['Laravel', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'MySQL'],
        liveUrl: 'https://christmasparty.jkleonardo.tech',
        domainLabel: 'christmasparty.jkleonardo.tech',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-purple-600',
        accentTo: 'to-rose-500',
        previewType: 'christmas-party',
    },
    {
        id: 'ticketing-portal',
        slug: 'ticketingportal',
        title: 'Ticketing Management System',
        subtitle: 'Centralized Service Request & Ticket Monitoring Portal',
        category: 'Portal',
        featured: true,
        year: '2026',
        client: 'DOST-STII / Support Operations',
        role: 'Full Stack Web Developer',
        duration: 'Live Web App',
        impactMetric: 'End-to-End',
        impactLabel: 'Ticket Workflow',
        secondaryMetric: 'Public + Staff Portal',
        description:
            'A centralized ticket monitoring and administration system designed to manage service requests efficiently. Includes a public website where clients submit requests and an internal dashboard for staff to monitor, filter, update, and resolve tickets.',
        challenge:
            'Service requests scattered across manual messages and forms made it difficult to track ticket statuses, generate reports, and coordinate resolutions.',
        solution:
            'I built a complete ticketing portal using Laravel 12, Vue 3, and Inertia.js with status tracking, pagination, queued email notifications, Chart.js analytics, and Google Sheets sync.',
        results: [
            'Public-facing portal for easy client service request submission',
            'Staff dashboard to search, filter, update, and manage tickets end-to-end',
            'Automated queued email workflows and Chart.js reporting',
        ],
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'Vue 3',
            'Inertia.js',
            'Tailwind CSS',
            'MySQL',
            'Chart.js',
            'Google Sheets API',
        ],
        liveUrl: 'https://ticketingportal.jkleonardo.tech',
        domainLabel: 'ticketingportal.jkleonardo.tech',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-violet-600',
        accentTo: 'to-cyan-500',
        previewType: 'ticketing-portal',
    },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 'custom-web-apps',
        title: 'Custom Web Systems & Information Portals',
        tagline: 'Like OPAC, Project Management & Ticketing Systems',
        description:
            'Need a custom web system for your organization or team? I design and build database-driven web applications tailored to your daily operations.',
        deliverables: [
            'Role-based dashboards for admins, staff, and clients',
            'Search, filtering, status tracking, and data charts',
            'Automated email notifications and reporting',
            'Clean, user-friendly interface that works on any device',
        ],
        impact: 'Turn manual paperwork and spreadsheets into an organized web system.',
        iconName: 'code',
    },
    {
        id: 'ecommerce-engines',
        title: 'Online Shops & Order Management',
        tagline: 'Like Vela Aroma PH',
        description:
            'Launch your own online store with a product catalog, shopping cart, custom order forms, payment proof uploads, and an easy Admin Panel.',
        deliverables: [
            'Product catalog with photos, variants, and stock status',
            'Shopping cart, checkout, and order tracking link',
            'Custom or bulk order request forms for events',
            'Simple Admin Dashboard to update products and prices',
        ],
        impact: 'Have your own professional online store without monthly marketplace fees.',
        iconName: 'cart',
    },
    {
        id: 'interactive-event-portals',
        title: 'Event, Booking & Team Web Apps',
        tagline: 'Like ShiftSync & Christmas Party Planner',
        description:
            'Interactive web apps for team scheduling, company events, or group activities—complete with shareable links, live voting, or expense trackers.',
        deliverables: [
            'Team shift schedulers and overtime trackers',
            'Interactive event hubs, Secret Santa & wishlists',
            'Live polls, voting boards, and GCash splitters',
            'One-click shareable links for teams and guests',
        ],
        impact: 'Make team coordination and group events simple and stress-free.',
        iconName: 'sparkles',
    },
    {
        id: 'high-converting-websites',
        title: 'Personal, Portfolio & Business Websites',
        tagline: 'Modern, fast, and mobile-ready',
        description:
            'Need a clean website to showcase your business, services, or personal portfolio? I build modern websites that look great on phones and computers.',
        deliverables: [
            'Custom design tailored to your brand colors',
            'Fast loading speed and smooth scrolling',
            'Contact & inquiry forms connected to your email',
            'Help with domain name and web hosting setup',
        ],
        impact: 'Look professional online and make it easy for clients to reach you.',
        iconName: 'rocket',
    },
];

export const TESTIMONIALS: TestimonialItem[] = [
    {
        id: 't1',
        quote: 'Joram built Vela Aroma PH from scratch—from our candle catalog and custom event order form to the admin panel where we check payment proofs. Managing our shop is so much easier now!',
        author: 'Vela Aroma PH',
        role: 'Shop Owner',
        company: 'velaaromaph.jkleonardo.tech',
        projectSlug: 'velaaromaph',
        metricHighlight: 'Online Shop + Admin Panel',
        avatarInitials: 'VA',
    },
    {
        id: 't2',
        quote: 'ShiftSync replaced our confusing schedule spreadsheets. I can set weekly shifts, log overtime, and send one live link to the whole team.',
        author: 'Team Coordinator',
        role: 'Operations',
        company: 'workscheduler.jkleonardo.tech',
        projectSlug: 'workscheduler',
        metricHighlight: 'Easy Shift Scheduling',
        avatarInitials: 'SS',
    },
    {
        id: 't3',
        quote: 'Our Christmas Party website made everything so fun and organized! Everyone loved the Secret Santa codenames, wishlist lookup, live voting, and GCash potluck tracker.',
        author: 'Party Organizers',
        role: 'Event Group',
        company: 'christmasparty.jkleonardo.tech',
        projectSlug: 'christmasparty',
        metricHighlight: 'All-in-One Event App',
        avatarInitials: 'CP',
    },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        step: '01',
        title: 'Chat & Requirements',
        timeline: 'Step 1',
        description:
            'We talk about what you need, who will use the system, and what features are most important to your workflow.',
        deliverables: [
            'Clear list of pages & features',
            'Database & workflow plan',
            'Transparent pricing in ₱ (PHP)',
        ],
    },
    {
        step: '02',
        title: 'UI Design & Layout',
        timeline: 'Step 2',
        description:
            'I create a clean, user-friendly layout matching your style so you can see how the system will look on both phones and computers.',
        deliverables: [
            'Mobile & desktop-friendly design',
            'Easy-to-read layout & navigation',
            'Interactive preview link',
        ],
    },
    {
        step: '03',
        title: 'Development & Testing',
        timeline: 'Step 3',
        description:
            'I build the frontend, backend, and database using Laravel, Vue.js/React, and Tailwind CSS, and share a test link so you can try it out.',
        deliverables: [
            'Working web system & database',
            'Admin dashboard & user roles',
            'Live preview link for your feedback',
        ],
    },
    {
        step: '04',
        title: 'Deployment & Handover',
        timeline: 'Step 4',
        description:
            'Once everything is tested and ready, I deploy the website to your domain and guide you on how to use and manage it.',
        deliverables: [
            'Live deployment & SSL setup',
            'User walkthrough & training',
            'Ongoing technical support',
        ],
    },
];

export const FAQS: FaqItem[] = [
    {
        question: 'Can you build a website with an Admin Panel so I can update it myself?',
        answer: 'Yes! Just like Vela Aroma PH and the systems I have built, I can include a simple Admin Dashboard where you can manage content, products, or requests without touching code.',
    },
    {
        question: 'What types of systems have you built?',
        answer: 'I have developed online stores (Vela Aroma PH), team schedulers (ShiftSync), event apps (Christmas Party Hub), library catalogs (OPAC), project management systems (DOSTv PMS), multimedia archives, and ticketing portals.',
    },
    {
        question: 'How long does it take to finish a website?',
        answer: 'A simple personal or business website usually takes 1 to 2 weeks. Custom web applications with databases and admin dashboards typically take 3 to 6 weeks depending on the features.',
    },
    {
        question: 'Can you also help set up the domain and hosting?',
        answer: 'Definitely! I can help you set up your custom domain, subdomains, SSL certificate, and web hosting so everything is ready to go.',
    },
];
