import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <header className="head">
      <section className="main">
        <div className="hero"></div>
        <div className="logo">
          <h1>The Bright Future of Web 3.0 ?</h1>
          <div className="read">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button>Read More</button>
          </div>
        </div>
      </section>
      <section className="new">
        <h1>New</h1>
        <article>
            <h3>  Hydrogen VS Electric Cars</h3>
            <p>  Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <hr/>
        <article>
            <h3>  Hydrogen VS Electric Cars</h3>
            <p>  Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
        <hr />
        <article>
            <h3>  Hydrogen VS Electric Cars</h3>
            <p>  Will hydrogen-fueled cars ever catch up to EVs?</p>
        </article>
      </section>
    </header>
  );
};

export default Home;
