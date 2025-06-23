import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
                  <h1 className="title">Good Food Good Mood</h1>
          <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./Food2.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
{/*               <img className="logo" src="logo.svg" alt="logo" />Royal.png */}
{/*                          <img className="logo" src="Royal.png" alt="logo" /> */}
  <h1>Welcome To Royal Taste</h1>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
