// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div style={{ 
      position: 'relative', 
      width: isSidebarOpen ? '250px' : '0px', 
      height: '100vh', 
      backgroundColor: isDarkMode ? '#333' : '#fff', 
      overflow: 'hidden',
      transition: 'width 0.5s ease',
    }}>
      <nav style={{ width: '100%', height: '100%', padding: '0 20px' }}>
        {isSidebarOpen && 
          <ul>
            <li><Link href="/about">About</Link></li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ 
        position: 'absolute', 
        right: isSidebarOpen ? '-20px' : '0', 
        top: '0', 
        backgroundColor: 'gray' 
      }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        ul {
          list-style: none;
        }
        li a {
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
