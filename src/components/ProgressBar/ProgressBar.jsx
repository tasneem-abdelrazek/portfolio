import React from "react";
import "./ProgressBar.css";


class ProgressBar extends React.Component {
  render() {
    const { skill, level } = this.props;

    return (
      <div className="skill-container">
        <span className="skill-label">{skill}</span>
        <div className="progress-bar-wrapper">
          <div className="progress-bar-fill" style={{ width: `${level}%` }}>
            <span className="progress-text">{level}%</span>
          </div>
        </div>
      </div >
    );
  }
}

export default ProgressBar;
