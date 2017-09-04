import React from 'react';
import { BookRegisterView } from 'components';
import { BookRegisterDetailView } from 'components';
import { connect } from 'react-redux';
import { getBookListExtAPI } from 'actions/book';
import { getRegisterBookSelect } from 'actions/book';


class BookRegister extends React.Component {
  constructor(props) {
      super(props);
      this.handleBookSearchExt = this.handleBookSearchExt.bind(this);
      this.handleRegisterBookSelect = this.handleRegisterBookSelect.bind(this);
  }

  handleBookSearchExt(bookname){
    return this.props.getBookListExtAPI(bookname).then(
      () => {
        if(this.props.searchExtStatus === 'SUCCESS'){
          if(this.props.bookData.length > 0){
            Materialize.toast('REGISTER SUCCESS', 2000);
          } else {
            Materialize.toast('REGISTER RESULT', 2000);
          }
        }
      }
    );
  }

  handleRegisterBookSelect(data){
    this.props.getRegisterBookSelect(data);
  }

  render() {
    return (
        <div>
          <BookRegisterView
            onSearchBookExt={this.handleBookSearchExt}
            onRegisterBookSelect={this.handleRegisterBookSelect}
            bookData={this.props.bookData}/>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      bookData: state.book.bookData,
      searchExtStatus: state.book.searchExtStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBookListExtAPI: (bookname) => {
            return dispatch(getBookListExtAPI(bookname));
        },
        getRegisterBookSelect: (bookdata) => {
            return dispatch(getRegisterBookSelect(bookdata));
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookRegister);
