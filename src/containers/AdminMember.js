import React from 'react';
import { AdminMemberView } from 'components';
import { connect } from 'react-redux';
import { getMemberList } from 'actions/admin';

class AdminMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cols : [
        { key: '_id', label: '_id' },
        { key: 'username', label: 'username' },
        { key: 'password', label: 'password' },
        { key: '__v', label: '__v' },
        { key: 'created', label: 'created' }
      ]
    };
    this.handleMemberSearch = this.handleMemberSearch.bind(this);

  }

  handleMemberSearch(username){
    return this.props.getMemberList(username).then(
      () => {
        if(this.props.searchStatus === 'SUCCESS'){
          if(this.props.memberData.length > 0){
            Materialize.toast('SEARCH SUCCESS', 2000);
          } else {
            Materialize.toast('NO RESULT', 2000);
          }
        }
      }
    );
  }

  render() {
    return (
        <div>
          <AdminMemberView
            onMemberSearch={this.handleMemberSearch}
            memberData = {this.props.memberData}
            cols = {this.state.cols}/>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      memberData: state.admin.memberData,
      searchStatus: state.admin.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMemberList: (username) => {
            return dispatch(getMemberList(username));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminMember);
