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
        '850px': { 'max': '850px' },
        '730px': { 'max': '730px' },
        '650px': { 'max': '650px' },
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
        }
      },
      animation: {
        slideOpenLeft: 'openLeft 0.8s ease-in',
        slideCloseLeft: 'closeLeft 0.8s ease-in-out',
        slideOpenRight: 'openRight 0.8s ease-in',
        slideCloseRight: 'closeRight 0.8s ease-in-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}