import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ isDarkMode, toggleTheme, toggleSidebar }) {
  return (
    <header>
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </header>
  )
}
