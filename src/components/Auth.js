import React from 'react';
import { Link } from 'react-router';

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }

    handleLogin() {
        let id = this.state.username;
        let pw = this.state.password;

        this.props.onLogin(id, pw).then(
            (success) => {
                if(!success) {
                    this.setState({
                        password: ''
                    });
                }
            }
        );
    }


    handleKeyPress(e) {
        if(e.charCode ===13 )
          this.handleLogin();
    }

    render() {
        const inputBoxes = (
            <div>
                <div className="input-field col s12 username">
                    <label>Username</label>
                    <input
                    name="username"
                    type="text"
                    className="validate"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="input-field col s12">
                    <label>Password</label>
                    <input
                    name="password"
                    type="password"
                    className="validate"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}/>
                </div>
            </div>
        );

        const loginView = (
            <div>
                <div className="card-content">
                    <div className="row">
                        { inputBoxes }
                        <a onClick={this.handleLogin} className="waves-effect waves-light btn">SUBMIT</a>
                    </div>
                </div>


                <div className="footer">
                    <div className="card-content">
                        <div className="right" >
                        New Here? <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>

            </div>
        );

        return(
            <div className="container auth">
                <Link className="logo" to="/">BSS</Link>
                <div className="card">
                    <div className="header blue white-text center">
                        <div className="card-content">LOGIN</div>
                    </div>
                    { loginView }
                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    onLogin: React.PropTypes.func,
};

Auth.defaultProps = {
    onLogin: (id, pw) => { console.error("onLogin not defined"); },
};

export default Auth;
