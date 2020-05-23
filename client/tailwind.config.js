module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      system: ['system-ui'],
      heading: ['"SangBleu Kingdom"', 'serif'],
      body: ['"SangBleu Sans"', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: '#d12026',
      black: '#000000',
      white: '#ffffff',
      gray: {
        1: '#333333',
        2: '#4f4f4f',
        3: '#828282',
        4: '#bdbdbd',
        5: '#e0e0e0',
        6: '#f2f2f2',
      },
    },
    extend: {
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '3rem', // 40px
        '5xl': '3.5rem', // 56px
        '6xl': '4.5rem', // 72px
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem', // 12px
        '4': '1.125rem', // 18px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '2rem', // 36px
        '8': '2.5rem', // 40px
        '9': '3rem', // 48px
        '10': '5.5rem', // 88px
      },
      letterSpacing: {
        tighter: '-2px',
        tight: '-1px',
        normal: '0',
        wide: '1px',
        wider: '2px',
        widest: '3px',
      },
    },
  },
  variants: {},
  plugins: [],
}