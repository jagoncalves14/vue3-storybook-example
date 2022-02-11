/*
// If your project is a library 

import { app } from "@storybook/vue3";
import MyLib from "..."
app.use(MyLib)
*/

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      iphone5: {
        name: 'Mobile (320px)',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      iphone6: {
        name: 'Mobile Large (480px)',
        styles: {
          height: '640px',
          width: '480px',
        },
        type: 'mobile',
      },
      ipad: {
        name: 'Tablet (768px)',
        styles: {
          height: '1024px',
          width: '768px',
        },
        type: 'tablet',
      },
      macbookpro15: {
        name: 'Desktop (1440px)',
        styles: {
          width: '1440px',
          height: '900px',
        },
        type: 'desktop',
      },
    },
  },
};
