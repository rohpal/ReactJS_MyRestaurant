import React from 'react';

const SendFeedback = () => {
    return(
        <div>
            <div className="card-img-overlay d-flex align-items-center">
                <h1 className="text-white font-italic">Send Feedback</h1>
            </div>
            <div className="card-img-overlay d-flex align-items-center" style={{marginTop:'45%', marginLeft:'7%'}}> 
            <form>
                <div class="form-row">
                    <div class="form-group col-md-50 white-input">
                    <label for="inputFirstName"><b>First Name</b></label>
                    <input type="text" class="form-control bg-transparent" id="inputFirstName"/>
                    </div>

                    <div class="form-group col-md-50 white-input">
                    <label for="inputLastName"><b>Last Name</b></label>
                    <input type="text" class="form-control bg-transparent" id="inputLastName"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-100 white-input">
                    <label for="inputEmail"><b>Email</b></label>
                    <input type="email" class="form-control bg-transparent" id="inputEmail" style={{width:'181%'}}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-100 white-input">
                    <label for="inputMessage"><b>Message</b></label>
                    <textarea class="form-control bg-transparent" id="inputMessage" style={{width:'205%', height:'150%', resize:'none'}}/>
                    </div>
                </div>
                <div class="form-row" style={{marginTop:'20%'}}>
                    <div class="form-group col-md-50">
                    <button type="button" className="btn btn-outline-light">
                        <b>Submit</b>
                    </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default SendFeedback;