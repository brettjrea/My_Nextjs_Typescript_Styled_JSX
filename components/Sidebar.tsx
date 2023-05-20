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
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: ${isSidebarOpen ? '250px' : '50px'};
          background-color: #f5f5f5;
          overflow: auto;
          transition: width 0.5s ease;
        }
        button {
          position: absolute;
          right: 0;
          top: 0;
          background: none;
          border: none;
        }
      `}</style>
    </nav>
  )
}
