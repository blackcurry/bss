import React from 'react';
import { Link } from 'react-router';

class AdminView extends React.Component {

    constructor(props) {
      super(props);
    }


    render() {
      return(
        <div className="container">
          <h2>Site Administrator</h2>
          <div className="row">
            <div className="col s12 red lighten-3"><h5>Authentication and Authorization</h5></div>
            <div className="col s12 red lighten-4">
              <div>
                <Link to="/adminMember" className="blue-text text-darken-2"><i className="material-icons small">person</i>User</Link>
                <Link to="/changeMember" className="secondary-content"><i className="material-icons small">create</i>Change</Link>
                <Link to="/addMember" className="secondary-content"><i className="material-icons small">add</i>Add</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 red lighten-3"><h5>Book Sharing System</h5></div>
              <div className="col s12 red lighten-4">
                <Link to="/book" className="blue-text text-darken-2"><i className="material-icons small">book</i>Book Lendings</Link>
              </div>
              <div className="col s12 red lighten-4 right">Book Reservings
                <a href="##!" className="secondary-content"><i className="material-icons">Change</i></a>
                <a href="#!" className="secondary-content"><i className="material-icons">Add</i></a>
              </div>
              <div className="col s12 red lighten-4 right">Books
                <a href="##!" className="secondary-content"><i className="material-icons">Change</i></a>
                <a href="#!" className="secondary-content"><i className="material-icons">Add</i></a>
              </div>
              <div className="col s12 red lighten-4 right">Configurations
                <a href="##!" className="secondary-content"><i className="material-icons">Change</i></a>
                <a href="#!" className="secondary-content"><i className="material-icons">Add</i></a>
              </div>
              <div className="col s12 red lighten-4 right">Profiles
                <a href="##!" className="secondary-content"><i className="material-icons">Change</i></a>
                <a href="#!" className="secondary-content"><i className="material-icons">Add</i></a>
              </div>
          </div>
        </div>
      );
    }
}


export default AdminView;
