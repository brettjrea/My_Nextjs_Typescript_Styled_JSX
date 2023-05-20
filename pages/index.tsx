// pages/index.tsx
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

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
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode}/>
        <div style={{width: '100%'}}>
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main>
            <h1>Hi there 👋</h1>
            <h2>My name is Brett. I love computers, the internet, and learning to program for them.</h2>
            <ul>
              <li>🔭 I’m currently working on getting my bachelor's in computer science.</li>
              <li>🌱 I’m currently taking Written and Verbal Communication for Software Development.</li>
              <li>👯 I’m looking to collaborate on anything cool and relevant.</li>
            </ul>
            <h3>Here are some ideas to get you started:</h3>
            <ul>
              <li>🔭 I’m currently working on getting my bachelor's in computer science.</li>
              <li>🌱 I’m currently learning Data Structures and Algorithms.</li>
              <li>🤔 I’m looking for help with ...</li>
              <li>💬 Ask me about ...</li>
              <li>📫 How to reach me: ...</li>
              <li>😄 Pronouns: ...</li>
              <li>⚡ Fun fact: ...</li>
            </ul>
            <img src="https://github-readme-stats.vercel.app/api?username=brettjrea&show_icons=true&theme=transparent" alt="Brett J Rea's GitHub stats" width="100%" height="auto"/>

            <style jsx>{`
              main {
                padding: 1em;
                background: ${isDarkMode ? 'black' : 'white'};
                color: ${isDarkMode ? 'white' : 'black'};
              }
            `}</style>
          </main>
        </div>
      </div>
    </div>
  )
}
