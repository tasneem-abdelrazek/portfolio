import React from "react";
import "./Footer.css"


class Footer extends React.Component {
    constructor() {
        super()

    }


    render() {

        return (
            <div className="footer text-center text-white py-2">
                <p>&copy; {new Date().getFullYear()} Tasneem Abdelrazek. All rights reserved.</p>
            </div>
        )

    }
}

export default Footer