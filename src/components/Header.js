import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { render } from '@testing-library/react';

import menuLinksData from './data/menu_links.json';

class Header extends React.Component {
    render() {
        return (
            <header id="intro">
            <article className="fullheight">
              <div className="hgroup">
                <h1>Landon Hotel</h1>
                <h2>West London</h2>
                <p><a href="#welcome"><img src="images/misc/arrow.png" alt="down arrow"/></a></p>
              </div>
            </article>
            <nav id="nav">
              <div className="navbar">
                <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                <ul>
                  {
                    menuLinksData.map((link) => 
                      <li><a className={`icon ${link.className}`} href={link.href}><span>{link.text}</span></a></li>
                    )
                  }

                </ul>
              </div>
           </nav>
            </header>
        );
    }
}

export default Header;
