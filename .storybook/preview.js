
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { defineCustomElements } from 'galileo-ui-common/loader';
import { addParameters } from '@storybook/angular';

import docJson from "../documentation.json";
setCompodocJson(docJson);
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// import { prepareForInline } from '@storybook/addon-docs/angular/inline';
addParameters({
  docs: {
    inlineStories: true,
  },
});
