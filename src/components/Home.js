import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Home.scss'


const Home = () => {
    return (
        <div className = "home">
           <div className="hero">
               <h2>Premium<span>Saxophones</span></h2>
               <Link to = "/shop">Discover Now</Link>
           </div>
        </div>
    );
};

export default Home;