import React from 'react';
import { Link } from 'react-router-dom';

function HomePage () {
    return (
        <Link to='/pizza'>
            <button>Order Now!</button>
        </Link>
    );
};

export default HomePage;