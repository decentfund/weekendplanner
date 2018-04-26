import React from 'react';
import { storiesOf } from '@storybook/react';
import PercentageField from '../src/shared/PercentageField';

storiesOf('PercentageField', module)
  .add('default', () => <PercentageField type="range" />)
