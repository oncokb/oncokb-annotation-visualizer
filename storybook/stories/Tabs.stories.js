import React from 'react';
import Tabs from '../../components/tabs/Tabs';
import Tab from '../../components/tabs/Tab';
import { within, userEvent, expect } from '@storybook/test';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'An array of React elements of type TabProps.',
    },
    defaultActiveKey: {
      description: 'The event key for the initially active tab.',
    },
    id: {
      description: 'An optional string to set the id of the Tabs component.',
    },
    className: {
      description: 'An optional string to add custom classes to the Tabs component.',
    },
    lastUpdate: {
      control:'date',
      description: 'A string representing the last update date.',
    },
    dataVersion: {
      description: 'A string indicating the version of the data.',
    },
    notifications: {
      description: `An array of NotificationImplication objects.      
      typeof notifications = {
        message: string;
        type: 'danger' | 'primary' | 'warning' | 'success';
        alterationType: string;
      }[];
  `,
    },
    
    bgColor: {
      description: 'The background color of the Tabs component.',
      control: 'color',
    },
  },
};

const notifications = [
  { message: 'Notification 2', type: 'warning' },
];

export const Default = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Tab 2'));
    expect(canvas.getByText('Tab 2 Content')).toBeInTheDocument();
    expect(canvas.queryByText('Tab 1 Content')).not.toBeInTheDocument();
    expect(canvas.queryByText('Tab 3 Content')).not.toBeInTheDocument();
  },
  render: (args) => (
    <Tabs
      defaultActiveKey="tab1"
      notifications={notifications}
      dataVersion="v1.0"
      lastUpdate="2024-06-27"
      {...args}
    >
      <Tab eventKey="tab1" title="Tab 1">
        Tab 1 Content
      </Tab>
      <Tab eventKey="tab2" title="Tab 2">
        Tab 2 Content
      </Tab>
      <Tab eventKey="tab3" title="Tab 3">
        Tab 3 Content
      </Tab>
    </Tabs>
  ),
};

export const CustomBackgroundAndTabs = (args) => {
  const { numTabs = 3, bgColor, ...rest } = args;

  const tabs = [];
  for (let i = 1; i <= numTabs; i++) {
    tabs.push(<Tab key={`tab${i}`} eventKey={`tab${i}`} title={`Tab ${i}`}>
      {`Tab ${i} Content`}
    </Tab>);
  }

  return (
    <Tabs
      bgColor={bgColor}
      defaultActiveKey="tab1"
      notifications={notifications}
      dataVersion="v1.0"
      lastUpdate="2024-06-27"
      {...rest}
    >
      {tabs}
    </Tabs>
  );
};

CustomBackgroundAndTabs.argTypes = {
  numTabs: {
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1,
    },
    description: 'The number of tabs to display. Range: 1 to 10.',
  },
  bgColor: {
    control: 'color',
    description: 'The background color of the Tabs component.',
  },
};
