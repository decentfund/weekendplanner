import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusComponent } from '../src/shared/StatusComponent';

storiesOf('StatusComponent', module)
  .add('default', () => (
    <StatusComponent address="0xba7590098ad09ca35fde9ede64e58b72552bb10c" vote="yes" />
  ))
  .add('owner', () => (
    <StatusComponent
      address="0xba7590098ad09ca35fde9ede64e58b72552bb10c"
      vote="no"
      owner="it's you"
    />
  ))
  .add('invalid address', () => (
    <StatusComponent address="0xba7590098ad09ca35fde9ede64e2552bb10c" />
  ))
  .add('passing explicit props', () => (
    <StatusComponent
      address="0xba7590098ad09ca35fde9ede64e58b72552bb10c"
      vote="yes"
      owner="it's you"
      seed="johnsnow"
      size={20}
      scale={3}
      color="#fafafa"
      bgColor="#ddd"
      spotColor="#FB6D56"
    />
  ));
