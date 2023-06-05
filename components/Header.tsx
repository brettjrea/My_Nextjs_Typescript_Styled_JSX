// components/Header.tsx
const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header>
      <button className={isDarkMode ? 'dark-mode' : ''} onClick={toggleTheme}>
        Switch to {isDarkMode ? 'light' : 'dark'} mode
      </button>

      <style jsx>{`
        header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 1em;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }

        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #888;
          box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        button.dark-mode {
          background-color: #ccc;
          box-shadow: inset 3px 3px 5px rgba(0,0,0,0.5);  // Changed shadow style
          color: black;
        }
      `}</style>
    </header>
  )
}

export default Header;
