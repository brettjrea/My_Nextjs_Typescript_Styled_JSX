// pages/_app.tsx
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsDarkMode(JSON.parse(localStorage.getItem('isDarkMode')) || false);
    setIsSidebarOpen(JSON.parse(localStorage.getItem('isSidebarOpen')) || false);
    setIsHydrated(true); // Mark the app as hydrated after reading from localStorage
  }, []);

  // Don't render the layout until the app is hydrated, to prevent flashing/snap
  if (!isHydrated) {
    return null;
  }

  return (  
    <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
      <Component {...pageProps} />
      <title>brettjrea.dev</title>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )

  function toggleTheme() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('isDarkMode', JSON.stringify(newMode));
  }

  function toggleSidebar() {
    const newState = !isSidebarOpen;
    setIsSidebarOpen(newState);
    localStorage.setItem('isSidebarOpen', JSON.stringify(newState));
  }
}

export default MyApp;
