// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  isDarkMode: boolean,
  toggleTheme: () => void,
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ isDarkMode, toggleTheme, children }) => {
  return (
    <div className={isDarkMode ? 'dark' : 'light'} style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div style={{ display: 'flex', flex: '1' }}>
        <Sidebar isDarkMode={isDarkMode} />
        <main style={{width: '100%', flex: '1', overflowY: 'auto'}}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
