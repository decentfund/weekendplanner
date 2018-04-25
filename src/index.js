import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { DrizzleProvider } from 'drizzle-react';
// import { LoadingContainer } from 'drizzle-react-components';

// Layouts
import App from './App';
import HomeContainer from './layouts/home/HomeContainer';
import MetamaskStatus from './user/layouts/metamask/MetamaskStatus';

import store from './store';
import drizzleOptions from './drizzleOptions';

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions} store={store}>
    <MetamaskStatus>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} />
        </Route>
      </Router>
    </MetamaskStatus>
  </DrizzleProvider>,
  document.getElementById('root'), // eslint-disable-line
);
