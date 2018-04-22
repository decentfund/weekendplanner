import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../src/shared/TextField';

storiesOf('TextField', module)
  .add('default', () => <TextField />)
  .add('controlled', () => <TextField value="value" />)
  .add('placeholder', () => <TextField placeholder="placeholder" />);
