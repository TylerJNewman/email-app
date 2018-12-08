import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    console.log("yay");
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <a href="/surveys">Dashboard</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav className="blue darken-2">
        <div className="container">
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="left brand-logo"
            >
              React-Email
            </Link>
            <a
              href="#"
              data-target="slide-out"
              className="button-collapse
              show-on-large right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
            {this.renderContent()}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = auth => auth;

export default connect(mapStateToProps)(Header);
