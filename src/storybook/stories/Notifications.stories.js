import { within, userEvent, expect } from '@storybook/test';
import Notification from './../../components/notifications/notifications';
import React from 'react';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    notifications:{
      control:'object',
        description: `A notification object with 'message' and 'type' fieldscolumns. Possible values of 'type' are warning, danger, primary, success.`
    },
    numNotifications: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      description: 'Number of notifications',
      type: 'number'
    },
  },
  tags: ['autodocs']
};

export default meta;

const types = ['primary', 'warning', 'danger', 'success'];

const generateNotifications = (num) => {
  return Array.from({ length: num }, (_, i) => ({
    message: `Notification ${i + 1}`,
    type: types[i%types.length],
  }));
};

export const Default = {
  args: {
    notifications: [
      { message: 'Notification 1', type: 'primary' },
      { message: 'Notification 2', type: 'success' },
    ],
  },
  play: async ({ canvasElement}) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('notification-icon'));
    expect(canvas.queryByTestId('notification-dropdown')).not.toBeInTheDocument();

    await userEvent.click(canvas.getByTestId('notification-icon'));

    expect(canvas.queryByTestId('notification-dropdown')).toBeInTheDocument();

    await userEvent.click(canvas.getByTestId('notification-icon'));
    expect(canvas.queryByTestId('notification-dropdown')).not.toBeInTheDocument();  },
};
export const CustomNotifications = {
  args: {
    numNotifications: 2,
  },
  render: (args) => <Notification notifications={generateNotifications(args.numNotifications)} />,
};