// components/Sidebar.tsx
import Link from 'next/link'

export default function Sidebar({ isDarkMode }) {
  return (
    <div style={{ width: '250px', backgroundColor: isDarkMode ? '#333' : '#f5f5f5' }}>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      <style jsx>{`
        nav {
          padding: 1em;
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </div>
  )
}
