import React, {Component} from 'react';

export default class Header extends Component {
    render() {

        return (
            <header id="home">
                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul  id="nav" className="nav"> 
                        <li className="current"><a className="smoothscroll">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className = "row banner">
                    <div className = "banner-text">
                        <h1 className = "responsive-headline">I'm Firdaus!</h1>
                    </div>
                    <ul className = "social">

                    </ul>
                </div>
            </header>
        );

    }


}