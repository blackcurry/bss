import React from 'react';
import { Header } from 'components';
import { connect } from 'react-redux';
import { logoutRequest } from 'actions/auth';
import { browserHistory } from 'react-router';


// import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
      super(props);
      this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogout() {
    this.props.logoutRequest().then(
      () => {
        Materialize.toast('Good Bye!', 2000);
        // EMPTIES THE SESSION
        let loginData = {
          isLoggedIn: false,
          username: ''
        };
        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
        browserHistory.push('/login');

      }
    );
  }

  render(){
    let re = /(login|register)/;
    let isAuth = re.test(this.props.location.pathname);

    return (
      <div>
        <Header isLoggedIn={this.props.status.isLoggedIn}
                onLogout={this.handleLogout}
                currentUser={this.props.status.currentUser}/>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        status: state.auth.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getStatusRequest: () => {
          return dispatch(getStatusRequest());
      },
      logoutRequest: () => {
          return dispatch(logoutRequest());
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
