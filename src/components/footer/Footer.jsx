import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <p className="madeWith">Made with ❤️ by Sahil Sandi</p>
                <div className="infoText">
                    <p>Discover the world of movies with our curated collection! Explore a vast selection of films from various genres, release years, and ratings. Get detailed information, captivating summaries, and stunning posters for each movie, all powered by the TMDB API. Find your next cinematic adventure today!</p>
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/sahil.sandi.581/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/sahil.sandi.07/" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/sandi_sahil" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/sahilsandi" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
