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
          background-color: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
          text-shadow: ${isDarkMode ? '.1rem -.06rem .07rem rgba(0,0,0,0.5), -.1rem -.06rem .07rem rgba(0,0,0,0.5), .07rem -.06rem .05rem rgba(255,255,255,0.7), -.07rem -.06rem .05rem rgba(255,255,255,0.7)' : '-0.1rem 0.1rem 0.1rem rgba(0,0,0,0.25)'};
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;