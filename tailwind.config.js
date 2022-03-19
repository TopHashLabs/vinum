module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      header: {
        desktop:
          'linear-gradient(180deg, rgba(66, 19, 155, 0) 0%, #42139b 150%)',
        mobile: 'linear-gradient(90deg, rgba(66, 19, 155, 0) 0%, #42139b 50%)'
      },
      holder:
        'linear-gradient(-90deg, rgba(197, 167, 255, 0) 0%, #a088cc 100%)',
      accent: '#42139b',
      crem: '#e4e4e4'
    },
    listStyleType: {
      dash: '"-  "'
    },
    extend: {
      backgroundImage: {
        texture: 'url("@/assets/images/texture.png")'
      },
      screens: {
        mobile: { max: '480px' },
        desktop: { min: '1025px' }
      },
      keyframes: {
        text: {
          '0%': {
            bottom: '-3%'
          },
          '100%': {
            bottom: '69%'
          }
        }
      },
      animation: {
        'running-text': 'text 7s infinite linear'
      }
    }
  },
  plugins: []
}
