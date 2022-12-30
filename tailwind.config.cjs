module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        GreenBack: "#77c14b",
        GreenDark: "#65ab3b",
        GreenText: "#69C401",
        GreyText: "#727272",
      },
      screens: {
        '1070px': { 'max': '1070px' },
        '970px': { 'max': '970px' },
        '850px': { 'max': '850px' },
        '730px': { 'max': '730px' },
        '650px': { 'max': '650px' },
        '500px': { 'max': '500px' },
        '350px': { 'max': '350px' },
        'm-730px': { 'min': '730px' },
      },
      keyframes: {
        openLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        closeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        openRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        closeRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        hideBack: {
          '100%': {
            visibility: 'hidden',
            width: '0',
            height: '0'
          }
        }
      },
      animation: {
        slideOpenLeft: 'openLeft 0.5s ease-in',
        slideCloseLeft: 'closeLeft 0.5s ease-in',
        slideOpenRight: 'openRight 0.5s ease-in',
        slideCloseRight: 'closeRight 0.5s ease-in',
        hideBackAnim: 'hideBack 0s ease-in-out 0.5s'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}