import Footer from 'componentes/Footer';
import Navbar from 'componentes/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';
import home from 'media/home.png'

const PrivateLayout = ({ children }) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar/>
            <main className="h-full overflow-y-scrol">
                <Link to='/'>
                    <img src={home}  alt='imagen' className='h-9 w-9 mx-3 my-3 cursor-pointer hover:text-blue-600'/>    
                </Link>
                {children}</main>
            <Footer />
        </div>
    );
};

export default PrivateLayout;
