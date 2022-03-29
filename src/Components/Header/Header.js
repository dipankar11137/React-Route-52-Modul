import React from 'react';
import { Link } from 'react-router-dom';

import CustomLink from '../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my fancy routing web !!!</h1>
            <nav className=''>


                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>


                {/*  
               <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink> 
                */}
            </nav>
        </div>
    );
};

export default Header;