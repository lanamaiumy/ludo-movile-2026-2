module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ludo: {
          primary: '#4A90D9',
          ink: '#2E6FB7',
          muted: '#6E8BA8',
          subtle: '#8AA0B8',
          surface: '#E7EEF6',
          line: '#EAF0F7',
          sky: '#EAF4FF',
          danger: '#FF7A7A',
        },
      },
      fontFamily: {
        regular: ['PlusJakartaSans_400Regular'],
        medium: ['PlusJakartaSans_500Medium'],
        semibold: ['PlusJakartaSans_600SemiBold'],
        bold: ['PlusJakartaSans_700Bold'],
        extrabold: ['PlusJakartaSans_800ExtraBold'],
      },
    },
  },
  plugins: [],
};
