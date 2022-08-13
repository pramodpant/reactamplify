import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { render } from '@testing-library/react';

class MainMenu extends React.Component {
    render() {
        return (
            <div className="scene" id="welcome">
            <article className="content">
              <div className="gallery">
                <img src="images/hotel/intro_room.jpg" alt="Gallery Room Sample Pictures"/>
                <img src="images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures"/>
                <img src="images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures"/>
                <img src="images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures"/>
                <img className="hidesm" src="images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures"/>
              </div>
              <h1>Welcome to the Landon&nbsp;Hotel</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
          </div>
        );
    }
}

export default MainMenu;