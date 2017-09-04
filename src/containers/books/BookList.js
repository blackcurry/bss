import React from 'react';
import { BookListView } from 'components';
import { connect } from 'react-redux';
import { getSearchBookList } from 'actions/book';

class BookList extends React.Component {
  constructor(props) {
      super(props);
      this.handleBookSearch = this.handleBookSearch.bind(this);
  }
  handleBookSearch(bookname){
    return this.props.getSearchBookList(bookname).then(
      () => {
        if(this.props.searchStatus === 'SUCCESS'){
            Materialize.toast('SEARCH SUCCESS', 2000);
        } else {
            Materialize.toast('NO RESULT', 2000);
        }
      }
    );
  }

  render() {
    return (
        <div>
          <BookListView
            onSearchBook={this.handleBookSearch}
            bssBookData={this.props.bssBookData}/>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
      bssBookData: state.book.bssBookData,
      searchStatus: state.book.searchStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchBookList: (bookname) => {
            return dispatch(getSearchBookList(bookname));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
