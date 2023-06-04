// components/Sidebar.tsx

import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0', transition: 'width 0.5s ease', height: '100vh' }}>
      <nav style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        {isSidebarOpen && 
          <ul>
            <li><Link href="/about">About</Link></li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'gray' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        nav {
          transition: width 0.5s ease;
        }
        ul {
          padding-right: 20px;
          list-style: none;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
