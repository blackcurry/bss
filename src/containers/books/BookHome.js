import React from 'react';
import { BookHeader } from 'components';

class BookHome extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        bookmenutitle : ''
      }
  }

  render() {
    return (
        <div>
            <BookHeader subTitle='북세어링~~'/>
            { this.props.children }
        </div>
    );
  }
};

export default BookHome;
