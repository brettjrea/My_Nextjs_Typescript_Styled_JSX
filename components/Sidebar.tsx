// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div style={{ position: 'relative', width: isSidebarOpen ? '250px' : '50px', height: '100vh' }}>
      <nav>
        {isSidebarOpen &&
          <ul>
            ...
          </ul>
        }
        <style jsx>{`
          nav {
            width: 100%;
            height: 100%;
            background-color: #f5f5f5;
            overflow: auto;
            transition: width 0.5s ease;
          }
        `}</style>
      </nav>
      <button onClick={toggleSidebar} style={{ position: 'absolute', right: '-20px', top: '0', backgroundColor: 'red' }}>
        {isSidebarOpen ? '<' : '>'}
      </button>
    </div>
  )
}
