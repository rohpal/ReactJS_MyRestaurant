import React from 'react';
import ContactUs from './ContactUs';
import ContactBG from '../../videos/contact1.jpg';
import SendFeedback from './SendFeedback';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <img src={ContactBG} alt="contact" className="card-img"/>
                <div className="container" style={{marginTop:'-50%', zIndex:'2'}}>
                    <div class="row">
                    <div className="col-sm">
                        <ContactUs/>
                    </div>
                    <div className="col-sm">
                        <SendFeedback/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;