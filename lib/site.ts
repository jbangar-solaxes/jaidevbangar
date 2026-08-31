export const site = {
  name: "Jaidev Bangar",
  title: "Sr. Software Engineer / Full Stack Engineer",
  location: "Jalandhar, Punjab, India",
  url: "https://jaidevbangar.info",
  email: "jaidev.bangar@gmail.com",
  phone: "+91-90410-79638",
  phoneHref: "tel:+919041079638",
  linkedin: "https://www.linkedin.com/in/jaidevbangar",
  github: "https://github.com/solaxes",
  twitter: "https://x.com/jaidev_bangar",
  twitterHandle: "@jaidev_bangar",
  wordpress: "https://profiles.wordpress.org/solaxes/",
  resumeHref: "/jaidev-bangar-resume.pdf",
  years: "18+",
  summary:
    "Full-stack engineer with 18+ years of experience building and running web applications for startups, agencies, and product companies.",
  intro:
    "I'm Jaidev Bangar, a senior full-stack engineer in Jalandhar, Punjab. I build and run web applications for startups and product companies — from first plan through production.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resume", label: "Resume (CV)" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const experience = [
  {
    company: "Share A Refund",
    role: "Sr. Software Engineer (Edge Dev)",
    period: "2024 — Present",
    href: "https://www.sharearefund.com",
    summary:
      "I own Laravel and Vue.js work on Share A Refund, a SaaS platform that finds carrier billing errors and files refund claims for parcel and freight spend.",
    points: [
      "Build and extend Laravel modules with a Vue.js frontend.",
      "Update existing product code while keeping the platform stable for production traffic.",
      "Work as part of the engineering team on a multi-region product used by growing logistics businesses.",
    ],
  },
  {
    company: "eStack LLC",
    role: "Technical Lead & Sr. Engineer",
    period: "2019 — 2024",
    href: "https://www.estack.com",
    summary:
      "I led architecture and delivery for a complex multi-tenant application built on Zend Framework 2.",
    points: [
      "Supervised architecture, interface improvements, and security updates across a multi-tenant product.",
      "Handled server management, module development, API integration, and system design.",
      "Integrated sales-channel and fulfillment work including Shopify, Amazon SP-API, eBay, and shipping-label generation.",
    ],
  },
  {
    company: "Upwork",
    role: "Full Stack Developer — Top Rated Plus",
    period: "2015 — 2019",
    summary:
      "I took freelance projects from first conversation through production, including work with complex architecture.",
    points: [
      "Owned planning, development, deployment, and maintenance for small and large engagements.",
      "Worked directly with clients on scope, quality, and delivery dates.",
      "Delivered web applications across PHP frameworks and modern JavaScript frontends.",
    ],
  },
  {
    company: "KAP IT Solutions",
    role: "Web Engineer",
    period: "2013 — 2015",
    summary:
      "I worked with project managers, developers, and clients to design and ship performant web solutions.",
    points: [
      "Trained junior developers in PHP, WordPress, and Symfony.",
      "Reviewed project specifications and helped raise team delivery quality.",
      "Designed solutions that met client needs for performance and reliability.",
    ],
  },
  {
    company: "Cogniter Technologies",
    role: "Sr. Engineer",
    period: "2010 — 2013",
    summary:
      "I helped plan delivery, adjusted project plans, and worked with vendors and contractors.",
    points: [
      "Managed the IT team and day-to-day technical direction.",
      "Trained developers in CodeIgniter, WordPress, and PHP.",
    ],
  },
  {
    company: "Web-X Vision",
    role: "Software Engineer",
    period: "2008 — 2010",
    summary:
      "I worked as a standalone developer and delivered small web applications end to end.",
    points: [
      "Gathered requirements, designed interfaces, built backends, and managed databases.",
      "Tested, deployed, documented, and maintained releases.",
      "Spoke with clients, prioritized work, and shipped iterative releases on time.",
    ],
  },
];

export const education = [
  {
    school: "Punjab Technical University",
    credential: "Master of Computer Applications",
    period: "2005 — 2007",
  },
  {
    school: "Punjab Technical University",
    credential: "B.Sc. Computer Science",
    period: "2003 — 2005",
  },
  {
    school: "Punjab State Board of Technical Education & Industrial Training",
    credential: "Diploma in Electrical Engineering",
    period: "1996 — 1999",
  },
];

export const skillGroups = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "Symfony", "CakePHP", "CodeIgniter", "Zend / Laminas", "Node.js", "WordPress"],
  },
  {
    label: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Nuxt.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Data & infrastructure",
    items: ["MySQL", "RDBMS", "NoSQL", "Redis", "AWS", "Linux", "Ubuntu", "Server management"],
  },
  {
    label: "Practice",
    items: ["APIs", "Git", "GitHub", "GitLab", "Gitflow", "DSA"],
  },
];

export const languages = ["English", "Hindi", "Punjabi"];

export const socials = [
  { label: "GitHub", href: site.github, kind: "github" as const },
  { label: "LinkedIn", href: site.linkedin, kind: "linkedin" as const },
  { label: "X", href: site.twitter, kind: "x" as const },
  { label: "WordPress", href: site.wordpress, kind: "wordpress" as const },
  { label: "Email", href: `mailto:${site.email}`, kind: "email" as const },
];

export const rotatingTitles = [
  "Full Stack Engineer",
  "Technical Lead",
  "Laravel Specialist",
  "WordPress Developer",
  "Project Manager",
  "AI Engineer",
];

export const serviceProcess = [
  { title: "Understand first", detail: "Read the product, the code, and the people who use it." },
  { title: "Plan the work", detail: "Scope, architecture, and a path that does not break production." },
  { title: "Build and improve", detail: "New modules and careful updates on systems that are already live." },
  { title: "Run and hand over", detail: "Deploys, servers, and a quiet release the team can keep." },
];

export const services = [
  {
    number: "01",
    title: "Full Stack Development",
    eyebrow: "End to end",
    summary:
      "End-to-end web applications in PHP, Laravel, React, Vue, and Next.js — from first plan to production.",
    tags: ["PHP", "Laravel", "React", "Vue.js", "Next.js"],
  },
  {
    number: "02",
    title: "Architecture & Design",
    eyebrow: "Long-lived systems",
    summary:
      "Multi-tenant systems, module structure, and long-lived code that can take new work without falling over.",
    tags: ["Multi-tenant", "Zend Framework", "Modules", "System design"],
  },
  {
    number: "03",
    title: "APIs & Integrations",
    eyebrow: "Sales channels",
    summary:
      "Shopify, Amazon SP-API, eBay, shipping, and custom APIs wired into the products that depend on them.",
    tags: ["Shopify", "Amazon SP-API", "eBay", "Shipping"],
  },
  {
    number: "04",
    title: "Laravel & Vue.js",
    eyebrow: "Live products",
    summary:
      "New modules and careful updates on live Laravel and Vue products, including Share A Refund.",
    tags: ["Laravel", "Vue.js", "SaaS", "Production"],
  },
  {
    number: "05",
    title: "Cloud & Servers",
    eyebrow: "Operations",
    summary:
      "AWS, Linux, and Ubuntu operations: deploys, security updates, and the day-to-day of keeping systems up.",
    tags: ["AWS", "Linux", "Ubuntu", "Deploys"],
  },
  {
    number: "06",
    title: "Leadership & Delivery",
    eyebrow: "Project ownership",
    summary:
      "Technical direction, mentoring in PHP and JavaScript, and owning a project through to a quiet release.",
    tags: ["Technical lead", "Mentoring", "Planning", "Delivery"],
  },
];

export const serviceEngagements = [
  {
    title: "Engineering",
    eyebrow: "Project-based",
    summary:
      "Build, extend, or modernise a production web application — PHP, Laravel, Vue, React, or Next.js.",
  },
  {
    title: "Existing systems",
    eyebrow: "Live products",
    summary:
      "Add modules, fix architecture, or take over a codebase that is already serving traffic.",
  },
  {
    title: "A conversation",
    eyebrow: "Contact",
    summary:
      "Write if you want to talk about scope, a Laravel and Vue product, or a system that needs a steady owner.",
  },
];

export const stats = [
  { value: "18+", label: "Years of experience" },
  { value: "100s", label: "Projects delivered" },
];

export const facts = [
  { label: "Current role", value: "Sr. Software Engineer, Share A Refund" },
  { label: "Experience", value: `${site.years} years in web application development` },
  { label: "Location", value: "Jalandhar, Punjab, India" },
  { label: "Focus", value: "Laravel, Vue.js, React, Next.js, PHP" },
  { label: "Languages", value: "English, Hindi, Punjabi" },
  { label: "Working style", value: "End-to-end ownership, from plan to production" },
  { label: "Strengths", value: "Architecture, APIs, server management, mentoring" },
  { label: "Interests", value: "Programming, system design, cricket" },
];

export const projects = [
  {
    title: "Share A Refund",
    period: "2024 — Present",
    href: "https://www.sharearefund.com",
    category: "Product",
    summary:
      "SaaS platform that audits parcel and freight invoices, finds carrier errors, and files refund claims. I handle Laravel and Vue.js development, including new modules and updates to existing product code.",
    tags: ["Laravel", "Vue.js", "SaaS"],
  },
  {
    title: "eStack",
    period: "2019 — 2024",
    href: "https://www.estack.com",
    category: "Product",
    summary:
      "Multi-tenant operations platform built on Zend Framework 2. I led architecture, security updates, server management, module development, and API design, including Shopify, Amazon SP-API, eBay, and shipping-label flows.",
    tags: ["Zend Framework 2", "APIs", "Multi-tenant"],
  },
  {
    title: "NRI Soch",
    period: "Client work",
    category: "Application",
    summary:
      "Custom Symfony application delivered as a complete web project, from implementation through deployment.",
    tags: ["Symfony", "PHP"],
  },
  {
    title: "Quebec social platform",
    period: "Client work",
    category: "Application",
    summary:
      "Symfony-based social product built for a Canadian client in the Quebec region.",
    tags: ["Symfony", "PHP"],
  },
  {
    title: "Burnaby Dental Group",
    period: "Client work",
    href: "https://burnabydentalgroup.com",
    category: "Web",
    summary:
      "Practice website for a dental group, delivered as part of broader client engineering work.",
    tags: ["Web", "PHP"],
  },
  {
    title: "Payzoff",
    period: "Client work",
    href: "https://payzoff.com",
    category: "Web",
    summary:
      "Web application work for a payments-facing product.",
    tags: ["Web", "PHP"],
  },
  {
    title: "Naveen Chopra",
    period: "Client work",
    href: "https://chopranaveen.com",
    category: "Web",
    summary:
      "Practice website for Naveen Chopra, a psychologist and life coach in Jalandhar. The site covers counselling for adults and children, NLP and life-skills work, and his work with the Indian Air Force and Punjab government programmes including Tandarust Punjab and Mission Samvad.",
    tags: ["WordPress", "Web"],
  },
  {
    title: "Ravidassia Dharam",
    period: "Client work",
    href: "https://ravidassiadharam.com",
    category: "Web",
    summary:
      "Community website for Ravidassia Dharam, presenting the faith and teachings of Guru Ravidass for devotees and visitors.",
    tags: ["Web"],
  },
  {
    title: "Arvihome",
    period: "Client work",
    href: "https://arvihome.com",
    category: "Web",
    summary:
      "Site for Arvihome, a China-based interior and furniture sourcing studio. It presents turnkey villa, hotel, and healthcare furnishing — furniture, lighting, rugs, and custom pieces — for designers and developers.",
    tags: ["Web"],
  },
  {
    title: "Mission Discovery",
    period: "Client work",
    href: "https://missiondiscovery.in",
    category: "Web",
    summary:
      "Website for Mission Discovery, a private investigation agency in Chandigarh staffed by retired police and intelligence investigators. It covers personal, corporate, and criminal investigation services across India.",
    tags: ["Web"],
  },
  {
    title: "Slum Doctor",
    period: "Client work",
    href: "https://slumdoctor.co.uk",
    category: "Web",
    summary:
      "Charity website for the Slumdoctor Project (UK charity 1140318). Volunteers from the UK run free medical camps in India, including Phillaur in Punjab, with donations going to medicines, treatment, and education.",
    tags: ["PHP", "Web"],
  },
  {
    title: "WordPress & CodeIgniter client work",
    period: "Upwork",
    category: "Web",
    summary:
      "Through Upwork I delivered hundreds of WordPress and CodeIgniter sites for clients — small business sites, custom modules, and ongoing updates — from first brief through launch and maintenance.",
    tags: ["WordPress", "CodeIgniter", "Upwork"],
  },
  {
    title: "Tribuuts",
    period: "Client work",
    href: "https://tribuuts.com",
    category: "Web",
    summary:
      "Client website and application work delivered end to end.",
    tags: ["Web"],
  },
  {
    title: "NGC Middle East",
    period: "Client work",
    href: "https://www.ngcmiddleeast.com",
    category: "Web",
    summary:
      "Business website delivered during agency and freelance engagements.",
    tags: ["Web"],
  },
  {
    title: "Homtu",
    period: "Client work",
    href: "https://www.homtu.in",
    category: "Web",
    summary:
      "Web property built and maintained as part of client delivery work.",
    tags: ["Web"],
  },
  {
    title: "Solaxes",
    period: "Client work",
    href: "https://www.solaxes.com",
    category: "Web",
    summary:
      "Company site and related engineering work.",
    tags: ["Web"],
  },
  {
    title: "ATB World",
    period: "Client work",
    href: "https://www.atb.world",
    category: "Web",
    summary:
      "Web presence delivered for an international client.",
    tags: ["Web"],
  },
];

export const posts = [
  {
    title: "Why Hire Dedicated WordPress Developer for Your Business in 2026?",
    date: "18 Jul 2026",
    category: "WordPress",
    href: "https://solaxes.com/hire-dedicated-wordpress-developer/",
    summary:
      "When a WordPress site starts taking too much time or breaking in production, one dedicated developer is more reliable than a new freelancer for every fix. This piece covers when that hire makes sense, what they actually do, and how to keep ownership of your accounts.",
  },
  {
    title: "Laravel: Mastering Background Jobs for Smoother Applications",
    date: "27 Oct 2025",
    category: "Laravel",
    href: "https://technicaljai.com/laravel-masterig-background-jobs-for-smoother-applications/",
    summary:
      "Move emails, PDFs, imports, and API work off the request so Laravel apps stay fast. The post covers queue drivers, workers, Horizon, chains and batches, and how to write jobs that are safe to retry.",
  },
];
