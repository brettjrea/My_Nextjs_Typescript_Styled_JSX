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
    <div className={isDarkMode ? 'dark' : 'light'} style={{height: '100vh', display: 'flex', flexDirection: 'column', transition: 'margin-left 0.5s', marginLeft: isSidebarOpen ? '250px' : '0px'}}>
      <div style={{ display: 'flex', flex: '1' }}>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
        <div style={{width: '100%'}}>
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          {children}
        </div>
      </div>
      <style jsx>{`
        div {
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
        }
      `}</style>
    </div>
  );
}

export default Layout;
