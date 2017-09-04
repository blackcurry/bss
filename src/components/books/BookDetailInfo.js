import React from 'react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router';

class BookDetailInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSearch(){
    }

    render() {

        return(
          <div className="card blue-grey darken-1">
            <div className="info white-text">
              <h5>도서명</h5>
            </div>
            <div className="card-action">
              <a>{this.props.author}</a>
              <a>{this.props.publisher}</a>
              <a>{this.props.pubdate}</a>
            </div>
          </div>
        );
    }
}


export default BookDetailInfo;
