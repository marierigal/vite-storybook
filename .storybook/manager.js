import { addons } from '@storybook/addons';

addons.setConfig({
  sidebar: {
    renderLabel: (item) => {
      const { name, isLeaf, parameters } = item;
      // item can be a Root | Group | Story
      if (!isLeaf || !parameters?.status) return name;

      return `${name} [${parameters.status}]`;
    },
  },
});
