import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    
    return (
        <div className={`min-h-screen flex flex-col ${isContactPage ? 'bg-white' : 'bg-slate-950'}`}>
            <Header />
            {/* Main content area with padding for fixed header */}
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
