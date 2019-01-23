/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import demoContentPrimary from '@ecl/ec-specs-radio/demo/data--default';

import Radio from '../Radio';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('primary', () => (
    <Radio
      variant="primary"
      label={text('Label', demoContentPrimary.label)}
      type="submit"
      disabled={boolean('Disabled', false)}
    />
  ));
