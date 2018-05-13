import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NewEventAttendees } from '../src/event/ui/NewEventAttendees';

storiesOf('NewEventAttendees', module)
  .add('default', () => <NewEventAttendees accounts={{}} />)
  .add('with current user', () => (
    <NewEventAttendees
      accounts={{ '0xba7590098ad09ca35fde9ede64e58b72552bb10c': true }}
      currentUserAddress="0xba7590098ad09ca35fde9ede64e58b72552bb10c"
      onAddClick={action('add more')}
    />
  ))
  .add('with several users', () => (
    <NewEventAttendees
      accounts={{
        '0xba7590098ad09ca35fde9ede64e58b72552bb10c': true,
        '0xE3FD62a14a96F6bB60Ef502d6D7604CB7b07a7c9': true,
        '0x6924b217F322a0DB8Bd4D941EFfC54F6a7ef2D97': true,
      }}
      onAddClick={action('add more')}
      onRemoveClick={action('on remove')}
      currentUserAddress="0xba7590098ad09ca35fde9ede64e58b72552bb10c"
    />
  ));
