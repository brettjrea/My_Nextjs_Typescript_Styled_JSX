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
          text-shadow: ${isDarkMode ? '-0.05rem -0.05rem 0.075rem rgba(0,0,0,0.5), 0.075rem 0.05rem 0.075rem rgba(0,0,0,0.5), -0.05rem -0.05rem 0.05rem rgba(255,255,255,255)' : '0.08rem 0.08rem 0.01rem rgba(0,0,0,0.25)'};
            }
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;