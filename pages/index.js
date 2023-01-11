// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div data-theme="">
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
      </div>
      <div data-theme="cupcake">
        <button className="btn btn-primary">Button</button>
      </div>
      <div data-theme="synthwave">
        <button className="btn btn-primary">Button</button>
      </div>
      <div data-theme="retro">
        <button className="btn btn-primary">Button</button>
      </div>
    </>
  )
}
