// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <nav>
      <button onClick={toggleSidebar} style={{position: 'absolute', left: isSidebarOpen ? '250px' : '0'}}>
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
          position: absolute;
          width: ${isSidebarOpen ? '250px' : '0'};
          background-color: #f5f5f5;
          overflow: auto;
          transition: width 0.5s ease;
        }
        button {
          background: none;
          border: none;
          color: #333; // or any other color
        }
      `}</style>
    </nav>
  )
}
