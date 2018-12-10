import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <section id="hero">
      <div className="row">
        <div className="col l6">
          <div className="copy">
            <h1>
              <div className="step-trigger step-1 investing">Investing.</div>
              <div className="step-2">Without the risk.</div>
            </h1>
            <h4 className="summary step-3">
              Stock-Go lets you invest in the stock market with play money.
            </h4>
            <a
              className="waves-effect waves-light btn blue darken-2"
              href="/auth/google"
            >
              Login With Google
            </a>
          </div>
        </div>
        <div className="col l6">
          <div className="copy">
            <div className="card">
              <div className="card-image">
                <img src="img/temp_phone.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
