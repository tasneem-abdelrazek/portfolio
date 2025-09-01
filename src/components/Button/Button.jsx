import React from "react";
import "./Button.css"



class MyButton extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            
            <button className="myBtn h-4" onClick={this.props.onClick}> {this.props.btnTitle} </button>
        )

}
}

export default MyButton