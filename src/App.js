import React from 'react';
import './App.css';
import backgroundImage from './image-backgound1.png';
import './fonts/some-time-later.otf';

function App() {
  const heroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) center/cover`,
  };

  return (
    <div className="app">
      <header className="header">
        <nav>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#collection">COLLECTION</a>
            </li>
            <li>
              <a href="#roadmap">ROADMAP</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="hero-section" style={heroStyle}>
        <div className="content">
          <div>
            <div className="sponge-container">
              <img src="/spanch.png" alt="SpongeBob" className="sponge-image" />
            </div>
            <h1 className="hero-title">BIKINI BOTOM</h1>
            <div className="text-container">
              <article className="welcome-text">
                <div>Welcome to Bikini</div>
                <div>Bottom Adventures -</div>
                <div>the hottest NFT</div>
                <div>collection in the universe!</div>
              </article>
            </div>
          </div>
          <div className="text-description">
            <p className="collect-text">
              COLLECT UNIQUE NFTS, UNLOCK NEW <br />
              SENSATIONS, AND SHARE THE JOY OF GAMING.<br />
              DIVE INTO A WORLD OF NOSTALGIA AND <br />
              ENDLESS FUN!
            </p>
            <div className="right-content">
              <p className="join-text">
                JOIN US ON AN<br />
                EXCITING JOURNEY<br />
                WITH SPONGEBOB<br />
                AND HIS FRIENDS.
              </p>
              <button className="cta-button">SEE MORE NFT COLLECTION</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
