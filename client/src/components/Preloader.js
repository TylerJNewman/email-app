import React, { Component } from "react";
import { connect } from "react-redux";
import "./Preloader.css";

class Preloader extends Component {
  componentDidMount() {}

  initalizePreloader() {
    let preloader_elem = document.querySelector(".loader-container");
    if (preloader_elem) {
      let style = preloader_elem.style;
      const fade = () => {
        style.opacity = 0;
      };
      setTimeout(fade, 350);
      const cssDisplayNone = () => {
        style.display = "none";
      };
      setTimeout(cssDisplayNone, 2000);
    }
  }

  initializeBody() {
    let body_elem = document.querySelector("body");
    let body_style = body_elem.style;
    body_style.opacity = 1;
  }

  componentDidUpdate() {
    this.initalizePreloader();
    this.initializeBody(); // refactor to cache
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return;
      default:
        return (
          <div className="loader-container">
            <div className="loader preloader-wrapper big active">
              <div className="spinner-layer">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = auth => auth;

export default connect(mapStateToProps)(Preloader);
