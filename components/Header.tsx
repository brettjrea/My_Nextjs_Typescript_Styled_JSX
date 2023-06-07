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
          box-shadow: -0.15rem 0.15rem 0.15rem rgba(0,0,0,0.4);
          color: white;
          font-size: 1rem;
          transition: all 1s ease;
          text-shadow: ${isDarkMode ? '-0.1rem 0.1rem 0.1rem rgba(0,0,0,0.75)' : '0.0rem -0.07rem 0.15rem rgba(0,0,0,0.9), -0.08rem 0.01rem 0.15rem rgba(255,255,255,0.9)'};
          outline: .001rem solid black;
        }

        button.dark-mode {
          background-color: #ccc;
          transition: all 1s ease;
          box-shadow: -.1rem .1rem .5rem rgba(0,0,0,.7), .15rem -.15rem .05rem rgba(255,255,255,0.5); // Changed shadow style
          color: black;
          outline: .001rem solid black;
        }
      `}</style>
    </header>
  )
}

export default Header;
