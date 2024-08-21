import React from 'react';
import "./globals.scss"; // Можно оставить здесь, если стили глобальны

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root">
      <header>
        
      </header>
      <main>{children}</main>
      <footer>
      
      </footer>
    </div>
  );
};

export default Layout;
