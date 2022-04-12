module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        accent: '#42139b',
        crem: '#e4e4e4',
        main: '#101010',
        gray: 'rgba(255, 255, 255, 0.1)'
      },
      listStyleType: {
        dash: '"-  "'
      },
      backgroundImage: {
        texture: 'url("@/assets/images/texture.png")',
        bottle: 'url("@/assets/images/bg-bottle.png")'
      },
      screens: {
        mobile: { max: '480px' },
        desktop: { min: '1025px' }
      },
      keyframes: {
        text: {
          '0%': {
            bottom: '13%'
          },
          '100%': {
            bottom: '69%'
          }
        },
        slide: {
          from: {
            transform: 'translate(100%, 0)'
          },
          to: {
            transform: 'translate(0, 0)'
          }
        }
      },
      animation: {
        'running-text': 'text 9s infinite linear',
        'left-slide': 'slide 1s',
        'right-slide': 'slide 1s reverse'
      }
    }
  },
  plugins: []
}
