import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import Dropdown from './../../components/dropdown/Dropdown';
import './../../components/dropdown/Dropdown.scss'
const meta= {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: {
        type: 'object',
      },
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
      description: 'Options available in the dropdown',
    },
    selectedOptions: {
      control: {
        type: 'object',
      },
      defaultValue: [],
      description: 'Currently selected options',
    },
    onChange: { action: 'onChange' },
  },
  tags: ['autodocs']
};

export default meta;

const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(args.selectedOptions);

  const handleChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
    args.onChange(newSelectedOptions);
  };

  return (
    <Dropdown
      {...args}
      selectedOptions={selectedOptions}
      onChange={handleChange}
    />
  );
};

export const Default= {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectedOptions: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the button and open the dropdown
    const selectColumnsButton = canvas.getByTestId('dropdown-button');
    expect(canvas.queryByTestId('dropdown-menu')).not.toBeInTheDocument();

    await userEvent.click(selectColumnsButton);
    expect(canvas.getByTestId('dropdown-menu')).toBeInTheDocument();

    // Close the dropdown
    await userEvent.click(selectColumnsButton);
    expect(canvas.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
  },
};
