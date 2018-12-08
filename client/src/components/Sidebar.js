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

  clearSidenav(e) {
    e.preventDefault();
    let sidenav_elem = document.querySelector(".sidenav");
    let ins = window.M.Sidenav.getInstance(sidenav_elem);
    ins.close();
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
                  <span className="white-text name">Tyler Newman</span>
                </a>
                <a href="#email">
                  <span className="white-text email">
                    tylerjnewman18@gmail.com
                  </span>
                </a>
              </div>
            </li>
            <li>
              <Link to={"/surveys"} onClick={this.clearSidenav}>
                <i className="material-icons">dashboard</i>Dashboard
              </Link>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Account Controls</a>
            </li>
            <li>
              <a className="waves-effect" href="/api/logout">
                Logout
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
