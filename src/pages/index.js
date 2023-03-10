import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-blue-300 w-[500px] m-auto mt-8 rounded-lg">
       
        <div>
          <h1 className=" text-5xl font-bold text-center text-green-300 "> welcome to next js </h1>
          <h2 className="text-3xl text-blue-400 text-center mt-4 font-thin">
                    Hello world sumon  !
          </h2>
          <Link href='/blog'>
           <p className='m-auto p-4 bg-blue-600 text-3xl '>go to blog pages</p> 
          </Link>
          <Link href='/nested'>
           <p className='m-auto p-4 bg-blue-600 text-3xl '>go to nexted pages</p> 
          </Link>

        </div>
      </main>
    </>
  )
}
