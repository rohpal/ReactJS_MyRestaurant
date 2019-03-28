import React from 'react';
import bookingBG from '../../videos/booking1.jpg';

class Booking extends React.Component {
    render(){
        return(
            <div>
                <img src={bookingBG} alt="contact" className="card-img"/>
                <div className="card-img-overlay d-flex justify-content-center align-items-center" style={{ marginTop:'-25%'}}>
                    <h1 className="text-white font-italic">Reserve your seats</h1>
                </div>
                <div className="card-img-overlay d-flex align-items-center" style={{marginTop:'15%', marginLeft:'40%'}}> 
                    <form>
                    <div className="form-row">
                        <div className="form-group col-md-50 white-input">
                        <label htmlFor="inputFirstName"><b>First Name</b></label>
                        <input type="text" className="form-control bg-transparent" id="inputFirstName"/>
                        </div>

                        <div className="form-group col-md-50 white-input">
                        <label htmlFor="inputLastName"><b>Last Name</b></label>
                        <input type="text" className="form-control bg-transparent" id="inputLastName"/>
                        </div>
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-50 white-input">
                        <label htmlFor="inputDate"><b>Date</b></label>
                        <div className="input-group date" id="datetimepicker4" data-target-input="nearest" 
                        style={{marginLeft:'1%', width:'82%'}}>
                            <input id="inputDate" type="text" className="form-control datetimepicker-input bg-transparent" data-target="#datetimepicker4"/>
                            <div className="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                                <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                            </div>
                        </div>
                        </div>

                        <div className="form-group col-md-50 white-input">
                        <label htmlFor="inputDate"><b>Time</b></label>
                        <div className="input-group date" id="datetimepicker3" data-target-input="nearest" style={{marginLeft:'-15%',width:'82%'}}>
                            <input id="inputDate" type="text" className="form-control datetimepicker-input bg-transparent" data-target="#datetimepicker3"/>
                            <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                <div class="input-group-text"><i class="fa fa-clock"></i></div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="form-row">
                    <div class="form-group col-md-100 white-input">
                    <label for="inputEmail"><b>Email</b></label>
                    <input type="email" class="form-control bg-transparent" id="inputEmail" style={{width:'205%'}}/>
                    </div>
                    </div>


                    <div class="form-row" style={{marginTop:'5%'}}>
                    <div class="form-group col-md-50">
                    <button type="button" className="btn btn-outline-light">
                        <b>Book Now</b>
                    </button>
                    </div>
                    </div>
                    

                    </form>
                </div>
            </div>
            
        );
    }
}

export default Booking;