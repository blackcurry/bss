import React from 'react';
import { connect } from 'react-redux';
import { AddMemberView } from 'components';
import { addMemberRequest } from 'actions/auth';
import { browserHistory } from 'react-router';

class AddMember extends React.Component {
  constructor(props) {
      super(props);
      this.handleAddMember =  this.handleAddMember.bind(this);
  }

  handleAddMember(memberdata){
    return this.props.addMemberRequest(memberdata).then(
      () => {
        console.log(`RESULT ${this.props.status} AND ${this.props.error}`);
        if(this.props.status === "SUCCESS") {
          Materialize.toast('Success!', 2000);
          // browserHistory.push('/admin');
        } else {
        /*
        ERROR CODES
        1: NOT LOGGED IN
        2: EMPTY CONTENTS
        */
        let $toastContent;
        switch(this.props.error) {
          case 1:
          // IF NOT LOGGED IN, NOTIFY AND REFRESH AFTER
            $toastContent = $('<span style="color: #FFB4BA">You are not logged in</span>');
            Materialize.toast($toastContent, 2000);
            setTimeout(()=> {location.reload(false);}, 2000);
            break;
          case 2:
            $toastContent = $('<span style="color: #FFB4BA">Please write something</span>');
            Materialize.toast($toastContent, 2000);
            break;
          case 3:
            $toastContent = $('<span style="color: #FFB4BA">Username exists</span>');
            Materialize.toast($toastContent, 2000);
            break;
          default:
            $toastContent = $('<span style="color: #FFB4BA">Something Broke</span>');
            Materialize.toast($toastContent, 2000);
            break;
          }
        }
      }
    );
  }


  render() {
    return (
        <div>
            <AddMemberView onAddMember={this.handleAddMember}/>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    status: state.auth.add.status,
    error: state.auth.add.error
  }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addMemberRequest: (memberdata) => {
            return dispatch(addMemberRequest(memberdata));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
