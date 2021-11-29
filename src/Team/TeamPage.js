import React from "react";
import DV from "./Photos/DV.jpeg";
import TF from "./Photos/TF.jpg";
import TR from "./Photos/TR.jpg";
import MS from "./Photos/MS.jpg";
import "./TeamPage.css";

function TeamPage (){
    return(
        <>
        <h2>Developer Team</h2>
        <div className="team-container">
            <div className="team-card">
            <img src={TF} alt="pic" />
            <h2>Tiffany Fong</h2>
            <ul>
                <h3>Passions</h3>
                <li> Cardio  </li>
                <li>Cooking</li>
                <h3>Contribution</h3>
                <li>Back-End</li>
                <li>Concept</li>
            </ul>
            </div>

            <div className="team-card">
            <img src={MS} alt="pic" />
            <h2>Marco Silva</h2>
            <ul>
                <h3>Passions</h3>
                <li>Motorcycles</li>
                <li>Crypto</li>
                <h3>Contribution</h3>
                <li>Front-End Structure</li>
            </ul>
            </div>

            <div className="team-card">
            <img src={DV} alt="pic" />
            <h2>Diana Villada</h2>
            <ul>
                <h3>Passions</h3>
                <li>Yoga</li>
                <li>Traveling</li>
                <h3>Contribution</h3>
                <li>CSS Styling</li>
                <li>Front-End Components</li>
            </ul>
            </div>

            <div className="team-card">
            <img src={TR} alt="pic" />
            <h2>Trendon Robinson</h2>
            <ul>
                <h3>Passions</h3>
                <li>Programming</li>
                <li>Reading</li>
                <h3>Contribution</h3>
                <li>Front-End Functionality</li>
            </ul>
            </div>

        </div>
        </>

    )




}

export default TeamPage;