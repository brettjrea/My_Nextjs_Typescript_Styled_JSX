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

// pages/index.tsx

return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <div style={{ display: 'flex' }}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Main />
      </div>
      ...
    </div>
  )
}
