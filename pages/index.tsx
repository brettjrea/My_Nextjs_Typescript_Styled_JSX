//pages/index.tsx
function IndexPage() {
  return (
    <main>
      <h1>Hi there 👋</h1>
      <h2>My name is Brett. I love computers, the internet, and learning to program for them.</h2>
      <ul>
        <li>🔭 I’m currently working on getting my bachelor's in computer science.</li>
        <li>🌱 I’m currently taking Java III.</li>
        <li>👯 I’m looking to collaborate on anything cool and relevant.</li>
        <li>🤔 I’m looking for help with ...</li>
        <li>💬 Ask me about ...</li>
        <li>📫 How to reach me: ...</li>
        <li>😄 Pronouns: I'm a dude, He's a dude, She's a dude, We're all dudes, Hey!</li>
        <li>⚡ Fun fact: ...</li>
      </ul>
      <img src="https://my-github-readme-stats-steel.vercel.app//api?username=brettjrea&rank_icon=github&theme=transparent" alt="Brett J Rea's GitHub stats" width="100%" height="auto"/>
      <style jsx>{`
        main {
          padding: 1em;
          color: inherit;
          background: inherit;
          transition: all 1s ease;
        }
        ul {
          padding-right: 20px;
          list-style: none;
          font-size: 1.6rem;
        }
      `}</style>
    </main>
  )
}

export default IndexPage;
