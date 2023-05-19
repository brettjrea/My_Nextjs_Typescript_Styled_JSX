// pages/index.tsx
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default function IndexPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const storedThemePreference = JSON.parse(localStorage.getItem('isDarkMode'));
    if (storedThemePreference) {
      setIsDarkMode(storedThemePreference);
    }
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main />
      <style jsx>{`
      margin-left: ${isSidebarOpen ? '250px' : '0'};
        .light {
          background-color: #fff;
          color: #333;
        }
        .dark {
          background-color: #333;
          color: #fff;
        }
      `}</style>
    </div>
  )
}
