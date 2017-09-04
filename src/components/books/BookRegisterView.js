import React from 'react';
import { Link } from 'react-router';
import { BookInfo } from 'components';

class BookRegisterView extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        bookname: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleBookSearchExt = this.handleBookSearchExt.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.id] = e.target.value;
        this.setState(nextState);
    }

    handleKeyPress(e) {
      if(e.key == 'Enter' ){
        this.handleSearch;
      }
    }

    handleBookSearchExt(){
      this.props.onSearchBookExt(this.state.bookname).then(
        (success) => {
          if(!success) {
            this.setState({
              bookname: ''
            });
          }
        }
      )
    }

    render() {
      const mapToComponents = data => {
        return data.map((book, i) => {
          return (
            <BookInfo
              bookinfo={book}
              key={i}
              onRegisterBookSelect={this.props.onRegisterBookSelect}
            />
          );
        });
      };

      return(
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Placeholder" id="bookname" type="text" className="validate"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange} />
                <label htmlFor="first_name" className="black-text">도서명 검색</label>
              </div>
              <div className="left">
                <ul>
                  <a className="waves-effect waves-light btn" onClick={this.handleBookSearchExt}>검색</a>
                </ul>
              </div>
            </div>
            <div>
              {mapToComponents(this.props.bookData)}
            </div>
          </form>
        </div>
      );
    }
}

export default BookRegisterView;
