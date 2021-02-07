// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Input from './input.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Example/Input',
  component: Input,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA]
    }),
    withKnobs
  ],
  argTypes: {
    visualMode: {
      name: 'visual-mode',
      defaultValue: 'default',
      description: 'Hi defualt how are you?',
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    }
  }
} as Meta;

const Template: Story<Input> = (args: Input, { argTypes }) => {
  console.log('TEMPLATE: ', args, argTypes);
  return {
    component: Input,
    props: args,
  }
};

export const Default = Template.bind({});
Default.args = {
  visualMode: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  visualMode: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  visualMode: 'secondary',
};
