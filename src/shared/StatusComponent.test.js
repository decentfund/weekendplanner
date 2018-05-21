import React from 'react';
import { shallow } from 'enzyme';
import { clipper, mapStateToProps, StatusComponent } from './StatusComponent';

const currentAccount = '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f';
describe('Clipper', () => {
  it('wrong address provided', () => {
    const adrs = '0294949c595';
    expect(clipper(adrs)).toBe('Invalid address');
  });

  it('clips address properly', () => {
    const adrs = '0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f';
    expect(clipper(adrs)).toBe('0x5e...ad9f');
  });
});

const stateNoMetamask = {
  accounts: {},
};

const stateCurrentAccount = {
  accounts: {
    0: currentAccount,
  },
};

const stateDifferentAccount = {
  accounts: {
    0: '0xaaaaaa',
  },
};

describe('Map to state owner', () => {
  it('sets props from mapStateToProps correctly if accounts is empty', () => {
    const resultProps = mapStateToProps(stateNoMetamask, {
      address: currentAccount,
    });
    expect(resultProps.owner).toEqual(false);
  });

  it('sets props from mapStateToProps correctly if current account is owner', () => {
    const resultProps = mapStateToProps(stateCurrentAccount, {
      address: currentAccount,
    });
    expect(resultProps.owner).toEqual(true);
  });
});

it('sets props from mapStateToProps correctly if current account is not owner', () => {
  const resultProps = mapStateToProps(stateDifferentAccount, {
    address: currentAccount,
  });
  expect(resultProps.owner).toEqual(false);
});

const setupComponent = props => <StatusComponent owner={false} {...props} />;

describe('<StatusComponent />', () => {
  it("doesn't render owner div for the current user", () => {
    const component = shallow(setupComponent());
    expect(component.contains('It&aposs you')).toEqual(false);
  });

  it('does render owner div for the current user', () => {
    const component = shallow(setupComponent({ owner: true }));
    expect(component.contains("It's you")).toEqual(true);
  });
});
