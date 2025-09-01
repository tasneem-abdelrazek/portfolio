import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    constructor() {
        super()

    }


    render() {

        return (
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-1" href="#hero">T.S</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" active href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-4" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )

    }
}

export default NavBar


// import React from "react";
// import "./NavBar.css";
// import { Link } from "react-router-dom";

// class NavBar extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-lg px-5">
//         <div className="container-fluid">
//           <Link className="navbar-brand text-white fs-1" to="/">T.S</Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link active text-white fs-4" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white fs-4" to="/about">About</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white fs-4" to="/skills">Skills</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white fs-4" to="/portfolio">Portfolio</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white fs-4" to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default NavBar;
