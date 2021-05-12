import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IBtnProps } from './Button';
import { Variant } from '../../types/Variants';

export default {
    title: 'component/button',
    component: Button,
    argTypes: {
        width: {
            control: {
                type: 'range',
                options: {
                    min: 0,
                    max: 10,
                    step: 1,
                },
            },
        },
        height: {
            control: {
                type: 'range',
                options: {
                    min: 0,
                    step: 1,
                    max: 10,
                },
            },
        },
    },
} as Meta;

const Template: Story<IBtnProps> = (args) => <Button {...args} />;

const width = 3;
const height = 3;
const text = 'click me';

export const Primary = Template.bind({});
Primary.args = {
    variant: Variant.Primary,
    width,
    height,
    children: text,
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    variant: Variant.Secondary,
};

export const Danger = Template.bind({});
Danger.args = {
    ...Primary.args,
    variant: Variant.Danger,
};

export const Warning = Template.bind({});
Warning.args = {
    ...Primary.args,
    variant: Variant.Warning,
};
