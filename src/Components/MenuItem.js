import React, { Component } from 'react'

export default class MenuItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <p>
                   {this.props.name}: {' '}
                   {this.props.price}
               </p>
            </div>
        );
    }
}
