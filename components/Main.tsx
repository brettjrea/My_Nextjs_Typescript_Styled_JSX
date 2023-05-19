export default function Main({ children }) {
  return (
    <main>
      {children}
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
