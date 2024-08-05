import React from 'react';
import { within, userEvent, expect } from '@storybook/test';
import { AnnotationVisualisation } from '../../AnnotationVisualisation';
import { APIResponse1, APIResponse2, APIResponse3, APIResponse4, APIResponse5, APIResponse6, totalData } from '../../config/APIResponse';
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

const Template = (args) => <AnnotationVisualisation {...args} />;

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

      // Click the first dropdown button
      await userEvent.click(dropdownButton);
  
      // Check that dropdown menu is visible
      const dropdownMenu = canvas.getByTestId('dropdown-menu');
      expect(dropdownMenu).toBeInTheDocument();
  
      // Get all checkboxes within the dropdown
      const checkboxes = canvas.getAllByTestId('checkbox');
  
      // Click each checkbox conditionally based on its initial state
      for (let checkbox of checkboxes) {
        if (checkbox.checked) {
          await userEvent.click(checkbox);
          expect(checkbox).not.toBeChecked();
        } else {
          await userEvent.click(checkbox);
          expect(checkbox).toBeChecked();
          // const label = annotationColumns.find(column => column.key === checkbox.id)?.label;

          // const columnHeaders = canvas.getAllByText(label);
          // console.log(columnHeaders)
          // expect(columnHeaders.length).toBeGreaterThan(1);
        }
      }
  
      await userEvent.click(dropdownButton);
      expect(canvas.queryByTestId('dropdown-menu')).not.toBeInTheDocument();
    }
  },
  render: (args) => <AnnotationVisualisation {...args} />,
};
