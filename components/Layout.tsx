// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  isDarkMode: boolean,
  toggleTheme: () => void,
  isSidebarOpen: boolean,
  toggleSidebar: () => void,
  children: React.ReactNode,
};

const Layout: React.FC<LayoutProps> = ({ isDarkMode, toggleTheme, isSidebarOpen, toggleSidebar, children }) => {
  return (
    <div className={isDarkMode ? 'dark' : 'light'} style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div style={{ display: 'flex', flex: '1' }}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
        <div style={{width: '100%'}}>
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;