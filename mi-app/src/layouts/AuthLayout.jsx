import Footer from 'componentes/Footer';
import Navbar from 'componentes/Navbar';
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar/>
            <main className="h-full overflow-y-scrol">{children}</main>
            <Footer />
        </div>
    );
};

export default AuthLayout;
