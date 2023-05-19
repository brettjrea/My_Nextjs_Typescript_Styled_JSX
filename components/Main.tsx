// components/Main.tsx

export default function Main({ isSidebarOpen }) {
  return (
    <main>
      {/* Insert the main content of your site here */}
      <h1>Welcome to Brett J Rea's Portfolio</h1>
      <p>...</p>

      <style jsx>{`
        main {
          margin-left: ${isSidebarOpen ? '250px' : '0'};
          padding: 1em;
          transition: margin-left 0.5s ease;
        }
      `}</style>
    </main>
  )
}
