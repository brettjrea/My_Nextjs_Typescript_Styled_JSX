// components/Header.tsx
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ isDarkMode, toggleTheme, toggleSidebar }) {
  return (
    <header>
      <button onClick={toggleSidebar}>
        <img src="/icons/menu.svg" alt="Menu" />
      </button>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 1em;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </header>
  )
}
