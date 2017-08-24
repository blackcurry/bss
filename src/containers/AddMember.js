import React from 'react';
import { AddMemberView } from 'components';

class AddMember extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div>
            <AddMemberView />
        </div>
    );
  }
};

export default AddMember;
