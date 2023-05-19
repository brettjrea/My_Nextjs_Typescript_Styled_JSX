import Link from 'next/link'

export default function Sidebar({ isSidebarOpen }) {
  if (!isSidebarOpen) return null;
  
  return (
    <nav>
      <ul>
        <li><Link href="/about">About</Link></li>
        {/* Add more navigation links here */}
      </ul>
    </nav>
  )
}
