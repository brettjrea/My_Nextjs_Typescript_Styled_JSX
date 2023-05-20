// pages/_app.tsx
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    const storedThemePreference = JSON.parse(localStorage.getItem('isDarkMode'));
    if (storedThemePreference) {
      setIsDarkMode(storedThemePreference);
    }
  }, []);

  return (
    <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
