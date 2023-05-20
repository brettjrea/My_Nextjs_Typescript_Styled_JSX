// components/Header.tsx
export default function Header({ isDarkMode, toggleTheme, toggleSidebar, isSidebarOpen }) {
  return (
    <header>
      <button onClick={toggleSidebar}>
          {isSidebarOpen ? '<' : '>'}
      </button>
      <button onClick={toggleTheme}>Switch to {isDarkMode ? 'light' : 'dark'} mode</button>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </header>
  )
}
