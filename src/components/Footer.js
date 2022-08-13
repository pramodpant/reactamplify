import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { render } from '@testing-library/react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="scene">
            <article className="content">
              <div id="socialmedia">
                <ul className="group">
                  <li><a href="https://twitter.com"><img className="icon" src="images/socialmedia/twitter.png" alt="icon for twitter" /></a></li>
                  <li><a href="http://www.facebook.com"><img className="icon" src="/images/socialmedia/facebook.png" alt="icon for facebook" /></a></li>
                  <li><a href="http://www.youtube.com"><img className="icon" src="/images/socialmedia/youtube.png" alt="icon for youtube" /></a></li>    
                </ul>      
              </div>
            </article>
          </footer>
        );
    }
}

export default Footer;