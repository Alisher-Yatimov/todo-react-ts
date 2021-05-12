import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, IHeaderProps } from './Header';
import { theme } from '../../constants/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../../store/index';

export default {
    title: 'component/header',
    component: Header,
} as Meta;

const LightTemplate: Story<IHeaderProps> = (args) => (
    <Provider store={store}>
        <ThemeProvider theme={theme.light}>
            <Header {...args} />
        </ThemeProvider>
    </Provider>
);
const DarkTemplate: Story<IHeaderProps> = (args) => (
    <Provider store={store}>
        <ThemeProvider theme={theme.dark}>
            <Header {...args} />
        </ThemeProvider>
    </Provider>
);

export const Light = LightTemplate.bind({});

export const Dark = DarkTemplate.bind({});
