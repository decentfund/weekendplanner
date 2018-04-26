import React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from '../src/shared/DatePicker';

storiesOf('DatePicker', module)
  .add('default', () => <DatePicker type="date" />);
