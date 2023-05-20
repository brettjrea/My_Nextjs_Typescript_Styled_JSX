// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <nav>
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      {isSidebarOpen &&
        <ul>
          <li><Link href="/about">About</Link></li>
          {/* Add more navigation links here */}
        </ul>
      }

      <style jsx>{`
        nav {
          width: ${isSidebarOpen ? '250px' : '50px'};
          background-color: #f5f5f5;
          overflow: auto;
          transition: width 0.5s ease;
        }
        button {
          position: absolute;
          right: ${isSidebarOpen ? '0' : '-20px'};
          top: 0;
          background: none;
          border: none;
          color: #333; 
        }
      `}</style>
    </nav>
  )
}
