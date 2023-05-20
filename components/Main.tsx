// components/Main.tsx

export default function Main({ isSidebarOpen }) {
  return (
    <main>
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
