import React from 'react';
import { Link } from 'react-router';

class AdminMemberViewTemp extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
      <tbody>
        <tr>
          <td>Alvin</td>
          <td>Eclair</td><td/><td/>
          <td>$0.87</td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Jellybean</td>
          <td>$3.76</td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Lollipop</td>
          <td>$7.00</td>
        </tr>
        </tbody>
      </div>
    );
  }
}


export default AdminMemberViewTemp;
