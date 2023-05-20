// pages/_app.tsx
import { useState } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => { // New function
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Sidebar isDarkMode={isDarkMode} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Main isDarkMode={isDarkMode} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

