export interface ProjectItem {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: 'Enterprise System' | 'Online Shop' | 'Web App' | 'Event App' | 'Portal';
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
    liveUrl?: string;
    domainLabel: string;
    repoUrl: string;
    accentFrom: string;
    accentTo: string;
    previewType:
        | 'vela-aroma'
        | 'work-scheduler'
        | 'christmas-party'
        | 'ticketing-portal'
        | 'enterprise-analytics'
        | 'procurement-system'
        | 'multimedia-collection'
        | 'hatian';
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
    subtitle?: string;
    organization: string;
    technologies: string[];
    description: string;
    highlights?: string[];
    liveUrl?: string;
}

export interface ResumeReferenceItem {
    name: string;
    role: string;
    organization: string;
    phone: string;
}

export interface ResumeSkillGroup {
    category: string;
    badge: string;
    skills: string[];
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
        'Detail-oriented Full Stack Web Developer with 6+ years of experience engineering, deploying, and maintaining mission-critical, database-driven information systems, analytics platforms, and custom web applications.',
    resumeSummary:
        'Detail-oriented Full Stack Web Developer with 6+ years of experience engineering, deploying, and maintaining mission-critical, database-driven information systems for government initiatives. Specialized in Object-Oriented Programming (OOP) and modern full-stack architectures utilizing PHP (Laravel), Python (Django 6), Vue 3, React 19, Inertia.js v2, and MySQL. Proven track record of translating complex operational, financial, and institutional workflows into high-concurrency, auditable digital platforms while leveraging AI-assisted development and prompt engineering to accelerate end-to-end software delivery, database administration, and user onboarding.',
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
        { value: '6+ Yrs', label: 'Full-Stack Experience', detail: 'Since 2018 at DOST' },
        { value: '10+', label: 'Systems Engineered', detail: 'Enterprise, Gov & Client' },
        { value: 'Full-Stack', label: 'Laravel • Django • Vue • React', detail: 'Inertia.js v2 & MySQL' },
        { value: '100%', label: 'Audit-Ready & Reliable', detail: 'OOP, RBAC & Pest Tested' },
    ],
    socials: [
        { name: 'GitHub', url: 'https://github.com/joramleonardo', handle: '@joramleonardo' },
        { name: 'Hatian Splitter', url: 'https://hatian.jkleonardo.tech', handle: 'hatian.jkleonardo.tech' },
        { name: 'Ticketing Portal', url: 'https://ticketingportal.jkleonardo.tech', handle: 'ticketingportal.jkleonardo.tech' },
        { name: 'Vela Aroma PH', url: 'https://velaaromaph.jkleonardo.tech', handle: 'velaaromaph.jkleonardo.tech' },
        { name: 'ShiftSync Scheduler', url: 'https://workscheduler.jkleonardo.tech', handle: 'workscheduler.jkleonardo.tech' },
        { name: 'Party Planner Hub', url: 'https://christmasparty.jkleonardo.tech', handle: 'christmasparty.jkleonardo.tech' },
    ],
};

export const RESUME_SKILL_GROUPS: ResumeSkillGroup[] = [
    {
        category: 'Backend Engineering',
        badge: 'PHP & Python',
        skills: [
            'PHP 8.2+',
            'Laravel (v10 / v12)',
            'Python 3.12',
            'Django 6',
            'RESTful APIs',
            'Queued Workflows',
            'Laravel Sanctum',
            'Pest',
            'PHP bcmath',
        ],
    },
    {
        category: 'Frontend Architecture',
        badge: 'Modern Reactive UI',
        skills: [
            'Vue 3',
            'React 19',
            'Inertia.js v2',
            'TypeScript',
            'Tailwind CSS',
            'Unfold',
            'Vite',
            'Axios',
            'Chart.js',
        ],
    },
    {
        category: 'Database & Data Analytics',
        badge: 'Data & Reporting',
        skills: [
            'MySQL',
            'Pandas',
            'Matplotlib',
            'ReportLab',
            'Schema Design',
            'Concurrency Control (Pessimistic Locking)',
            'Query Optimization',
        ],
    },
    {
        category: 'Architecture, AI & Ops',
        badge: 'Systems & Governance',
        skills: [
            'Object-Oriented Programming (OOP)',
            'AI-Assisted Development',
            'Prompt Engineering',
            'Role-Based Access Control (RBAC)',
            'Polymorphic Audit Trails',
            'Google Sheets API',
        ],
    },
];

export const RESUME_EXPERIENCE: ResumeExperienceItem[] = [
    {
        period: 'Mar 2021 – Present',
        role: 'Computer Programmer II',
        organization: 'DOST-STII',
        location: 'Taguig, Metro Manila / Philippines',
        summary:
            'Analyze, design, and implement web-based information systems using object-oriented design patterns and relational database architectures across institutional agency programs.',
        highlights: [
            'Analyze, design, and implement web-based information systems using object-oriented design patterns and relational database architectures across institutional agency programs.',
            'Direct database administration, system customization, staging deployments, and ongoing production maintenance while utilizing AI-assisted workflows and prompt engineering for rapid prototyping, code refactoring, and debugging.',
            'Conduct structured end-user onboarding, technical staff trainings, and Tier-2/3 software troubleshooting support.',
        ],
    },
    {
        period: 'Jan 2020 – Feb 2021',
        role: 'Project Assistant II',
        organization: 'DOST-MIMAROPA',
        location: 'Philippines',
        summary:
            'Supported the regional rollout and hardware distribution of RxBox diagnostic telehealth units to rural health units (RHUs).',
        highlights: [
            'Supported the regional rollout and hardware distribution of RxBox diagnostic telehealth units to rural health units (RHUs).',
            'Liaised between Regional Management Teams (RMT) and local medical personnel, providing operational secretariat and reporting support.',
        ],
    },
    {
        period: 'Jul 2018 – Feb 2021',
        role: 'Computer Maintenance Technologist I / Operator IV',
        organization: 'DOST-STII',
        location: 'Philippines',
        summary:
            'Built and launched an internal Knowledge Management System for documentation retention and institutional retrieval while delivering technical support.',
        highlights: [
            'Built and launched an internal Knowledge Management System for documentation retention and institutional retrieval.',
            'Delivered technical hardware/software support and assisted in database maintenance across department divisions.',
        ],
    },
];

export const RESUME_EDUCATION: ResumeEducationItem[] = [
    {
        period: '2014 – 2018',
        degree: 'Bachelor of Science in Computer Science',
        school: 'De La Salle University - Dasmariñas',
        details:
            'Studied software engineering, object-oriented programming, database systems, systems analysis & design, and full-stack web application development.',
    },
];

export const RESUME_PROJECTS: ResumeProjectItem[] = [
    {
        title: 'Enterprise Operations & Analytics System',
        subtitle: 'Full-Stack Analytics & Reporting Platform',
        organization: 'Enterprise / Institutional',
        technologies: [
            'Python 3.12',
            'Django 6',
            'Tailwind CSS / Unfold',
            'Pandas',
            'Matplotlib',
            'ReportLab',
        ],
        description:
            'Full-stack enterprise analytics and reporting system featuring longitudinal Year-to-Date (YTD) utilization tracking, executive dashboards, cross-tabulated workforce compliance matrices, and audit-ready PDF/Excel export pipelines.',
        highlights: [
            'Engineered a full-stack enterprise analytics and reporting system featuring longitudinal Year-to-Date (YTD) utilization tracking and executive dashboards.',
            'Developed cross-tabulated workforce compliance matrices using Pandas and automated visual diagnostics powered by Matplotlib.',
            'Built audit-ready document generation and reporting export pipelines supporting both PDF (ReportLab) and Excel formats.',
        ],
    },
    {
        title: 'IT Ticketing Management System',
        subtitle: 'Full-Stack Operational Workflow Platform',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'Vue 3',
            'Inertia.js v2',
            'Pest',
            'MySQL',
            'Tailwind CSS',
            'Chart.js',
            'Google Sheets API',
        ],
        description:
            'Centralized operational workflow system featuring a public request portal, role-based internal administrative dashboard, real-time SLA and turnaround time (TAT) tracking, and Google Sheets compliance auditing.',
        highlights: [
            'Engineered a centralized operational workflow system featuring a public request portal and a role-based internal administrative dashboard.',
            'Architected real-time SLA and turnaround time (TAT) tracking mechanisms with closed-loop threaded notifications for issue resolution.',
            'Built an automated third-party compliance auditing pipeline via Google Sheets API synchronization and interactive analytics with Chart.js.',
            'Guaranteed regression-free feature deployment and endpoint reliability through automated test coverage using Pest.',
        ],
        liveUrl: 'https://ticketingportal.jkleonardo.tech',
    },
    {
        title: 'Procurement Management System',
        subtitle: 'Financial Governance & Requisition Platform',
        organization: 'Enterprise / Institutional',
        technologies: [
            'Laravel 12',
            'React 19',
            'Inertia.js v2',
            'TypeScript',
            'Tailwind CSS',
            'MySQL',
            'PHP bcmath',
        ],
        description:
            'Enterprise financial governance platform supporting multi-tier requisition workflows, zero-drift fiscal utilization tracking with PHP bcmath, concurrency-safe pessimistic locking, and polymorphic audit logging.',
        highlights: [
            'Developed an enterprise financial governance platform supporting multi-tier requisition workflows and approval pipelines.',
            'Implemented zero-drift fiscal and budget utilization tracking utilizing PHP bcmath for exact-precision arithmetic calculations.',
            'Secured financial ledger consistency against race conditions during peak submission windows using concurrency-safe pessimistic locking.',
            'Constructed HIPAA-aligned polymorphic audit logging across state changes, milestone approvals, and administrative actions.',
        ],
    },
    {
        title: 'DOST Multimedia Collection (DMC) System',
        subtitle: 'Enterprise Asset & Publishing Repository',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'Vue 3',
            'Inertia.js v2',
            'MySQL',
            'Tailwind CSS',
            'Laravel Sanctum',
            'Pest',
            'Chart.js',
        ],
        description:
            'Role-based digital asset repository with multi-tier RBAC workflows (Author, Reviewer, Publisher), transactional bulk media upload pipelines, administrative audit logging, and public discovery dashboards.',
        highlights: [
            'Architected a role-based digital asset repository with multi-tier RBAC workflows (Author, Reviewer, Publisher) and gate validation.',
            'Engineered transactional bulk media upload and processing pipelines to reliably ingest high-resolution event media.',
            'Implemented detailed administrative audit logging to record rights updates, editorial revisions, and publishing status changes.',
            'Built a public search and discovery interface accompanied by real-time visualization dashboards monitoring media reach.',
        ],
    },
    {
        title: 'DOST-STII Library Online Public Access Catalog (OPAC)',
        subtitle: 'SciNET-PHIL Union Catalog Platform',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'React',
            'TypeScript',
            'Inertia.js',
            'Tailwind CSS',
            'MySQL',
            'Vite',
        ],
        description:
            'A web-based Online Public Access Catalog for the DOST SciNET-PHIL union catalog, allowing researchers and citizens to search and browse library materials across DOST libraries and information centers.',
    },
    {
        title: 'DOSTv Project Management System',
        subtitle: 'Broadcast Production Lifecycle Platform',
        organization: 'DOST-STII',
        technologies: [
            'Laravel 10',
            'PHP 8.2',
            'Vue 3',
            'Inertia.js',
            'MySQL',
            'Tailwind CSS',
            'Vite',
            'Axios',
            'Chart.js',
        ],
        description:
            'A web-based system that manages the full lifecycle of TV production projects, including project setup, task assignment, progress tracking, file submission, review, and monitoring.',
    },
    {
        title: 'Hatian — Smart Group Order & Bill Splitter',
        subtitle: 'Group Expense & Multi-Channel Payment Hub',
        organization: 'Personal / Open-Source Product',
        technologies: [
            'Laravel 11',
            'PHP 8.2',
            'React 19',
            'Inertia.js v2',
            'TypeScript',
            'Tailwind CSS v4',
            'MySQL',
        ],
        description:
            'A modern, transparent, and mobile-friendly group expense and bill-splitting web application featuring proportional group discounts, delivery fee distribution, receipt uploads, Philippine digital payment hubs with QR codes, and proof verification.',
        highlights: [
            'Engineered proportional mathematical breakdown algorithms distributing fixed/percentage vouchers and delivery fees fairly based on individual spend.',
            'Architected zero-barrier guest split workflows with secure cookie edit tokens and seamless account-claim migrations.',
            'Integrated multi-channel payment hub supporting 9+ Philippine digital wallets & banks with interactive QR code modals.',
            'Built high-performance payment proof upload pipelines featuring client-side canvas compression for instantaneous mobile uploads.',
        ],
        liveUrl: 'https://hatian.jkleonardo.tech',
    },
];

export const RESUME_REFERENCES: ResumeReferenceItem[] = [
    {
        name: 'Chester Francisco',
        role: 'Information Technology Officer II',
        organization: 'DOST-STII',
        phone: '0966 970 9726',
    },
    {
        name: 'Etienne Wayne Amparado',
        role: 'Science Research Specialist II',
        organization: 'DOST-STII',
        phone: '0970 610 2876',
    },
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'enterprise-operations-analytics',
        slug: 'enterprise-analytics',
        title: 'Enterprise Operations & Analytics System',
        subtitle: 'Full-Stack Analytics & Reporting Platform',
        category: 'Enterprise System',
        featured: true,
        year: '2026',
        client: 'Enterprise Operations',
        role: 'Full Stack Web Developer',
        duration: 'Production Platform',
        impactMetric: 'YTD Analytics',
        impactLabel: '& PDF/Excel Exports',
        secondaryMetric: 'Django 6 + Pandas',
        description:
            'A full-stack enterprise analytics and reporting platform featuring longitudinal Year-to-Date (YTD) utilization tracking, executive dashboards, cross-tabulated workforce compliance matrices, and audit-ready PDF/Excel export pipelines.',
        challenge:
            'Consolidating longitudinal workforce utilization and compliance metrics across departments manually in spreadsheets delayed executive reporting and audit readiness.',
        solution:
            'Engineered an integrated analytics platform using Python 3.12, Django 6, and Unfold with Pandas cross-tabulation, Matplotlib visual diagnostics, and automated ReportLab PDF & Excel export pipelines.',
        results: [
            'Engineered a full-stack enterprise analytics and reporting system featuring longitudinal Year-to-Date (YTD) utilization tracking and executive dashboards',
            'Developed cross-tabulated workforce compliance matrices using Pandas and automated visual diagnostics powered by Matplotlib',
            'Built audit-ready document generation and reporting export pipelines supporting both PDF (ReportLab) and Excel formats',
        ],
        technologies: [
            'Python 3.12',
            'Django 6',
            'Tailwind CSS / Unfold',
            'Pandas',
            'Matplotlib',
            'ReportLab',
        ],
        domainLabel: 'Enterprise Analytics • Django 6',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-emerald-600',
        accentTo: 'to-cyan-500',
        previewType: 'enterprise-analytics',
    },
    {
        id: 'ticketing-portal',
        slug: 'ticketingportal',
        title: 'IT Ticketing Management System',
        subtitle: 'Full-Stack Operational Workflow Platform',
        category: 'Portal',
        featured: true,
        year: '2026',
        client: 'DOST-STII / Support Operations',
        role: 'Full Stack Web Developer',
        duration: 'Live Web App',
        impactMetric: 'Real-Time SLA',
        impactLabel: '& TAT Workflow',
        secondaryMetric: 'Pest Tested + Sheets Sync',
        description:
            'A centralized operational workflow system featuring a public request portal, a role-based internal administrative dashboard, real-time SLA and turnaround time (TAT) tracking, and automated Google Sheets compliance auditing.',
        challenge:
            'Service requests scattered across manual messages and forms made it difficult to enforce SLAs, monitor turnaround times (TAT), and maintain third-party compliance logs.',
        solution:
            'Built a full-stack operational workflow platform using Laravel 12, PHP 8.2, Vue 3, and Inertia.js v2 with closed-loop threaded notifications, Google Sheets API synchronization, Chart.js analytics, and Pest automated tests.',
        results: [
            'Engineered a centralized operational workflow system featuring a public request portal and a role-based internal administrative dashboard',
            'Architected real-time SLA and turnaround time (TAT) tracking mechanisms with closed-loop threaded notifications for issue resolution',
            'Built an automated third-party compliance auditing pipeline via Google Sheets API synchronization and interactive analytics with Chart.js',
            'Guaranteed regression-free feature deployment and endpoint reliability through automated test coverage using Pest',
        ],
        technologies: [
            'Laravel 12',
            'PHP 8.2',
            'Vue 3',
            'Inertia.js v2',
            'Pest',
            'MySQL',
            'Tailwind CSS',
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
    {
        id: 'hatian-bill-splitter',
        slug: 'hatian',
        title: 'Hatian — Smart Bill & Pasabuy Splitter',
        subtitle: 'Smart Group Order, Pasabuy & Barkada Bill Splitter',
        category: 'Web App',
        featured: true,
        year: '2026',
        client: 'Barkada Dining & Group Pasabuy',
        role: 'Full Stack Web Developer',
        duration: 'Live Web App',
        impactMetric: 'Smart Splits',
        impactLabel: '& Payment Hub',
        secondaryMetric: 'Zero Signup + GCash/Maya QR',
        description:
            'A modern, transparent, and mobile-friendly group expense and bill-splitting web app built for barkada dining, GrabFood / Foodpanda group orders, overseas pasabuys, and shared trips. Features automatic proportional voucher discounts, delivery fee splitting, receipt attachments, and an all-in-one Philippine payment hub with QR codes.',
        challenge:
            'When splitting group food orders or shopping pasabuys, distributing promo vouchers (e.g. ₱150 OFF) and delivery fees fairly is frustrating, while chasing payments and asking "Magkano akin?" or "Saan magbabayad?" creates constant group chat friction.',
        solution:
            'I built Hatian with Laravel 11, React 19, Inertia.js v2, and Tailwind CSS to automatically calculate proportional discounts, generate zero-barrier shareable guest links, support up to 5 order receipt uploads, and provide an all-in-one payment hub with GCash, Maya, bank details, QR codes, and proof verification.',
        results: [
            'Fair mathematical breakdown distributing percentage or fixed-amount vouchers and delivery fees proportionally',
            'Zero-signup guest creation with secure edit tokens and instant mobile link sharing',
            'Order receipt upload pipeline supporting up to 5 high-resolution bill screenshots with lightbox inspection',
            'Multi-channel payment hub (GCash, Maya, GoTyme, BPI, BDO) with instant copy and QR code modals',
            'Mandatory payment screenshot proof upload featuring client-side canvas compression for mobile data savings',
            'Optional user accounts with automatic claiming of past guest splits and settlement analytics dashboards',
        ],
        technologies: [
            'Laravel 11',
            'React 19',
            'Inertia.js v2',
            'TypeScript',
            'Tailwind CSS v4',
            'MySQL',
        ],
        liveUrl: 'https://hatian.jkleonardo.tech',
        domainLabel: 'hatian.jkleonardo.tech',
        repoUrl: 'https://github.com/joramleonardo/hatian',
        accentFrom: 'from-amber-600',
        accentTo: 'to-teal-500',
        previewType: 'hatian',
    },
    {
        id: 'procurement-management-system',
        slug: 'procurement-system',
        title: 'Procurement Management System',
        subtitle: 'Financial Governance & Requisition Platform',
        category: 'Enterprise System',
        featured: true,
        year: '2026',
        client: 'Financial Governance & Operations',
        role: 'Full Stack Web Developer',
        duration: 'Enterprise Platform',
        impactMetric: 'Zero-Drift',
        impactLabel: 'bcmath Ledger',
        secondaryMetric: 'Pessimistic Locking + Audit',
        description:
            'An enterprise financial governance platform supporting multi-tier requisition workflows and approval pipelines with exact-precision PHP bcmath budget tracking, concurrency-safe pessimistic locking, and HIPAA-aligned polymorphic audit trails.',
        challenge:
            'High-concurrency budget submissions and multi-tier requisition approvals risked floating-point drift, race conditions during peak windows, and incomplete compliance trails.',
        solution:
            'Architected a financial governance system with Laravel 12, React 19, Inertia.js v2, and TypeScript utilizing PHP bcmath for exact arithmetic, database pessimistic locking, and polymorphic audit logging.',
        results: [
            'Developed an enterprise financial governance platform supporting multi-tier requisition workflows and approval pipelines',
            'Implemented zero-drift fiscal and budget utilization tracking utilizing PHP bcmath for exact-precision arithmetic calculations',
            'Secured financial ledger consistency against race conditions during peak submission windows using concurrency-safe pessimistic locking',
            'Constructed HIPAA-aligned polymorphic audit logging across state changes, milestone approvals, and administrative actions',
        ],
        technologies: [
            'Laravel 12',
            'React 19',
            'Inertia.js v2',
            'TypeScript',
            'Tailwind CSS',
            'MySQL',
            'PHP bcmath',
        ],
        domainLabel: 'Financial Governance • React 19',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-amber-500',
        accentTo: 'to-violet-600',
        previewType: 'procurement-system',
    },
    {
        id: 'dost-multimedia-collection',
        slug: 'dost-multimedia-collection',
        title: 'DOST Multimedia Collection (DMC) System',
        subtitle: 'Enterprise Asset & Publishing Repository',
        category: 'Enterprise System',
        featured: true,
        year: '2026',
        client: 'DOST-STII',
        role: 'Full Stack Web Developer',
        duration: 'Institutional Repository',
        impactMetric: 'Multi-Tier RBAC',
        impactLabel: 'Asset Repository',
        secondaryMetric: 'Bulk Media + Reach Analytics',
        description:
            'A role-based digital asset repository with multi-tier RBAC workflows (Author, Reviewer, Publisher), transactional bulk media upload pipelines, detailed administrative audit logging, and public discovery dashboards.',
        challenge:
            'Managing thousands of high-resolution institutional event photos and videos required strict editorial gate validation, rights tracking, and reliable bulk ingestion.',
        solution:
            'Engineered the DOST Multimedia Collection (DMC) System on Laravel 12, Vue 3, and Inertia.js v2 with multi-tier RBAC workflows, transactional media processing, audit trails, and Chart.js reach visualizations.',
        results: [
            'Architected a role-based digital asset repository with multi-tier RBAC workflows (Author, Reviewer, Publisher) and gate validation',
            'Engineered transactional bulk media upload and processing pipelines to reliably ingest high-resolution event media',
            'Implemented detailed administrative audit logging to record rights updates, editorial revisions, and publishing status changes',
            'Built a public search and discovery interface accompanied by real-time visualization dashboards monitoring media reach',
        ],
        technologies: [
            'Laravel 12',
            'Vue 3',
            'Inertia.js v2',
            'MySQL',
            'Tailwind CSS',
            'Laravel Sanctum',
            'Pest',
            'Chart.js',
        ],
        domainLabel: 'DOST-STII • DMC Repository',
        repoUrl: 'https://github.com/joramleonardo',
        accentFrom: 'from-fuchsia-600',
        accentTo: 'to-indigo-500',
        previewType: 'multimedia-collection',
    },
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
];

export const SERVICES: ServiceItem[] = [
    {
        id: 'custom-web-apps',
        title: 'Custom Web Systems & Information Portals',
        tagline: 'Like Enterprise Analytics, Procurement, DMC & Ticketing Systems',
        description:
            'Need a custom web system for your organization or team? I design and build database-driven web applications, analytics dashboards, and workflow platforms tailored to your daily operations.',
        deliverables: [
            'Role-based dashboards (RBAC) for admins, reviewers, staff, and clients',
            'Analytics, YTD reporting, PDF/Excel exports, and audit trails',
            'Automated email notifications, SLA tracking, and API integrations',
            'Clean, high-concurrency architecture that works on any device',
        ],
        impact: 'Turn manual paperwork and spreadsheets into an auditable web platform.',
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
        tagline: 'Like Hatian, ShiftSync & Christmas Party Planner',
        description:
            'Interactive web apps for team scheduling, company events, or group activities—complete with shareable links, live voting, or expense trackers.',
        deliverables: [
            'Group bill splitters, pasabuy calculators & payment hubs',
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
            'I build the frontend, backend, and database using Laravel (PHP) or Django (Python), Vue 3/React 19, Inertia.js, and Tailwind CSS, and share a test link so you can try it out.',
        deliverables: [
            'Working web system & database',
            'Admin dashboard, RBAC & audit trails',
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
        answer: 'Yes! Just like Vela Aroma PH and the enterprise systems I have built, I include role-based Admin Dashboards where you can manage content, products, approvals, or requests without touching code.',
    },
    {
        question: 'What types of systems have you built?',
        answer: 'I have engineered enterprise operations & analytics platforms (Django 6 / Pandas / ReportLab), procurement & financial governance systems, IT ticketing portals, smart group bill & pasabuy splitters (Hatian), multimedia asset repositories (DOST DMC), online stores (Vela Aroma PH), team schedulers (ShiftSync), event apps (Christmas Party Hub), library catalogs (OPAC), and broadcast project management systems (DOSTv PMS).',
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
