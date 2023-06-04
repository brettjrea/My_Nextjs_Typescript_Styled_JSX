// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ position: 'fixed', left: isSidebarOpen ? '0px' : '-250px', height: '100vh', transition: 'left 0.5s' }}>
      <nav>
        <ul>
          <Link href="/about">About</Link>
        </ul>
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        div {
          width: 250px;
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }
        ul {
          padding-right: 20px;
        }
        button {
          background-color: ${isDarkMode ? '#fff' : 'gray'};
          color: ${isDarkMode ? '#333' : '#fff'};
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
