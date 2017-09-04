import React from 'react';
import { browserHistory } from 'react-router';

class BookRegisterDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentDidMount() {
      if(this.props.bookinfo.title === ''){
        browserHistory.push('/book/register');
      }
    }
    /* registerBook: {
        title: '',
        link: '',
        image: '',
        author: '',
        price: '',
        discount: '',
        publisher: '',
        pubdate: '',
        isbn: '',
        description: ''
    } */
    handleRegister(){
      this.props.onBookRegister(this.props.bookinfo);
    }
    render() {
        return(
          <h2>도서 등록</h5>
          <div className="card blue-grey darken-1" >
            <div className="info white-text">
              <h5>{this.props.bookinfo.title}</h5>
            </div>
            <div className="row">
              <form className="col m5">
                <div className="card-image">
                  <img src={this.props.bookinfo.image}/>
                </div>
              </form>
            </div>
              <div className="card-content">
                <span className="card-title activator white-text text-darken-4">저자</span>
                <p><a className="orange-text">{this.props.bookinfo.author}</a></p>
                <span className="card-title activator white-text text-darken-4">출판사</span>
                <p><a className="orange-text">{this.props.bookinfo.publisher}</a></p>
                <span className="card-title activator white-text text-darken-4">가격</span>
                <p><a className="orange-text">{this.props.bookinfo.price}</a></p>
                <span className="card-title activator white-text text-darken-4">할인가</span>
                <p><a className="orange-text">{this.props.bookinfo.discount}</a></p>
                <span className="card-title activator white-text text-darken-4">ISBN</span>
                <p><a className="orange-text">{this.props.bookinfo.isbn}</a></p>
                <span className="card-title activator white-text text-darken-4">설명</span>
                <p><a className="orange-text">{this.props.bookinfo.description}</a></p>
                <br/>
                <a onClick={this.handleRegister} className="waves-effect waves-light btn">도서등록</a>
              </div>
          </div>
        );
    }
}


export default BookRegisterDetailView;
