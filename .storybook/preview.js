export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#12171C',
      },
      {
        name: 'light',
        value: '#FFF',
      },
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
