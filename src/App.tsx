import React from 'react';
import './App.css';
import backgroundImage from './image-backgound1.png';

function App() {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) center/cover`
  };

  return (
    <div className="app">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#collection">COLLECTION</a></li>
            <li><a href="#roadmap">ROADMAP</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="hero-section" style={heroStyle}>
        <div className="content">
          <h1>BIKINI BOTOM</h1>
          <div className="text-container">
            <article className="welcome-text">
              <div>Welcome to Bikini</div>
              <div>Bottom Adventures -</div>
              <div>the hottest NFT</div>
              <div>collection in the universe!</div>
            </article>
          </div>
          <p className="collect-text">
            Collect unique NFTs, unlock new <br />
            sensations, and share the joy of gaming. <br />
            Dive into a world of nostalgia and <br />
            endless fun! <br />
          </p>
          <p className="join-text">
            Join us on an <br />
            exciting journey <br />
            with SpongeBob <br />
            and his friends. <br />
          </p>
          <button className="cta-button">SEE MORE NFT COLLECTION</button>
        </div>
      </main>
    </div>
  );
}

export default App;
