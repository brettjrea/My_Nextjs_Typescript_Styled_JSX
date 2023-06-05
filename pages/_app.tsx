// pages/_app.tsx
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isDarkMode')
      return stored ? JSON.parse(stored) : false
    }
    return false
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isSidebarOpen')
      return stored ? JSON.parse(stored) : false
    }
    return false
  });

  const toggleTheme = () => {
    const newState = !isDarkMode;
    setIsDarkMode(newState);
    localStorage.setItem('isDarkMode', JSON.stringify(newState));
  };

  const toggleSidebar = () => {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem('isSidebarOpen', JSON.stringify(newState));
  };

  return (
    <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp;
