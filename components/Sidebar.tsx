// components/Sidebar.tsx

import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ 
      position: 'relative', 
      transform: `translateX(${isSidebarOpen ? '0' : '-250px'})`, 
      transition: 'transform 0.5s ease', 
      width: '250px', 
      height: '100vh', 
      backgroundColor: isDarkMode ? '#333' : '#fff' 
    }}>
      <nav style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        {isSidebarOpen && 
          <ul>
            <li><Link href="/about">About</Link></li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: isSidebarOpen ? '-20px' : '0', top: '0', backgroundColor: 'gray' }}>
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
