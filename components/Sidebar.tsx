// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ position: 'relative', width: '0px', height: '100vh' }}>
      <nav>
        {isSidebarOpen &&
          <ul>
            <Link href="/about">About</Link>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        div {
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
          transition: width 0.5s ease;
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
