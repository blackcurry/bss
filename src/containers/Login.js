import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Auth } from 'components';
import { loginRequest } from 'actions/auth';


class Login extends React.Component {
  constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(id, pw){
    return this.props.loginRequest(id, pw).then(
      () => {
        if(this.props.status === "SUCCESS"){
          let loginData = {
            isLoggedIn: true,
            username: id
          };

          document.cookie = 'key=' + btoa(JSON.stringify(loginData));

          Materialize.toast('Welcome, ' + id + '!', 2000);
          browserHistory.push('/admin');
          return true;
        } else {
          let $toastContent = $('<span style="color: #FFB4BA">Incorrect username or password</span>');
          Materialize.toast($toastContent, 2000);

          return false;
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Auth onLogin = {this.handleLogin}/>
      </div>
    );
  }
}
// export default Login;
const mapStateToProps = (state) => {
  return {
    status: state.auth.login.status
  }
}

//redux setting
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (id, pw) => {
      return dispatch(loginRequest(id, pw));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
