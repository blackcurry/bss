import React from 'react';
import { BookRegisterDetailView } from 'components';
import { connect } from 'react-redux';
import { postBookRegister } from 'actions/book';
import { browserHistory } from 'react-router';

class BookRegisterDetail extends React.Component {
  constructor(props) {
      super(props);
      this.postBookRegister = this.postBookRegister.bind(this);
  }

  postBookRegister(bookinfo){
    return this.props.postBookRegister(bookinfo).then(
      () => {
        if(this.props.registerStatus === 'SUCCESS'){
            Materialize.toast('SEARCH SUCCESS', 2000);
            browserHistory.push('/book/register');
        }
      }
    );
  }

  render() {
    return (
        <div>
            <BookRegisterDetailView
              onBookRegister={this.postBookRegister}
              bookinfo={this.props.registerBook}/>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      registerBook: state.book.registerBook,
      registerStatus: state.book.registerStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postBookRegister: (id, pw) => {
            return dispatch(postBookRegister(id,pw));
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BookRegisterDetail);
