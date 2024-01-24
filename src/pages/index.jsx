import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import TweetsGenLogo from '@/images/tweets-gen.png'
import Typewriter from 'typewriter-effect'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ShakeHandsIcon(props) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-79.7 12.31-129.8 79.34-131.9 82.24-7.844 10.69-5.531 25.72 5.125 33.57a23.858 23.858 0 0014.19 4.657c7.406 0 14.69-3.375 19.38-9.782.406-.563 40.19-53.91 100.5-63.23 7.457-.961 14.98.67 21.56 4.483L227.2 168.2c-12.4 12.3-20.1 27.9-20.1 46.3 0 17.5 6.812 33.94 19.16 46.29 13.24 12.41 29.64 18.31 47.14 18.31s33.94-6.813 46.31-19.19l11.35-11.35 124.2 100.9c2.312 1.875 2.656 5.251.5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719-1.656.156-4.562.125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6-9.469.813-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3H0v255.6l64 .04c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.438 13.62-1.406 26.41-6.063 37.47-13.5l.906.813c12.03 9.876 27.28 14.41 42.69 12.78 13.19-1.375 25.28-7.032 33.91-15.35 21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76 8.381-8.382c9.375-9.376 9.375-24.57 0-33.94-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8c-6.6 6.7-18.1 6.7-24.7 0-3.312-3.282-5.125-7.657-5.125-12.31 0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03 59.75 9.22 100.2 62.73 100.6 63.29 3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1l-133.9-1zM48 352c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.18 16 16.08c0 8.7-7.25 15.9-16 15.9zm544 0c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99c0 8.79-7.2 15.99-16 15.99z" />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Projects() {
  let projects = [
    {
      name: 'TweetsGen',
      description:
        'TweetsGen is a free tool to generate tweets, threads and profile bios. It is built with Nuxt.js 3 and Naive UI and deployed on Railway.app. Its simplicity and ease of use make it a popular choice for Twitter enthusiasts.',
      link: { href: 'https://tweetsgen.com', label: 'tweetsgen.com' },
      logo: TweetsGenLogo,
    },
    {
      name: 'Personal Website v1',
      description:
        'My first personal website, built with Nuxt.js 2 and Tailwind CSS. I had a great learning experience from this project.',
      link: {
        href: 'https://github.com/tonyye99/My-Portfolio',
        label: 'Github',
      },
      logo: logoAnimaginary,
    },
  ]

  return (
    <>
      {projects.map((project) => (
        <Card as="li" key={project.name}>
          <Card.Logo src={project.logo} alt="" />
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href={project.link.href} target="_blank">
              {project.name}
            </Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </Card>
      ))}
    </>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="group -m-1 p-1 text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500" />
    </Link>
  )
}

function Contact() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Feel free to reach out if you want to talk about a project, job
        opportunity, or just to say hi!
      </p>
      <div className="mt-3">
        <Button
          className="group mt-6 w-full"
          href="mailto:ygxan18@gmail.com"
          variant="secondary"
        >
          Send a message
          <MailIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Professy (Remote)',
      title: 'Javascript Engineer',
      logo: logoPlanetaria,
      start: '2021',
      end: '2023',
    },
    {
      company: 'Myanmar Media Linkage',
      title: 'Senior Web Developer',
      logo: logoAirbnb,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Myanmar High Society',
      title: 'Web Developer',
      logo: logoFacebook,
      start: '2018',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <span className="absolute inset-0 flex items-center justify-center">
                {['👨‍💻', '👨‍🎨', '👨‍🔬', '👨‍🚀', '👨‍🎤'][roleIndex % 5]}
              </span>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/YeHtetAung.pdf" target="_blank" download variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex overflow-auto 2xl:justify-center pl-5 pr-5 gap-5 py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Freelance() {
  let freelance = [
    {
      company: 'FLAIA',
      title: 'Frontend Developer',
      logo: logoPlanetaria,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
      jobSuccessScore: 100,
    },
    {
      company: 'StockPhotos',
      title: 'Frontend Developer',
      logo: logoAirbnb,
      start: '2022',
      end: '2022',
      jobSuccessScore: 100,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <dl className="ml-3">
          <dd className="text-zinc-900 dark:text-zinc-100">Freelance</dd>
          <dd className="text-xs text-gray-700 dark:text-gray-400">
            I’m an active freelancer on{' '}
            <span className="text-green-400">Upwork</span>
          </dd>
        </dl>
      </h2>
      <ol className="mt-6 space-y-4">
        {freelance.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <span className="absolute inset-0 flex items-center justify-center">
                {['👨‍💻', '👨‍🎨', '👨‍🔬', '👨‍🚀', '👨‍🎤'][roleIndex % 5]}
              </span>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Job success score
              </dd>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {role.jobSuccessScore}%
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://www.upwork.com/freelancers/~01a6b3053fee48cea8"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Hire me on Upwork
        <ShakeHandsIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ye Htet Aung | Software Engineer
        </title>
        <meta
          name="description"
          content="I’m Ye Htet Aung, A software engineer based in Yangon, Myanmar, specializing in
            Javascript and proficient in modern frameworks and libraries."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className="flex gap-1.5">
              Hi, I’m
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color: #27ae60;">Software Engineer</span>'
                    )
                    .pauseFor(500)
                    .deleteChars(17)
                    .typeString(
                      '<span style="color: #27ae60;">Freelancer</span>'
                    )
                    .pauseFor(500)
                    .deleteChars(17)
                    .typeString(
                      '<span style="color: #27ae60;">Lifelong learner</span>'
                    )
                    .pauseFor(1000)
                    .start()
                }}
                options={{
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A software engineer based in Yangon, Myanmar, specializing in
            Javascript and proficient in modern frameworks and libraries. With a
            strong focus on building web applications, I thrive on the
            challenges of freelance work, actively exploring new technologies
            and specializing in SaaS product development.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/TonyYe99"
              target="_blank"
              aria-label="Follow on X"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.facebook.com/BatOfGothem"
              target="_blank"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://github.com/tonyye99"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/ye-htet-aung"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Projects />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Contact />
            <Resume />
            <Freelance />
          </div>
        </div>
      </Container>
    </>
  )
}
