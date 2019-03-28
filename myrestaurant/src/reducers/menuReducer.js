
const initState = {
    menu:
    [
        {name: "Chicken Biryani", price:"100", type:"non-veg" },
        {name: "Veg Biryani", price:"80", type:"veg" }
    ]
    
    
}

export default (state=initState, action) => {
    
    switch(action.type){
        case "GET_MENU":
         return state;
        default:  
         return state;  
    }
}