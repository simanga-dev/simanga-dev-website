'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SKILLS,
  CERTIFICATIONS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            I am a full-stack software developer based in Pretoria, South
            Africa, with six years of experience building and supporting C# and
            .NET business systems, including SaaS and financial applications. I
            work across requirements, REST APIs, SQL Server, React interfaces,
            testing, and production support.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            I use AI-assisted coding tools alongside code review and automated
            testing. Outside work, I am building Matric Dashboard to make South
            African school results easier to explore.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Selected projects</h2>
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain p-1 pb-5"
          role="region"
          aria-label="Selected projects"
          tabIndex={0}
        >
          {PROJECTS.filter((project) => !project.hidden).map((project, index) => (
            <div
              key={project.name}
              className="w-[85%] shrink-0 snap-start space-y-3 sm:w-[288px]"
            >
              {project.image && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="group block overflow-hidden rounded-2xl bg-zinc-100 p-1 ring-1 ring-zinc-200 transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-zinc-900 dark:ring-zinc-800"
                >
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(max-width: 640px) 85vw, 288px"
                    priority={index === 0}
                    className="aspect-video w-full rounded-xl object-cover object-top"
                  />
                </a>
              )}
              {project.video && (
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
              )}
              <div className="px-1">
                {project.status && (
                  <p className="mb-2 w-fit rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {project.status}
                  </p>
                )}
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-2"
                  aria-label={`${project.name} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.repository !== project.link && (
                  <a
                    className="mt-3 inline-block text-sm text-zinc-600 underline dark:text-zinc-400"
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source on GitHub`}
                  >
                    Source on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Work experience</h2>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <article
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={job.id}
            >
              <Spotlight
                className="from-teal-400/50 via-teal-300/30 to-transparent blur-2xl dark:from-teal-300/40 dark:via-teal-400/20"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-slate-800">
                <div className="relative flex w-full flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-zinc-600 dark:text-zinc-400">
                    {job.start} to {job.end}
                  </p>
                </div>
                <p className="relative mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {job.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Skills</h2>
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <div key={skill.label}>
              <dt className="mb-1 font-medium">{skill.label}</dt>
              <dd className="text-zinc-600 dark:text-zinc-400">
                {skill.description}
              </dd>
            </div>
          ))}
        </dl>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Certifications</h2>
        <ul className="space-y-5">
          {CERTIFICATIONS.map((certification) => (
            <li key={certification.exam}>
              <a
                className="underline decoration-zinc-300 underline-offset-4 dark:decoration-zinc-700"
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {certification.name}
              </a>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {certification.exam} · Issued {certification.issued}
              </p>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Education</h2>
        <h3 className="font-medium">Tshwane University of Technology</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          National Diploma in Computer Systems Engineering
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Jan 2018 to Dec 2021 · Average 77%
        </p>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Coursework included database management, computer architecture,
          algorithms, and computational theory.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-lg font-medium">Connect</h2>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
