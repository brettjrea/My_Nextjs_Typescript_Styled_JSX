// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0px', height: '100vh' }}>
      <nav style={{ visibility: isSidebarOpen ? 'visible' : 'hidden', width: '250px' }}>
        <ul>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'gray' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        nav {
          background-color: #f5f5f5;
          overflow: auto;
          transition: visibility 0.5s ease;
        }
        ul {
          padding-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
