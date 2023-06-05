// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={isDarkMode ? 'dark-mode' : ''} style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0', transition: 'width 0.5s ease' }}>
      <nav style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        {isSidebarOpen && 
          <ul>
            <li>
              <Link href="/about">
                <a className="sidebar-link">About</a>
              </Link>
            </li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'gray' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        a.sidebar-link {
          color: white;
          text-decoration: none;
          font-family: Arial, sans-serif;
        }
        a.sidebar-link:hover {
          text-decoration: none;
        }
        a.sidebar-link:visited {
          color: white;
        }
        li {
          color: white;
        }
        div.dark-mode a.sidebar-link,
        div.dark-mode li {
          color: black;
        }
        div.dark-mode a.sidebar-link:visited {
          color: black;
        }
        div {
          padding: 10px;
          border: none;
          background-color: #888;
          box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        div.dark-mode {
          background-color: #ccc;
          box-shadow: inset -3px 3px 5px rgba(0,0,0,0.5); // Changed shadow style
          color: black;
        }
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
