import Head from 'next/head'
import Link from 'next/link'

export default function Home({blogList}){
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Welcome 12th.day</title>
      </Head>

      <h1 className="text-4xl justify-center text-gray-800 font-mono font-bold">Welcome to 12th.day</h1>

      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <Link href={"/tools/event-extracter"}>
          <a className="border rounded-xl mt-5 w-96 text-left p-6 hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Event Extracter</h3>
          </a>
        </Link>
      </div>
      <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        <Link href={"blog"}>
          <a className="border rounded-xl mt-5 w-96 text-left p-6 hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Blog</h3>
          </a>
        </Link>
      </div>
    </div>
  )
}



