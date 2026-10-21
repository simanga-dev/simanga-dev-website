type Project = {
  name: string
  description: string
  link: string
  repository: string
  technologies: string[]
  status?: string
  hidden?: boolean
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Matric Dashboard',
    description:
      'I am building a dashboard to explore South African matric results by school, subject, and region, with interactive maps and historical pass rates. Python scripts import DBE reports into PostgreSQL, and an ASP.NET Core API serves the SvelteKit frontend.',
    link: 'https://matrictrend.app/overview?school=600100219&open=eyJwIjpbIk5PUlRIIFdFU1QiXSwiYyI6W1siTk9SVEggV0VTVCIsIkRSLiBSLlMuIE1PTVBBVEkiXV19',
    image: {
      src: '/matric-dashboard.webp',
      alt: 'Matric Dashboard showing the school browser, an interactive map of Bray Intermediate School, and its NSC pass rate history.',
      width: 1440,
      height: 1000,
    },
    repository: 'https://github.com/simanga-dev/matric-dashboard',
    technologies: [
      '.NET 10',
      'SvelteKit',
      'TypeScript',
      'PostgreSQL / PostGIS',
      'Python',
      'Docker',
    ],
    status: 'In progress',
    id: 'project3',
  },
  {
    name: 'Carpentry Shop',
    description:
      'A carpentry order-tracking application built with Razor Pages and Entity Framework Core. Includes registration, sign-in, and an authenticated admin page for managing orders, with Docker images published through GitHub Actions.',
    link: 'https://carpentry.simanga.dev',
    image: {
      src: '/carpentry-homepage.png',
      alt: 'Carpentry Shop homepage with a wooden box diagram and an order form for box dimensions and customer details.',
      width: 1920,
      height: 1080,
    },
    repository: 'https://github.com/simanga-dev/carpentry-shop',
    technologies: ['ASP.NET Core', 'Razor Pages', 'PostgreSQL', 'Docker'],
    id: 'project4',
  },
  {
    name: 'Angular / .NET API demo',
    hidden: true,
    description:
      'An Angular client connected to an ASP.NET Core API using HttpClient, with response mapping and error handling. The client and API run in Docker, with Nginx serving the frontend.',
    link: 'https://github.com/simanga-dev/Angular-MS-Auth',
    repository: 'https://github.com/simanga-dev/Angular-MS-Auth',
    technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'Docker', 'Nginx'],
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Express Employment Professionals',
    title: 'Software Engineer',
    start: 'Aug 2023',
    end: 'Present',
    description:
      'Deliver and support SaaS and financial systems for SME clients using C#, ASP.NET Core, and SQL Server. Build REST APIs and microservices, tune database queries and indexes, and maintain Azure DevOps pipelines with automated tests and security scanning.',
    id: 'work1',
  },
  {
    company: 'Kriterion AI',
    title: 'Junior Software Engineer',
    start: 'Mar 2021',
    end: 'Aug 2023',
    description:
      'Built SaaS features with .NET 6, ASP.NET Core, and React. Integrated third-party REST APIs and automated builds, deployments, and tests with GitHub Actions. Worked with UX, API, and security teams on implementation and code review.',
    id: 'work2',
  },
  {
    company: 'Copalcor (PTY)',
    title: 'Software Developer Intern',
    start: 'Jan 2020',
    end: 'Mar 2021',
    description:
      'Built and supported production business systems in C#, ASP.NET, and SQL Server during my industrial attachment. Migrated legacy applications to newer .NET frameworks and supported unit and integration testing.',
    id: 'work3',
  },
]

export const SKILLS = [
  {
    label: 'Languages',
    description: 'C#, TypeScript, JavaScript, SQL, Python, Java',
  },
  {
    label: 'Web development',
    description: '.NET, ASP.NET Core, React, Angular, Node.js, HTML, CSS',
  },
  {
    label: 'Data and cloud',
    description:
      'SQL Server, PostgreSQL, MySQL, DynamoDB, REST APIs, Azure, AWS, Docker',
  },
  {
    label: 'Delivery and tools',
    description:
      'Git, Azure DevOps pipelines, GitHub Actions, GitHub Copilot, Cursor, Claude Code',
  },
]

export const CERTIFICATIONS = [
  {
    name: 'Microsoft Certified: DevOps Engineer Expert',
    exam: 'AZ-400',
    issued: 'Aug 2021',
    link: 'https://cutt.ly/DRI8NYP',
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    exam: 'AZ-204',
    issued: 'Jun 2021',
    link: 'https://cutt.ly/tRI4WYo',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    exam: 'AZ-900',
    issued: 'Mar 2021',
    link: 'https://cutt.ly/sRI3GgJ',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/simanga-dev',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/simanga/',
  },
  {
    label: 'Website',
    link: 'https://simanga.dev/',
  },
]

export const EMAIL = 'h3khoza@gmail.com'
