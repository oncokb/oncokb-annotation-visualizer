import React from 'react';
import { within, userEvent, expect } from '@storybook/test';
import { AnnotationVisualisation } from '../../components/AnnotationVisualisation';
import {  totalData } from '../../config/APIResponse';
import './../ReactTable.scss';

export default {
  title: 'Components/AnnotationVisualisation',
  component: AnnotationVisualisation,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Object containing mutationData, cnaData, and structuralVariantData arrays containing respective APIResponse.',
    },
    patientId: {
      description: 'Unique identifier for the patient.',
    },
    patientInfo: {
      description: 'Additional information about the patient.',
    },
    isPatientInfoVisible: {
      description: 'Boolean to control the visibility of patient information.',
      control: 'boolean',
    },
    notifications: {
      description: `An array of NotificationImplication objects. 
      \n\`NotificationImplication\` type definition:
      \n\`\`\`
      type NotificationImplication = {
        message: string;
        type: 'danger' | 'primary' | 'warning' | 'success';
        alterationType: string;
      };
      \`\`\``,
    },
  },
};

export const Default = {
  args: {
    data: totalData,
    patientId: 'Patient123',
    patientInfo: 'Some patient information',
    isPatientInfoVisible: false,
    notifications: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownButtons = canvas.getAllByTestId('dropdown-button');

    for(let dropdownButton of dropdownButtons){

      await userEvent.click(dropdownButton);
  
      const dropdownMenu = canvas.getByTestId('dropdown-menu');
      expect(dropdownMenu).toBeInTheDocument();
  
      const checkboxes = canvas.getAllByTestId('checkbox');
  
      for (let checkbox of checkboxes) {
        if (checkbox.checked) {
          await userEvent.click(checkbox);
          expect(checkbox).not.toBeChecked();
        } else {
          await userEvent.click(checkbox);
          expect(checkbox).toBeChecked();
        }
      }
  
      await userEvent.click(dropdownButton);
      expect(canvas.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
    }
  },
  render: (args) => <AnnotationVisualisation {...args} />,
};
