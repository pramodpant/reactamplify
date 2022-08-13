import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { render } from '@testing-library/react';
import MainMenu from './MainMenu';
import HotelInfo from './HotelInfo';
import Rooms from './Rooms';
import Dining from './Dining';
import Events from './Event';

class Main extends React.Component {
    render() {
        return (
            <main id="wrapper">
              <MainMenu/>
              <HotelInfo/>
              <Rooms/>
              <Dining/>
              <Events/>
              <div className="scene fullheight" id="attractions">
                <article className="content">
                  <h1>Local Attractions</h1>
                    <p>Whether you’re a theater enthusiast, or enjoy epic shopping, or love to stroll and people watch, London’s West End has an endless opportunity to partake. The heart of London’s "Theatreland" offering the best in drama, comedy, and musical productions.</p>
                </article>
              </div>
          </main>
        );
    }
}

export default Main;