import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import ImgMaze from '@/images/maze.png'
import ImgFileOrganizer from '@/images/file-organizer.png'
import ImgNodeDiscord from '@/images/node-discord.png'
import ImgWordle from '@/images/wordle.png'
import ImgSemantic from '@/images/semantic-search.png'
import ImgGo from '@/images/go.png'

const projects = [
  {
    name: 'Path-finding Algorithms Visualizer',
    description:
      'A path-finding algorithm visualizer that allows you to visualize different path-finding algorithms and visualize their performance on a maze grid. Built with React and TypeScript.',
    link: {
      href: 'https://path-finding-alogirthms-visualizer.vercel.app',
      label: 'Website',
    },
    image: ImgMaze,
    techStacks: ['Next.js', 'DaisyUI'],
  },
  {
    name: 'Magic Search',
    description:
      'A fun project that showcases the understanding of how semantic search engine works. Built with Embeddings model and vector database, also designed with ShadCn in Next.js.',
    link: {
      href: 'https://next-semantic-search-e2uaf0t4m-tonyyh91s-projects.vercel.app/',
      label: 'Website',
    },
    image: ImgSemantic,
    techStacks: [
      'Next.js',
      'LangChain',
      'Embeddings Model',
      'PostgreSQL',
      'Vector',
    ],
  },
  {
    name: 'Wordle Clone',
    description:
      'Built with the intention of playing in unlimited rounds of Wordle 😄, this game not only satisfies a personal craving but also serves as a testament to my proactive approach to skill enhancement and passion for word games.',
    link: {
      href: 'https://next-wordle-clone.vercel.app/',
      label: 'Website',
    },
    image: ImgWordle,
    techStacks: ['Next.js', 'ShadcnUI'],
  },
  {
    name: 'A Discord Bot for forecasting weather',
    description:
      'Weather Bot is crafted using Node.js, designed to seamlessly fetch weather forecasts for up to five days with pinpoint accuracy, catering to any location worldwide.',
    link: {
      href: 'https://github.com/tonyye99/weather-forecast-discord-bot',
      label: 'Github and installation link',
    },
    image: ImgNodeDiscord,
    techStacks: ['Node.js', 'Discord.js'],
  },
  {
    name: 'File Organizer',
    description:
      'Built with Python to practice basic python skills. This automation script can organize files in the given directory by creating new folders with extension or modified dates.',
    link: {
      href: 'https://github.com/tonyye99/python-file-organizer',
      label: 'Github and download link',
    },
    image: ImgFileOrganizer,
    techStacks: ['Python', 'Tkinter'],
  },
  {
    name: 'Go React Todo App',
    description:
      'A simple Todo App built with Go and React. This project is aimed at learning Go and React and how to integrate them together.',
    link: {
      href: 'https://go-react-todo-production-66dc.up.railway.app/',
      label: 'Website',
    },
    image: ImgGo,
    techStacks: ['React', 'GoLang', 'MongoDB', 'ChakraUI'],
  },
]

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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Ye Htet Aung</title>
        <meta
          name="description"
          content="Embarking on a Journey of Creativity and Learning: My Fun Little Projects"
        />
        <meta name="author" content="Ye Htet Aung" />
        <meta property="og:title" content="Ye Htet Aung" />
        <meta
          property="og:description"
          content="Ye Htet Aung's portfolio showcase projects"
        />
        <meta property="og:url" content="https://yehtetaung.com" />
        <meta property="og:site_name" content="YeHtetAung" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image:url"
          content="https://yehtetaung.com/myPhoto-800x600.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:url"
          content="https://yehtetaung.com/myPhoto-1800x1600.png"
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta property="og:image:alt" content="Ye Htet Aung's Photo" />
        <meta property="og:type" content="website" />
      </Head>
      <SimpleLayout
        title="Embarking on a Journey of Creativity and Learning: My Fun Little Projects"
        intro="These are some fun little projects I've worked on in my spare time, aiming to make a positive impact and enhance my skills. I plan to continue exploring new ideas and refining my abilities through these endeavors, all while enjoying the process of learning and creating. Repositories can be found on my Github."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name} className="gap-4">
              <div className="relative z-10 flex aspect-[9/5] w-full items-center justify-center rounded-md bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.image}
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                  alt={project.name}
                />
              </div>
              <div className="flex flex-wrap items-center justify-start gap-2">
                {project.techStacks.map((stack) => (
                  <div
                    className="z-10 max-w-full flex-initial rounded-full py-1 px-2 text-xs font-medium leading-none text-zinc-800 ring-1 ring-zinc-800/5 dark:text-zinc-200 dark:ring-white/10"
                    key={stack}
                  >
                    {stack}
                  </div>
                ))}
              </div>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank">
                  {project.name}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-auto flex text-sm font-medium text-zinc-400 transition group-hover:text-primary dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
