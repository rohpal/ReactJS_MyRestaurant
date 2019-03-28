import React from 'react';
import homeVideo from '../videos/home1.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <img src={homeVideo} alt="home" className="card-img"/>
            <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{zIndex:'1'}}>
                <h1 className="text-white font-italic">My Restaurant</h1>
            </div>
            <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{zIndex:'1'}}>
                <Link to="/booking" style={{marginTop:'15%'}}>
                <button type="button" className="btn btn-outline-light">
                    Make a Reservation
                </button>
                </Link>
            </div>
            
        </div>
    );
}

export default Home;