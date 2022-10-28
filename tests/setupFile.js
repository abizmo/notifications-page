import { setGlobalConfig } from '@storybook/testing-react';
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

import * as globalStorybookConfig from '../.storybook/preview.cjs';

setGlobalConfig(globalStorybookConfig);
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);
