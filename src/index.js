import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Container Components
import { App, Login, Admin, AdminMember, AddMember,
  BookHome, BookList, BookDetail, BookRegister, BookLending, BookManagement,
  BookRegisterDetail
} from 'containers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="login" component={Login}/>
            <Route path="admin" component={Admin}/>
            <Route path="adminMember" component={AdminMember}/>
            <Route path="addMember" component={AddMember}/>
            <Route path="book" component={BookHome}>
              <IndexRoute component={BookList}/>
              <Route path="list" component={BookList}/>
              <Route path="lending" component={BookLending}/>
              <Route path="register" component={BookRegister}/>
              <Route path="registerdetail" component={BookRegisterDetail}/>
              <Route path="management" component={BookManagement}/>
              <Route path="detail" component={BookDetail}/>
            </Route>
        </Route>
    </Router>
  </Provider>, rootElement
);
