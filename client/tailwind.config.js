const plugin = require('tailwindcss/plugin')

// From https://stackoverflow.com/a/44230264/4357882
// range(3,7) === [ 3, 4, 5, 6, 7 ]
const range = (x, y) =>
  Array.from(
    (function* () {
      while (x <= y) yield x++
    })()
  )

/**
 * Adds classes .grid-cols-max-1 through .grid-cols-max-12
 *
 * Example CSS:
 *
 * ```css
 * .grid-cols-max-1 {
 *   grid-template-columns: repeat(1, max-content);
 * }
 * ```
 */
const gridColsMax = plugin(({ addUtilities }) => {
  const classes = Array.from({ length: 12 }, (_, index) => index + 1).reduce(
    (rules, columnNumber) => {
      rules[`.grid-cols-max-${columnNumber}`] = {
        gridTemplateColumns: `repeat(${columnNumber}, max-content)`,
      }
      return rules
    },
    {}
  )

  addUtilities(classes, ['responsive'])
})

/**
 * Adds fractional classes for top, right, bottom, left values
 */
const fractionalTopRightBottomLeft = plugin(({ addUtilities }) => {
  const toPercentString = (dividend, divisor) =>
    `${((dividend / divisor) * 100).toFixed(6).replace('.000000', '')}%`
  const classesPairs = 'top,right,bottom,left'
    .split(',')
    .map((position) =>
      range(1, 6)
        .concat(12)
        .map((divisor) =>
          range(1, Math.max(divisor - 1, 1)).map((dividend) => [
            `.${position}-${dividend}\\/${divisor}`,
            { [position]: toPercentString(dividend, divisor) },
          ])
        )
    )
    .flat(2)

  addUtilities(Object.fromEntries(classesPairs))
})

module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}'],
    options: {
      whitelistPatterns: [
        // Typography
        /type-/,
        // Aspect Ratios
        /aspect-ratio-/,
      ],
    },
  },
  theme: {
    aspectRatio: {
      none: 0,
      '1:1': [1, 1],
      '2:1': [2, 1],
      '3:2': [3, 2],
      '2:3': [2, 3],
      '4:3': [4, 3],
      '3:4': [3, 4],
      '16:9': [16, 9],
      '21:9': [21, 9],
    },
    backdropFilter: {
      none: 'none',
      'blur-1': 'blur(5px)',
      'blur-2': 'blur(10px)',
      'blur-3': 'blur(15px)',
      'blur-4': 'blur(20px)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkRed: '#9d0005',
      red: '#d12026',
      black: '#000000',
      white: '#ffffff',
      offWhite: '#F4F4F4',
      gray: {
        0: '#131313',
        1: '#333333',
        2: '#4f4f4f',
        3: '#828282',
        4: '#bdbdbd',
        5: '#e0e0e0',
        6: '#f2f2f2',
      },
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      'saturate-25': 'saturate(.25)',
      'saturate-50': 'saturate(.50)',
      'saturate-75': 'saturate(.75)',
    },
    fontFamily: {
      system: ['system-ui'],
      heading: ['"SangBleu Kingdom"', 'serif'],
      body: ['"SangBleu Sans"', 'serif'],
    },
    fontWeight: {
      hairline: '100',
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      screens: {
        xs: '420px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontSize: {
        mi: '0.625rem', // 10px ("mi" === "mini")
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
        '4xl': '3rem', // 48px
        '5xl': '3.5rem', // 56px
        '6xl': '4.5rem', // 72px
        '7xl': '5rem', // 80px
        '8xl': '5.5rem', // 88px
        '9xl': '6rem', // 96px
        huge: '10rem',
      },
      lineHeight: {
        none: '1',
        tight: '1.2',
        snug: '1.3',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem', // 12px
        '4': '1.125rem', // 18px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.875rem', // 30px
        '8': '2.5rem', // 40px
        '9': '3.625rem', // 48px
        '10': '5.25rem', // 84px
      },
      letterSpacing: {
        tighter: '-2px',
        tight: '-1px',
        normal: '0',
        wide: '1px',
        wider: '2px',
        widest: '3px',
        heading: '0.2em',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '1/2': '50%',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
      },
    },
  },
  variants: {
    filter: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundOpacity: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'disabled',
    ],
    padding: ['responsive', 'hover', 'focus', 'group-hover', 'first', 'last'],
    margin: ['responsive', 'first', 'last', 'odd'],
    borderWidth: ['responsive', 'first', 'last'],
    order: ['responsive', 'odd', 'even', 'first', 'last'],
  },
  plugins: [
    gridColsMax,
    fractionalTopRightBottomLeft,
    require('tailwindcss-filters'),
    require('tailwindcss-aspect-ratio'),
  ],
}
