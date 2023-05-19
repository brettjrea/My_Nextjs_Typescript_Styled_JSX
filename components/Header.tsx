// components/Header.tsx
export default function Header({ isDarkMode, toggleTheme, toggleSidebar, isSidebarOpen }) {
  return (
    <header>
      <button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Open'} Sidebar
        </button>
      <button onClick={toggleTheme}>Switch to {isDarkMode ? 'light' : 'dark'} mode</button>

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
