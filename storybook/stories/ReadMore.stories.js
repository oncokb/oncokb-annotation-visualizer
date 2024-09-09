import React from 'react';
import { within, userEvent, expect } from '@storybook/test';
import  ReadMoreCell  from '../../src/components/readMore/ReadMore';
import '../../src/components/dropdown/Dropdown.scss';

const meta = {
  title: 'Components/ReadMore',
  component: ReadMoreCell,
  argTypes: {
    text: { control: 'text', description: 'Text content to display within the cell.' },
  },
  tags: ['autodocs'],
};

const longText = 'The combination of vemurafenib, an inhibitor of V600-mutant BRAF, and cobimetinib, an inhibitor of MEK1/2, with atezolizumab, an immunotherapeutic PD-L1 antibody, is FDA-approved for patients with BRAF V600 mutation-positive unresectable or metastatic melanoma. FDA approval was based on the results of the Phase III double-blind, randomized, placebo-controlled IMspire150 trial of Atezolizumab + Cobimetinib + Vemurafenib versus Placebo + Cobimetinib + Vemurafenib in 514 patients with BRAF V600-mutant melanoma in which the median progression-free survival was 15.1 mos (95% CI=11.4,18.4) in the triplet arm versus 10.6 mos (95% CI=9.3,12.7) in the doublet + placebo arm (HR=0.78; 95% CI= 0.63, 0.97; p=0.0249) (PMID: 32534646).';
export default meta;

const Template = (args) => {
  return <ReadMoreCell {...args} />;
};

export const Default = {
  args: {
    text: longText,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let readMoreButton = canvas.getByText('Read more');
    expect(readMoreButton).toBeInTheDocument();

    await userEvent.click(readMoreButton);

    const readLessButton = canvas.getByText('Read less');
    expect(readLessButton).toBeInTheDocument();

    await userEvent.click(readLessButton);

    readMoreButton = canvas.getByText('Read more');
    expect(readMoreButton).toBeInTheDocument();
  },
};

export const ShortText = Template.bind({});
ShortText.args = {
  text: 'Short text that does not require read more functionality.',
};

export const LongText = Template.bind({});
LongText.args = {
  text: longText,
};
