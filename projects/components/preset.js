/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        'tiny': '13px',
        'md': '15px'
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      borderColor: {
        DEFAULT: 'var(--color-border)'
      },
      colors: {
        background: 'var(--emr-background)',
        'on-background': 'var(--emr-on-background)',
        neutral: {
          DEFAULT: 'var(--emr-neutral)',
          0: 'var(--emr-neutral-0)',
          50: 'var(--emr-neutral-50)',
          100: 'var(--emr-neutral-100)',
          200: 'var(--emr-neutral-200)',
          300: 'var(--emr-neutral-300)',
          400: 'var(--emr-neutral-400)',
          450: 'var(--emr-neutral-450)',
          500: 'var(--emr-neutral-500)',
          600: 'var(--emr-neutral-600)',
          650: 'var(--emr-neutral-650)',
          700: 'var(--emr-neutral-700)',
          800: 'var(--emr-neutral-800)',
          900: 'var(--emr-neutral-900)',
          950: 'var(--emr-neutral-950)',
          1000: 'var(--emr-neutral-1000)',
        },
        'neutral-variant': {
          DEFAULT: 'var(--emr-neutral-variant)',
          0: 'var(--emr-neutral-variant-0)',
          50: 'var(--emr-neutral-variant-50)',
          100: 'var(--emr-neutral-variant-100)',
          200: 'var(--emr-neutral-variant-200)',
          300: 'var(--emr-neutral-variant-300)',
          400: 'var(--emr-neutral-variant-400)',
          450: 'var(--emr-neutral-variant-450)',
          500: 'var(--emr-neutral-variant-500)',
          600: 'var(--emr-neutral-variant-600)',
          650: 'var(--emr-neutral-variant-650)',
          700: 'var(--emr-neutral-variant-700)',
          800: 'var(--emr-neutral-variant-800)',
          900: 'var(--emr-neutral-variant-900)',
          950: 'var(--emr-neutral-variant-950)',
          1000: 'var(--emr-neutral-variant-1000)',
        },
        primary: {
          DEFAULT: 'var(--sys-primary)',
          0: 'var(--emr-primary-0)',
          50: 'var(--emr-primary-50)',
          100: 'var(--emr-primary-100)',
          200: 'var(--emr-primary-200)',
          300: 'var(--emr-primary-300)',
          400: 'var(--emr-primary-400)',
          450: 'var(--emr-primary-450)',
          500: 'var(--emr-primary-500)',
          600: 'var(--emr-primary-600)',
          650: 'var(--emr-primary-650)',
          700: 'var(--emr-primary-700)',
          800: 'var(--emr-primary-800)',
          900: 'var(--emr-primary-900)',
          950: 'var(--emr-primary-950)',
          1000: 'var(--emr-primary-1000)',
        },
        secondary: {
          DEFAULT: 'var(--sys-secondary)',
          0: 'var(--emr-secondary-0)',
          50: 'var(--emr-secondary-50)',
          100: 'var(--emr-secondary-100)',
          200: 'var(--emr-secondary-200)',
          300: 'var(--emr-secondary-300)',
          400: 'var(--emr-secondary-400)',
          450: 'var(--emr-secondary-450)',
          500: 'var(--emr-secondary-500)',
          600: 'var(--emr-secondary-600)',
          650: 'var(--emr-secondary-650)',
          700: 'var(--emr-secondary-700)',
          800: 'var(--emr-secondary-800)',
          900: 'var(--emr-secondary-900)',
          950: 'var(--emr-secondary-950)',
          1000: 'var(--emr-secondary-1000)',
        },
        tertiary: {
          DEFAULT: 'var(--sys-tertiary)',
          0: 'var(--emr-tertiary-0)',
          50: 'var(--emr-tertiary-50)',
          100: 'var(--emr-tertiary-100)',
          200: 'var(--emr-tertiary-200)',
          300: 'var(--emr-tertiary-300)',
          400: 'var(--emr-tertiary-400)',
          450: 'var(--emr-tertiary-450)',
          500: 'var(--emr-tertiary-500)',
          600: 'var(--emr-tertiary-600)',
          650: 'var(--emr-tertiary-650)',
          700: 'var(--emr-tertiary-700)',
          800: 'var(--emr-tertiary-800)',
          900: 'var(--emr-tertiary-900)',
          950: 'var(--emr-tertiary-950)',
          1000: 'var(--emr-tertiary-1000)',
        },
        error: {
          DEFAULT: 'var(--sys-error)',
          0: 'var(--emr-error-0)',
          50: 'var(--emr-error-50)',
          100: 'var(--emr-error-100)',
          200: 'var(--emr-error-200)',
          300: 'var(--emr-error-300)',
          400: 'var(--emr-error-400)',
          450: 'var(--emr-error-450)',
          500: 'var(--emr-error-500)',
          600: 'var(--emr-error-600)',
          650: 'var(--emr-error-650)',
          700: 'var(--emr-error-700)',
          800: 'var(--emr-error-800)',
          900: 'var(--emr-error-900)',
          950: 'var(--emr-error-950)',
          1000: 'var(--emr-error-1000)'
        },

        // primary
        'on-primary': 'var(--sys-on-primary)',
        'primary-container': 'var(--sys-primary-container)',
        'on-primary-container': 'var(--sys-on-primary-container)',
        'primary-fixed': 'var(--sys-primary-fixed)',
        'primary-fixed-dim': 'var(--sys-primary-fixed-dim)',
        'on-primary-fixed': 'var(--sys-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--sys-on-primary-fixed-variant)',

        // secondary
        'on-secondary': 'var(--sys-on-secondary)',
        'secondary-container': 'var(--sys-secondary-container)',
        'on-secondary-container': 'var(--sys-on-secondary-container)',
        'secondary-fixed': 'var(--sys-secondary-fixed)',
        'secondary-fixed-dim': 'var(--sys-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--sys-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--sys-on-secondary-fixed-variant)',

        // tertiary
        'on-tertiary': 'var(--sys-on-tertiary)',
        'tertiary-container': 'var(--sys-tertiary-container)',
        'on-tertiary-container': 'var(--sys-on-tertiary-container)',
        'tertiary-fixed': 'var(--sys-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--sys-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--sys-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--sys-on-tertiary-fixed-variant)',

        'on-error': 'var(--sys-on-error)',
        'error-container': 'var(--sys-error-container)',
        'on-error-container': 'var(--sys-on-error-container)',

        'surface': 'var(--sys-surface)',
        'surface-dim': 'var(--sys-surface-dim)',
        'surface-tint': 'var(--sys-surface-tint)',
        'surface-variant': 'var(--sys-surface-variant)',
        'surface-bright': 'var(--sys-surface-bright)',
        'surface-container-lowest': 'var(--sys-surface-container-lowest)',
        'surface-container-low': 'var(--sys-surface-container-low)',
        'surface-container': 'var(--sys-surface-container)',
        'surface-container-high': 'var(--sys-surface-container-high)',
        'surface-container-highest': 'var(--sys-surface-container-highest)',
        'on-surface': 'var(--sys-on-surface)',
        'on-surface-variant': 'var(--sys-on-surface-variant)',

        'outline': 'var(--sys-outline)',
        'outline-variant': 'var(--sys-outline-variant)',

        'inverse-surface': 'var(--sys-inverse-surface)',
        'inverse-on-surface': 'var(--sys-inverse-on-surface)',
        'inverse-primary': 'var(--sys-inverse-primary)',

        'scrim': 'var(--sys-scrim)',
        'shadow': 'var(--sys-shadow)',

        accent: 'var(--emr-accent)',
        warn: 'var(--emr-warn)',
        dark: '#303030'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwind-css-variables')(
      {
        colors: 'color',
        screens: 'screen',
        fontFamily: 'font',
        fontSize: 'text',
        fontWeight: 'font',
        lineHeight: 'leading',
        letterSpacing: 'tracking',
        backgroundSize: 'bg',
        borderWidth: 'border',
        borderRadius: 'rounded',
        width: 'w',
        height: 'h',
        minWidth: 'min-w',
        minHeight: 'min-h',
        maxWidth: 'max-w',
        maxHeight: 'max-h',
        padding: 'p',
        margin: 'm',
        boxShadow: 'shadow',
        zIndex: 'z',
        opacity: 'opacity',
        gap: 'gap',
        underline: 'underline',
        textUnderlineOffset: 'underline-offset'
      },
      {
        // options
      }
    )
  ]
}
