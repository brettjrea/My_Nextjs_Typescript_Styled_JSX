// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isSidebarOpen }) {
  if (!isSidebarOpen) return null;
  
  return (
    <nav>
      <ul>
        <li><Link href="/about">About</Link></li>
        {/* Add more navigation links here */}
      </ul>

      <style jsx>{`
        nav {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 250px;
          background-color: #f5f5f5;
          overflow: auto;
        }
      `}</style>
    </nav>
  )
}
