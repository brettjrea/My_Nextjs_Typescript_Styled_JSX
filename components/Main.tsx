// components/Main.tsx

export default function Main({ isSidebarOpen }) {
  return (
    <main style={{marginLeft: isSidebarOpen ? '250px' : '0'}}>
      <h1>Welcome to Brett J Rea's Portfolio</h1>
      <p>...</p>

      <style jsx>{`
        main {
          padding: 1em;
          transition: margin-left 0.5s ease;
        }
      `}</style>
    </main>
  )
}
