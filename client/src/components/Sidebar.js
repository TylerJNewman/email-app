import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Sidebar extends Component {
  componentDidMount() {}

  initalizeSidebar() {
    let sidenav_elem = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav_elem);
  }

  componentDidUpdate() {
    this.initalizeSidebar(); // refactor to cache
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <ul classNameName="" />;
      default:
        return (
          <ul id="slide-out" className="sidenav">
            <li>
              <div className="user-view">
                <div className="background">
                  <img src="img/ocean.jpg" />
                </div>
                <a href="#user">
                  <img className="circle" src="img/person1.jpg" />
                </a>
                <a href="#name">
                  <span className="white-text name">John Doe</span>
                </a>
                <a href="#email">
                  <span className="white-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons">cloud</i>First Link With Icon
              </a>
            </li>
            <li>
              <a href="#!">Second Link</a>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Subheader</a>
            </li>
            <li>
              <a className="waves-effect" href="#!">
                Third Link With Waves
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = auth => auth;

export default connect(mapStateToProps)(Sidebar);
