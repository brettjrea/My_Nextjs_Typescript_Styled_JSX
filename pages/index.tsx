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
  <div className={isDarkMode ? 'dark' : 'light'} style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
    <div style={{ display: 'flex', flex: '1' }}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{width: '100%'}}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Main />
      </div>
    </div>
    ...
  </div>
)
}
