import { configure } from '@storybook/react';

configure(require.context('../src/storybooks/', true, /\**\.stories\.js$/), module);
