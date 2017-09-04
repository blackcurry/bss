import React from 'react';
import TimeAgo from 'react-timeago';
import { browserHistory } from 'react-router';

class BookInfo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      // this.props.onRegisterBookSelect(this.props.bookdata.isbn);
      this.props.onRegisterBookSelect(this.props.bookinfo);
      browserHistory.push('/book/registerdetail');
    }

    render() {

        return(
          <h2>도서 목록</h5>
          <div className="card blue-grey darken-1" onClick={this.handleClick}>
            <div className="info white-text">
              <h5>{this.props.bookinfo.title}</h5>
            </div>
            <div className="card-action">
              <a>{this.props.bookinfo.author}</a>
              <a>{this.props.bookinfo.publisher}</a>
              <a>{this.props.bookinfo.pubdate}</a>
            </div>
          </div>
        );
    }
}


export default BookInfo;
