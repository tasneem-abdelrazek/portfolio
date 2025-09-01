import React from "react";
import "./Title.css"


class Title extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <h2 className="title pt-4 w-50"> {this.props.TitleContent} </h2>
        )

    }
}

export default Title