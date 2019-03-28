import React from 'react';

const ContactUs = () => {
    return(
        <div>
            <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'30%'}}>
                <h1 className="text-white font-italic">Contact Us</h1>
            </div>
            
            <div className="card-img-overlay d-flex align-items-center" style={{marginTop:'8%'}}> 
                <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'20%', marginTop:'10%' }}>
                    <i className="material-icons" style={{color:'white'}}>location_city</i>
                    <div style={{color:'white', marginLeft:'10%'}}>
                        <b>64 Wingram St.
                        Paramatta, Sydney
                        NSW 2217</b>
                    </div>
                </div>
                <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'20%', marginTop:'20%' }}>
                    <i className="material-icons" style={{color:'white'}}>local_phone</i>
                    <div style={{color:'white', marginLeft:'10%'}}>
                        <b>+61 444 777 888</b>
                    </div>
                </div>
                <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'20%', marginTop:'30%' }}>
                    <i className="material-icons" style={{color:'white'}}>email</i>
                    <div style={{color:'white', marginLeft:'10%'}}>
                        <b>contact_us@restaurant.com.au</b>
                    </div>
                </div>
                <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'20%', marginTop:'40%' }}>
                    <i className="material-icons" style={{color:'white'}}>access_time</i>
                    <div style={{color:'white', marginLeft:'10%'}}>
                        <b>Monday to Sunday 10 AM to 8 PM</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;