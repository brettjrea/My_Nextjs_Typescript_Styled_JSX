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
        <div style={{width: isSidebarOpen ? 'calc(100% - 250px)' : '100%', transition: 'width 0.5s'}}>
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          {children}
        </div>
      </div>
      <style jsx>{`
        div {
          background-color: ${isDarkMode ? '#ccc' : '#888'};
          color: ${isDarkMode ? '#888' : '#ccc'};
          text-shadow: ${isDarkMode ? '-1px -1px 1px rgba(0,0,0,0.3), 1px 1px 1px rgba(255,255,255,0.5)' : '2px 2px 2px rgba(0,0,0,0.5)'};
      }
      }
        }
      `}</style>
    </div>
  );
}

export default Layout;

