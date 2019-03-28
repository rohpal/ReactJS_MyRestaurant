import React from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact/Contact';
import Booking from './Booking/Booking';
import Menu from './Menu/Menu';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

    render(){
        return(
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/booking" component={Booking}/>
                    <Route exact path="/menu" component={Menu}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }

} 

export default App;