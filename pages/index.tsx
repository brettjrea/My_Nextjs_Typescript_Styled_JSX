import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function IndexPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Retrieve theme preference from local storage when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Save theme preference in local storage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>Switch to {isDarkMode ? 'light' : 'dark'} mode</button>
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
      <img src="https://github-readme-stats.vercel.app/api?username=brettjrea&show_icons=true&theme=transparent" alt="Brett J Rea's GitHub stats"/>
      <div>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        div {
          margin: 0 auto;
          max-width: 800px;
          padding: 1em;
          font-family: Arial, sans-serif;
          color: ${isDarkMode ? '#DDD' : '#333'};
          background-color: ${isDarkMode ? '#333' : '#FFF'};
          transition: all 0.5s ease;
        }
        h1 {
          color: ${isDarkMode ? '#CCC' : '#0070f3'};
        }
        button {
          padding: 10px;
          margin-bottom: 20px;
          background-color: ${isDarkMode ? '#0070f3' : '#333'};
          color: ${isDarkMode ? '#333' : '#FFF'};
          border: none;
          cursor: pointer;
          transition: all 0.5s ease;
        }
        button:hover {
          background-color: ${isDarkMode ? '#0050b3' : '#111'};
        }
        ul {
          padding-left: 20px;
        }
        li {
          line-height:1.5;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  )
}
