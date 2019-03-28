import React from 'react';
import { connect } from 'react-redux';
import { getMenu }  from '../../actions/';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 
import menuBG from '../../videos/menu1.jpg';

class Menu extends React.Component{
    
    componentDidMount(){
        this.props.getMenu();
        //console.log(this.state.getMenu());
        //console.log(this.props.menuList);
    }

    render(){
        console.log("render",this.props.menuList);
        
        const renderList = (foodType) => { 
            return this.props.menuList ?
             this.props.menuList.map( menu =>{
                if(menu.type===foodType){ 
                console.log("Step1",menu);
                console.log(menu.type, foodType)
                 return (
                        <div class="row">
                            <div class="col">{menu.name}</div>
                            <div class="col">${menu.price}</div>
                        </div>
                 );
                }
             })
            

        :  (<div>Loading</div>);
        }

        return(
            <div style={{position:'relative'}}>
                <img src={menuBG} alt="menu" className="card-img" style={{position:'absolute'}}/>
                <div className="card-img-overlay d-flex align-items-center" style={{marginLeft:'46%', marginTop:'3%'}}>
                    <h1 className="text-white font-italic">Menu</h1>
                </div>
                <div class="row container text-white font-italic card-img-overlay d-flex align-items-center" style={{ marginTop:'5%'}}>
                <div class="col" style={{marginLeft:'30%'}}>
                    <h4 className="text-white font-italic">Non Vegeterian</h4>
                    {renderList("non-veg")}
                </div>
                <div class="col">
                    <h4 className="text-white font-italic">Vegeterian</h4>
                    {renderList("veg")}
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops",state);
    return {
        menuList: state.firestore.ordered.menu
    };
}
export default compose(
    connect(mapStateToProps , {getMenu}),
    firestoreConnect([
        {collection: 'menu'}
    ])
    )(Menu);