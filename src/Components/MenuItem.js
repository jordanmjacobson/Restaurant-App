import React, { Component } from 'react'
import {addItem} from '../Actions';
import reducer from '../Reducers'; 
import {store} from '../Store'
import {connect} from 'react-redux'
import App from '../App';


class MenuItem extends React.Component{
    constructor(props){
        super(props)
        this.addToOrder = this.addToOrder.bind(this)

    }
    addToOrder(item){
        setTimeout(() => {
            //const cartItem = {}
            //cartItem[itemName] = itemPrice
            this.props.addToCart(item);
            console.log(this.props.cart);
            console.log(Object.keys(this.props.cart))
            //console.log(this.props.cart[itemName])
        }, 10)
       
    }

    render(){
        return(
            <div>
               <p>
                   {this.props.name}: {' '}
                   {this.props.price}
                   <button onClick = {() => this.addToOrder(this.props.name)}>Add to order!</button>
               </p>
            </div>
        );
    }
};

const mapStateToProps = (state) =>{
    return{
        cart: state.orders.shoppingCart
    };
}

const  mapDispatchToProps = (dispatch) =>{
    return{
        addToCart: item => dispatch(addItem(item)),
    };
}

export default connect(mapStateToProps,  mapDispatchToProps)(MenuItem)

//export default MenuItem

