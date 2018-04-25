import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';

const App = ({ children }) => <div className="App">{children}</div>;

App.defaultProps = {
  children: null,
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
