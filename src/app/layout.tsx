// /app/layout.js or /pages/_app.js
import React from 'react';
import './globals.css'; // Add your global styles if needed

export const metadata = {
  title: 'Casino Games',
  description: 'Choose from a variety of casino games!',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body 
        className="bg-cover bg-center h-screen m-0" 
        style={{ backgroundImage: 'url(/casino-background.png)' }} 
      >
        <header className="bg-black bg-opacity-70 p-5 text-center">
          <h1 className="text-white text-4xl">Welcome to the Casino Games</h1>
        </header>
        <main className="p-10 text-center text-white">
          {children} {/* This renders whatever is passed to the layout */}
        </main>
      </body>
    </html>
  );
};

export default Layout;
