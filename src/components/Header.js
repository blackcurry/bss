import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    const loginButton = (
          <li>
            <Link to="/login">
                <i className="material-icons">vpn_key</i>
            </Link>
          </li>
      );

      const logoutButton = (
          <li>
            <a onClick={this.props.onLogout}>
              <i className="material-icons">lock_open</i>
            </a>
          </li>
      );

      return (
        <nav>
          <div className="nav-wrapper darken-1">
            <Link to="/" className="brand-logo center">Book Sharing System</Link>
            <div className="right">
              <ul>
                <li>{ this.props.isLoggedIn ? `Welcome ${this.props.currentUser}` : undefined }</li>
                { this.props.isLoggedIn ? logoutButton : loginButton }
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
