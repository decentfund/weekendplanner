import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusComponent from '../src/shared/StatusComponent';

storiesOf('StatusComponent', module)
  .add('default', () => <StatusComponent seed="Jeremy" size={10} scale={3} color="#dfe" bgColor="#ffe" spotColor="#abc" address="0xba7590098ad09ca35fde9ede64e58b72552bb10c" vote="yes" />)
  .add('owner', () => <StatusComponent seed="Alex" size={10} scale={3} color="#dfed3d" bgColor="#3g3f5" spotColor="#ad4fbc" address="0xba7590098ad09ca35fde9ede64e58b72552bb10c" vote="no" owner="it's you" />)
