// components/Header.tsx
export default function Header({ isDarkMode, toggleTheme }) {
  return (
    <header style={{ width: '100vw' }}>
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
