import Head from 'next/head'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  Briefcase,
  BriefcaseBusiness,
  Contact,
  Send,
  Download,
  Handshake,
} from 'lucide-react'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Typewriter from 'typewriter-effect'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('This is not a valid email.'),
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.',
  }),
})

function Projects() {
  let projects = [
    {
      name: 'Path-finding Algorithms Visualizer',
      description:
        'A path-finding algorithm visualizer that allows you to visualize different path-finding algorithms and visualize their performance on a maze grid. Built with React and TypeScript.',
      link: {
        href: 'https://path-finding-alogirthms-visualizer.vercel.app',
        label: 'Website',
      },
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
      techStacks: ['Node.js', 'Discord.js'],
    },
    {
      name: 'File Organizer',
      description:
        'Built with Python to simple practice basic python skills. This automation script can organize files in the given directory by creating new folders with extension or modified dates.',
      link: {
        href: 'https://github.com/tonyye99/python-file-organizer',
        label: 'Github and download link',
      },
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
      techStacks: ['React', 'GoLang', 'MongoDB', 'ChakraUI'],
    },
  ]

  return (
    <>
      {projects.map((project) => (
        <Card as="li" key={project.name}>
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

          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href="/projects">{project.name}</Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
        </Card>
      ))}
    </>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link
      className="group -m-1 p-1 text-zinc-800 transition hover:text-primary dark:text-zinc-200"
      {...props}
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-primary" />
    </Link>
  )
}

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  async function onSubmit(values) {
    console.log(values)
    const { name, email, message } = values
    try {
      const { error } = await supabase.from('contacts').insert({
        name,
        email,
        message,
      })
      if (error) {
        toast({
          variant: 'destructive',
          title: 'Something went wrong.',
          description: 'There was a problem with your request.',
        })
      }
      toast({
        title: 'Success',
        description: 'Your message has been delivered!',
      })
      form.reset()
      setOpen(false)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: 'There was a problem with your request.',
      })
    }
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Contact />
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Feel free to reach out if you want to talk about a project, job
        opportunity, or just to say hi!
      </p>
      <div className="mt-3">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex w-full items-center justify-center"
            >
              Send a message
              <Send size={14} className="ml-2" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Send a message</DialogTitle>
            </DialogHeader>
            <div className="mt-3">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="mr-auto">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'BTRS (Remote)',
      title: 'Software Engineer',
      start: '2023',
      end: '2024',
    },
    {
      company: 'Professy (Remote)',
      title: 'Javascript Engineer',
      start: '2021',
      end: '2023',
    },
    {
      company: 'Myanmar Media Linkage',
      title: 'Senior Web Developer',
      start: '2020',
      end: '2021',
    },
    {
      company: 'Myanmar High Society',
      title: 'Web Developer',
      start: '2018',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseBusiness />
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
      <Button variant="outline" className="mt-6 w-full">
        <Link
          href="/YeHtetAung.pdf"
          className="flex items-center justify-center"
          target="_blank"
          download
        >
          Download CV
          <Download size={14} className="ml-2" />
        </Link>
      </Button>
    </div>
  )
}

function Freelance() {
  let freelance = [
    {
      company: 'FLAIA',
      title: 'Frontend Developer',
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
      start: '2022',
      end: '2022',
      jobSuccessScore: 100,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase />
        <dl className="ml-3">
          <dd className="text-zinc-900 dark:text-zinc-100">Freelance</dd>
          <dd className="text-xs text-gray-700 dark:text-gray-400">
            I’m an active freelancer on{' '}
            <span className="text-primary">Upwork</span>
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
        variant="outline"
        className="group mt-6 w-full"
      >
        <Link
          href="https://www.upwork.com/freelancers/~01a6b3053fee48cea8"
          target="_blank"
          className="flex items-center justify-center"
        >
          Hire me on Upwork
          <Handshake size={14} className="ml-2" />
        </Link>
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Ye Htet Aung | Homepage</title>
        <meta name="description" content="Ye Htet Aung's homepage" />
        <meta name="author" content="Ye Htet Aung" />
        <meta property="og:title" content="Ye Htet Aung" />
        <meta
          property="og:description"
          content="Ye Htet Aung is a Senior Software Engineer in Web development with over six years of experience in JavaScript and TypeScript."
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
            A software engineer currently in Bangkok, Thailand, specializing in
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
      <Container className="mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Projects />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactForm />
            <Resume />
            <Freelance />
          </div>
        </div>
      </Container>
    </>
  )
}
