import { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Alert, { NotificationType } from '../../components/alert/Alert';
import { NOTIFICATION_TYPE } from '../../config/constants';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    notification: { control: 'object',
      description: `A notification object with 'message' and 'type' columns. Possible values of 'type' are warning, danger, primary, success.`
     },
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Alert>;

const exampleNotification = {
  message: 'Example notification message',
  type: NOTIFICATION_TYPE.INFO,
  alterationType: 'MUTATION'
};

export const Primary: Story = {
  args: {
    notification: exampleNotification,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    await expect(alert).toHaveClass(`alert-${args.notification.type}`);
    await expect(alert).toContainElement(canvas.getByTestId('alert-icon'));
    await expect(canvas.getByTestId('alert-icon')).toHaveClass(`fa fa-${NotificationType[args.notification.type]}`);
    await expect(alert).toHaveTextContent(args.notification.message);
  },
};

export const Danger: Story = {
  args: {
    notification: {
      message: 'Danger notification message',
      type: 'danger',
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    
    await expect(alert).toHaveClass(`alert-${args.notification.type}`);
    await expect(alert).toContainElement(canvas.getByTestId('alert-icon'));
    await expect(canvas.getByTestId('alert-icon')).toHaveClass(`fa fa-${NotificationType[args.notification.type]}`);
    await expect(alert).toHaveTextContent(args.notification.message);
  },
};

export const Warning: Story = {
  args: {
    notification: {
      message: 'Warning notification message',
      type: 'warning',
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    
    await expect(alert).toHaveClass(`alert-${args.notification.type}`);
    await expect(alert).toContainElement(canvas.getByTestId('alert-icon'));
    await expect(canvas.getByTestId('alert-icon')).toHaveClass(`fa fa-${NotificationType[args.notification.type]}`);
    await expect(alert).toHaveTextContent(args.notification.message);
  },
};

export const Success: Story = {
  args: {
    notification: {
      message: 'Success notification message',
      type: 'success',
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole('alert');
    
    await expect(alert).toHaveClass(`alert-${args.notification.type}`);
    await expect(alert).toContainElement(canvas.getByTestId('alert-icon'));
    await expect(canvas.getByTestId('alert-icon')).toHaveClass(`fa fa-${NotificationType[args.notification.type]}`);
    await expect(alert).toHaveTextContent(args.notification.message);
  },
};
