// components/Header.tsx
const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header>
      <button className={isDarkMode ? 'dark-mode' : ''} onClick={toggleTheme}>
       {isDarkMode ? '☀️' : '🌙'}
      </button>

      <style jsx>{`
        header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 1em;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
          transition: all 1s ease;
        }

        button {
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          background-color: #888;
          box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
          color: white;
          font-size: 1rem;
          transition: all 1s ease;
          text-shadow: ${isDarkMode ? '0.1rem 0.1rem 0.1rem rgba(0,0,0,0.75)' : '0rem -0.05rem 0.075rem rgba(0,0,0,0.75), -0.075rem -0.075rem 0.05rem rgba(255,255,255,0.8)'};
        }

        button.dark-mode {
          background-color: #ccc;
          transition: all 1s ease;
          box-shadow: 1px 1px 1px rgba(0,0,0,1), -2px -2px 1px rgba(255,255,255,0.3); // Changed shadow style
          color: black;
        }
      `}</style>
    </header>
  )
}

export default Header;
