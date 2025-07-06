import React from 'react';
import './App.css';
import './fonts/some-time-later.otf';
import image6 from './6.png';

function App() {
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
      <main className="hero-section">
        <div className="content">
          <div>
            <h1 className="hero-title">BIKINI BOTOM</h1>
            <div className="text-container">
              <article className="welcome-text">
                <div>Welcome to Bikini</div>
                <div>Bottom Adventures -</div>
                <div>the hottest NFT</div>
                <div>collection in the universe!</div>
              </article>
            </div>
            <div className="text-description">
              <p className="collect-text">
                COLLECT UNIQUE NFTS, UNLOCK NEW <br />
                SENSATIONS, AND SHARE THE JOY OF GAMING.
                <br />
                DIVE INTO A WORLD OF NOSTALGIA AND <br />
                ENDLESS FUN!
              </p>
              <div className="right-content">
                <p className="join-text">
                  JOIN US ON AN
                  <br />
                  EXCITING JOURNEY
                  <br />
                  WITH SPONGEBOB
                  <br />
                  AND HIS FRIENDS.
                </p>
                <button className="cta-button">SEE MORE NFT COLLECTION</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="images-section">
        <div className="images-container">
          <img src="/1.png" alt="Image 1" className="gallery-image" />
          <img src="/2.png" alt="Image 2" className="gallery-image" />
          <img src="/3.png" alt="Image 3" className="gallery-image" />
          <img src="/4.png" alt="Image 4" className="gallery-image" />
          <img src="/5.png" alt="Image 5" className="gallery-image" />
        </div>
      </section>

      <section className="image6-section">
        <div className="6-container">
          <img src={image6} alt="6" className="6" />
        </div>
        <h2 className="deep-ocean-text">DEEP OCEAN</h2>
        <h3 className="privileges-text">WITH THE UNIQUE PRIVILEGES OF OUR</h3>
        <h4 className="collection-text">
          <span className="yellow-text">COLLECTION</span>, YOU'LL BE AT THE FOREFRONT,{' '}
          <span className="yellow-text">ACCESSING THE BEST</span>
        </h4>
        <h5 className="games-text">
          <span className="yellow-text">GAMES</span>, EXCITING EVENTS, AND{' '}
          <span className="yellow-text">EXCLUSIVE PROMOTIONS</span>. ONLY HERE CAN YOU ENJOY
          UNPARALLELED EXPERIENCES & PARTICIPATE IN PRIZE GIVEAWAYS.
        </h5>
        <p className="community-text">
          IT'S A VIBRANT COMMUNITY OF
          <br />
          ENTHUSIASTS COMING
          <br />
          TOGETHER TO SHARE
          <br />
          EXPERIENCES AND CREATE
          <br />
          UNFORGETTABLE MEMORIES.
        </p>
      </section>

      <section className="line8-section">
        <div className="line8-container">
          <img src="/line8.png" alt="Line 8" className="line8-image" />
        </div>
      </section>

      <section className="mrkrabs-section"></section>
    </div>
  );
}

export default App;
