import React from 'react';
import { Link } from 'react-router';

class AdminMemberView extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleMemberSearch = this.handleMemberSearch.bind(this);
    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }

    handleMemberSearch() {
      let searchusername = this.state.username;

      this.props.onMemberSearch(searchusername).then(
        (success) => {
          if(!success) {
            this.setState({
              username: ''
            });
          }
        }
      )
    }

    generateHeaders() {
        let cols = this.props.cols;  // [{key, label}]

        // generate our header (th) cell components
        return cols.map(function(colData) {
            return <th key={colData.key}> {colData.label} </th>;
        });
    }

    generateRows() {
        let cols = this.props.cols;  // [{key, label}]
        // let data = [
        //   {
        //         _id: 1,
        //       username: 'Cheese Pizza',
        //       password: 'Mozzarella',
        //       __v: 'Lobster',
        //       created: 5
        //   },
        //   {
        //         _id: 2,
        //       username: 'Papas Special',
        //       password: 'Parmesan',
        //       __v: 'Spinach',
        //       created: 50
        //   }
        // ];
        let data = this.props.memberData;
        return data.map(function(item) {
            // handle the column data within each row
            return (<tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.__v} </td>
              <td>{item.created}</td>
            </tr>);
        });
    }

    render() {
      let headerComponents = this.generateHeaders(),
          rowComponents = this.generateRows();

      const userList = (
        <div>
          <table>
            <thead> {headerComponents} </thead>
            <tbody> {rowComponents} </tbody>
          </table>
        </div>
      );

      return(
        <div>
          <h3>Select user to change</h3>
          <nav>
          <div className="nav-wrapper">
            <ul>
              <li><a><i className="material-icons">search</i></a></li>
              <li>
                <a>
                  <div className="input-field col s12 username">
                    <input name="username" type="text" className="validate"
                      value={this.state.username} onChange={this.handleChange}/>
                  </div>
                </a>
              </li>
              <li><a className="waves-effect waves-light btn" onClick={this.handleMemberSearch}>Search</a></li>
            </ul>
          </div>
        </nav>
        { userList }
      </div>
    );
  }
}

AdminMemberView.propTypes = {
    onMemberSearch: React.PropTypes.func,
    memberData: React.PropTypes.array,
    cols: React.PropTypes.array
};

AdminMemberView.defaultProps = {
  memberData : [
    {
      _id: '',
      username: '',
      password: '',
      __v: '',
      created: ''
    }
  ]
};

export default AdminMemberView;
