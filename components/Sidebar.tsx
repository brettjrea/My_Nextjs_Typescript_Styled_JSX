// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div style={{ position: 'relative', width: isSidebarOpen ? '250px' : '0px', height: '100vh' }}>
      <nav>
        {isSidebarOpen &&
          <ul>
            <Link href="/about">About</Link>
          </ul>
        }
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'gray' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
      <style jsx>{`
        nav {
          width: 100%;
          height: 100%;
          background-color: #f5f5f5;
          overflow: auto;
          transition: width 0.5s ease;
        }
      `}</style>
    </div>
  )
}
