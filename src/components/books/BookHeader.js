import React from 'react';
import { Link } from 'react-router';

class BookHeader extends React.Component {
  render() {
      return (
        <nav>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/book/list">목록</Link></li>
          <li><Link to="/book/lending">대여 예약</Link></li>
          <li><Link to="/book/register">등록</Link></li>
          <li><Link to="/book/management">도서관리</Link></li>
          <li><Link to="/book">설정</Link></li>
          <li><Link to="/book">이용안내</Link></li>
        </ul>
          <div className="nav-wrapper darken-1">
            <div className="left">
              <ul>
                <a className="dropdown-button" data-activates="dropdown1"><i className="material-icons right">menu</i></a>
              </ul>
            </div>
          <a className="brand-logo center">{this.props.subTitle}</a>
          <div className="right">
            <Link to="/book">
              <i className="material-icons">search</i>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default BookHeader;
