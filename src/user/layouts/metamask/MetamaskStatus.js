import React, { Component, Children } from 'react';
import { drizzleConnect } from 'drizzle-react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

class Metamask extends Component {
  render() {
    if (this.props.web3.status === 'failed') {
      return (
        <Container className="container loading-screen">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>⚠️</h1>
              <p>
                This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity.
              </p>
            </div>
          </div>
        </Container>
      );
    }

    if (
      this.props.web3.status === 'initialized' &&
      Object.keys(this.props.accounts).length === 0
    ) {
      return (
        <Container className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>🦊</h1>
              <p>
                You need to login into your Metamask
              </p>
            </div>
          </div>
        </Container>
      );
    }
    if (this.props.children) {
      return Children.only(this.props.children);
    }
    return null;
  }
}
Metamask.defaultProps = {
  web3: {},
};
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    web3: state.web3,
  };
};
export { Metamask };
export default drizzleConnect(Metamask, mapStateToProps);
