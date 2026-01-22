type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Matric Dashboard',
    description:
      'Data dashboard to visualize South African education metrics using Python and PostgreSQL.',
    link: 'https://matric.simanga.dev',
    id: 'project3',
  },
  {
    name: 'Carpentry Shop',
    description:
      'Cross-platform user management system using ASP.NET Core and PostgreSQL.',
    link: 'https://carpentry.simanga.dev',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Express Employment Professionals',
    title: 'Software Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://simanga.dev',
    id: 'work1',
  },
  {
    company: 'Kriterion AI',
    title: 'Junior Software Engineer',
    start: '2022',
    end: '2023',
    link: 'https://simanga.dev',
    id: 'work2',
  },
  {
    company: 'Copalcor (PTY)',
    title: 'Software Developer Intern',
    start: '2020',
    end: '2021',
    link: 'https://simanga.dev',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
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
