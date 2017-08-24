import React from 'react';

class AdminView extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          username: '',
          firstname: '',
          lastname: '',
          password: '',
          email: '',
          permission: 'NORMAL'

      };
      this.handleChange = this.handleChange.bind(this);
      this.handleRadioClick = this.handleRadioClick.bind(this);
      this.handleAddMember = this.handleAddMember.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    handleRadioClick(e) {
      // console.log(`NORMAL ${normal.id} and ${normal.checked}`);
      // console.log(`ADMIN ${admin.id} and ${admin.checked}`);
      let nextState = {};
      if(e.target.id == 'admin'){
        nextState['permission'] = 'ADMIN';
      } else {
        nextState['permission'] = 'NORMAL';
      }

      this.setState(nextState);
    }

    handleAddMember(){
      let memberData = {
        username: this.state.username,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        password: this.state.password,
        email: this.state.email,
        permission: this.state.permission
      };

      // console.log(`username: ${this.state.username}
      //             firstname: ${this.state.firstname}
      //             lastname: ${this.state.lastname}
      //             password: ${this.state.password}
      //             email: ${this.state.email}
      //             permission: ${this.state.permission}`);

      this.props.onAddMember(memberData).then(
          () => {
              this.setState({
                  memberData: []
              });
          }
      );

    }


    render() {
      return(
        <div className="container">
          <h2><span className="red-text text-lighten-2">Add User</span></h2>
          <div className="row">
            <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="username" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="username">User Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="firstname" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="lastname" type="text" className="validate" onChange={this.handleChange}/>
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="input-field inline">
                  <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                  <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                </div>
              </div>
            </div>
            <div className="row" >
              <p>
                <input name="group1" type="radio" id="normal" defaultChecked="checked" onClick={this.handleRadioClick}/>
                <label htmlFor="normal">Normal User</label>
              </p>
              <p>
                <input name="group1" type="radio" id="admin" onClick={this.handleRadioClick}/>
                <label htmlFor="admin">Admin User</label>
              </p>
            </div>
          </form>
        </div>
        <a className="waves-effect waves-light btn" onClick={this.handleAddMember}>TEST</a>
      </div>
    );
  }
}


export default AdminView;
