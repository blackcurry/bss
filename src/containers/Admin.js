import React from 'react';
import { browserHistory } from 'react-router';
import { AdminView } from 'components';

class Admin extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div>
            <AdminView />
        </div>
    );
  }
};

export default Admin;
