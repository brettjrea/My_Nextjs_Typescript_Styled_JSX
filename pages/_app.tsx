// pages/_app.tsx
import { useState } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Sidebar isDarkMode={isDarkMode} />
      <Main isDarkMode={isDarkMode} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

