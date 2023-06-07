// components/Sidebar.tsx
import Link from 'next/link'
import { useSwipeable } from 'react-swipeable'

const Sidebar = ({ isDarkMode, isSidebarOpen, toggleSidebar }) => {

  const handlers = useSwipeable({
    onSwipedLeft: () => toggleSidebar(),
    onSwipedRight: () => toggleSidebar(),
    trackMouse: true
  });

  return (
    <div {...handlers} className={isDarkMode ? 'dark-mode' : ''} style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0', transition: 'width 0.5s ease' }}>
      <nav style={{ width: '100%', height: '100%', overflow: 'auto' }}>
        {isSidebarOpen &&
          <ul>
            <li>
              <Link legacyBehavior style={{ textDecoration: "none", color: "white" }} href="/about">
                <a className={isDarkMode ? 'dark-mode' : ''}>About</a>
              </Link>
            </li>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'transparent', border: 'none', fontSize: '1.6rem', cursor: 'pointer' }}>
        {isSidebarOpen ? '👈' : '👉'}
      </button>
      <style jsx>{`
        button {  
          text-shadow: ${isDarkMode ? '4px 4px 4px rgba(0,0,0,0.25)' : '4px 4px 4px rgba(0,0,0,0.25)'};
          text-shadow: ${isSidebarOpen ? '-4px 4px 4px rgba(0,0,0,0.5)' : '-4px 4px 4px rgba(0,0,0,0.75)'};
        }
         div {
          padding: 10px;
          border: none;
          background-color: #888;
          box-shadow: inset -.25rem 0rem .5rem rgba(0,0,0,0.3);
          color: white;
          font-size: 1rem;
          transition: all 1s ease;
          outline: .001rem solid black;
   
        }
        div.dark-mode {
          background-color: #ccc;
          box-shadow: inset -3px 3px 5px rgba(0,0,0,0.5); // Changed shadow style
          color: black;
        }
        a {
          color: white;
          text-decoration: none;
          
        }
        a.dark-mode {
          color: black;

        }
        a:hover {
          text-decoration: underline;
        }
        nav {
          transition: width 0.5s ease;
        }
        ul {
          padding-right: 20px;
          list-style: none;
          
        }
        .sidebar-toggle {
          font-size: 1.6rem;
          border: none;
          background-color: transparent;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;  