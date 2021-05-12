import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { TodoCard, ICardProps } from './TodoCard';
import '../../index.css';

export default {
    title: 'component/TodoCard',
    component: TodoCard,
    argTypes: {
        done: {
            control: {
                type: 'boolean',
            },
        },
    },
} as Meta;

const Template: Story<ICardProps> = (args) => (
    <Provider store={store}>
        <TodoCard {...args} />
    </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
    id: 1,
    title: 'todo',
    done: false,
};
