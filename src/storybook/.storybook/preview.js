/** @type { import('@storybook/react').Preview } */
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import "@fortawesome/fontawesome-free/js/all.js";
import './../ReactTable.scss'

// library.add(fas);
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;