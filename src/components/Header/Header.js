import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to our Fancy Routing Website</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/countries">Countries</CustomLink>
                <CustomLink to="/about">about</CustomLink>
                <CustomLink to="/contact">Contact us</CustomLink>

                {/* <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link> */}
            </nav>
        </div>
    );
};

export default Header;