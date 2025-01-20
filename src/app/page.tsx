import Image from "next/image";
import { headers } from 'next/headers';

export default async function Home() {
  // construct the current server URL
  const headersList = await headers()
  const host = headersList.get('host')
  const proto = headersList.get('x-forwarded-proto')
  const apiURL = `${proto}://${host}/api/greetings`

  const response = await fetch(apiURL)
  const greetings = await response.json()
  // select random entry in greetings array
  const greeting = greetings[Math.floor(Math.random() * greetings.length)]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Image
            src="https://www.checklyhq.com/images/racoon_logo.svg"
            alt="Checkly logomark"
            width={40}
            height={40}
            className="mb-4"
          />
          <div className="text-gray-600 mb-4">
            <span className="capitalize" >{greeting.text}</span>, this is the
          </div>
            <h1 className="text-4xl text-left sm:text-5xl font-bold text-gray-900">
              Next.js & Checkly starter template
            </h1>
        </div>
        <ol
          className="list-inside list-decimal text-left">
          <li className="mb-2">
          Clone this repo and run{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              npm install
            </code>
            .
          </li>
          <li className="mb-2">If you don't have a Checkly account yet, run{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              npx checkly login
            </code>
            .
          </li>
          <li className="mb-2">
            Run{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              npx checkly deploy
            </code>{" "}
            to deploy your checks
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=next-checkly-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://checklyhq.com/docs?utm_source=next-checkly-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Checkly docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/checkly/nextjs-checkly-starter-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://checklyhq.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to checklyhq.com →
        </a>
      </footer>
    </div>
  );
}
