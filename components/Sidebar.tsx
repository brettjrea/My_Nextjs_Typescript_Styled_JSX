// components/Sidebar.tsx
import Link from 'next/link'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={isDarkMode ? 'dark-mode' : ''} style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0', transition: 'width 0.5s ease' }}>
      <nav style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        {isSidebarOpen && 
          <ul>
            <li>
              <div className="link-wrapper">
                <Link href="/about">About</Link>
              </div>
            </li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'gray' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        .link-wrapper a {
          color: white;
          text-decoration: none;
          font-family: Arial, sans-serif;
        }
        .link-wrapper a:hover {
          text-decoration: underline;
        }
        .link-wrapper a:visited {
          color: white;
        }
        div.dark-mode .link-wrapper a {
          color: black;
        }
        div.dark-mode .link-wrapper a:visited {
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
