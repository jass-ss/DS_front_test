import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SampleButton } from './Button';

export default {
	title: 'Example/Button',
	component: SampleButton,
};

const Template: ComponentStory<typeof SampleButton> = () => <SampleButton />;

export const Primary = Template.bind({});
