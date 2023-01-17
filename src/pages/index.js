// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'


import Login from './Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Explore from './Explore'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <Router>
      < >
        {/* <Navbar /> */}

        {/* <Route path="/" element={<Explore />} /> */}
        <Explore />
          <Login />
          {/* <Footer /> */}
      </>
    // </Router>
  )
}
