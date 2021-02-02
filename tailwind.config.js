module.exports = {
  purge: ['./pages/**/*.ts', './pages/**/*.tsx','./pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        purple: {
          '100': '#F8E8FD',
          '200': '#EABBF9',
          '300': '#DA7FF5',
          '400': '#BC34E5',
          '500': '#B630E0',
          '600': '#AE3ED0',
          '700': '#8E008E',
          '800': '#6D006D',
        }
      },
      borderColor: {
        purple: {
          '100': '#F8E8FD',
          '200': '#EABBF9',
          '300': '#DA7FF5',
          '400': '#BC34E5',
          '500': '#B630E0',
          '600': '#AE3ED0',
          '700': '#8E008E',
          '800': '#6D006D',
        }
      },
      width: {
        '100': '100px',
        '109': '109px',
        '270': '270px',
        '490': '490px',
        '1080': '1080px'
      },
      height: {
        '100': '100px',
        '109': '109px',
        '116': '116px',
        '490': '490px'
      },
      gridTemplateRows: {
        'layout': '110px auto 1fr 48px',
        'contributeMain': '10px 1fr 10px',
        'fileUpload': '490px 114px 32px',
        'search': '48px auto',
        'auto3x': 'auto auto auto',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        'layout': 'auto 1080px auto',
        'contributeForm': '100px 408px',
        'fileUpload': '109px 109px 109px 109px',
        'settingForm': '150px 350px',
        'auto3x': 'auto auto auto',
      },
      lineHeight: {
        '12': '3rem',
        '16': '4rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
