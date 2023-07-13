import React from "react";
import "../CSS/Home.css";
import retro from "../images/image-retro-pcs.jpg";
import top from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";

const Home = () => {
  return (
    <>
      <header className="head">
        <section className="main">
          <div className="hero"></div>
          <div className="logo">
            <h1>The Bright Future of Web 3.0 ?</h1>
            <div className="read">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section className="new">
          <h1>New</h1>
          <article>
            <h3> Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <hr />
          <article>
            <h3> Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <hr />
          <article>
            <h3> Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
        </section>
      </header>
      <section className="flex">
        <div className="card">
          <div className="left">
            <img src={retro} alt="" />
          </div>
          <div className="right">
            <h1>01</h1>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <img src={top} alt="" />
          </div>
          <div className="right">
            <h1>02</h1>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="card">
          <div className="left">
            <img src={gaming} alt="" />
          </div>
          <div className="right">
            <h1>03</h1>
            <h4>The Growth of Gaming.</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
