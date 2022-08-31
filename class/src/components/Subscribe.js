import { Component } from "react";

class Subscribe extends Component {
    state = {message:'Welcome To Our Site:'}
    changeMessage(){
        this.setState({
            message:'Thank You For Joining Us..'
        })
    }
    render() {
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe to Our Newsletter</button>
            </>
        )
    }
} 
export default Subscribe