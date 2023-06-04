// components/Header.tsx
const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header>
      <button onClick={toggleTheme}>Switch to {isDarkMode ? 'light' : 'dark'} mode</button>

      <style jsx>{`
        header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 1em;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </header>
  )
}

export default Header;
