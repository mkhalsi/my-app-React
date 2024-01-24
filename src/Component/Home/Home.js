import React, { Fragment } from "react";
import Header from "./Header.js";
import "./Home.css";
import prideimg from "./../../assests/header.jpg";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2> 1278+</h2>
              <h6> SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2> 6198+</h2>
              <h6> PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2> 1278+</h2>
              <h6> ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2> 1278+</h2>
              <h6> BLOBS</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} title="image"></img>
            </div>
            <div className="col-md-6">
              <h2>
            
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="#pride"></a> learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
