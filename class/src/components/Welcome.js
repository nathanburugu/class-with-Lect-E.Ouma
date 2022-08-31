import React,{ Component } from "react";

class Welcome extends Component {
    render(){
         return(
        <h2>{this.props.name} is the senior most member of the group</h2>
    )
    }
} 
export default Welcome