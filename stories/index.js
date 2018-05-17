import React from 'react';
import { storiesOf } from '@storybook/react';
import { Metamask } from '../src/user/layouts/metamask/MetamaskStatus';

require('./TextField.stories.js');
require('./Button.stories.js');
require('./NewEventAttendees.stories.js');
require('./StatusComponent.stories.js');

storiesOf('Metamask', module)
  .add('accounts not available', () => <Metamask accounts={[]} web3={{ status: 'initialized' }} />)
  .add('failed', () => <Metamask accounts={[]} web3={{ status: 'failed' }} />);
