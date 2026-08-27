/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0D0C0B',
          800: '#1A1917',
          700: '#2E2C29',
          600: '#4A4640',
          500: '#6E6960',
          400: '#948E83',
          300: '#BDB6A9',
          200: '#DED8CC',
          100: '#EFEAE0',
        },
        paper: {
          '000': '#FFFDF9',
          100: '#FDF7EF',
          200: '#F7EFE5',
          300: '#F0E4D5',
          400: '#E6D6C2',
        },
        blue: { 500: '#2B5CFF', 300: '#9DB8FF', 100: '#D7E3FF' },
        mint: { 500: '#33D18A', 300: '#8FEFC0', 100: '#D9F9E8' },
        lilac: { 500: '#8B5CF6', 300: '#C9B4FF', 100: '#EDE5FF' },
        blush: { 500: '#FF5C9A', 300: '#FFA9C8', 100: '#FFE1EC' },
        butter: { 500: '#FFC53D', 300: '#FFDD8A', 100: '#FFF3D6' },
        clay: { 500: '#FF5A2B', 300: '#FFA98C', 100: '#FFE5DA' },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(48px,9.5vw,150px)', { lineHeight: '1', letterSpacing: '-0.045em' }],
        'display-1': ['clamp(44px,7vw,104px)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(36px,5vw,72px)', { lineHeight: '0.94', letterSpacing: '-0.03em' }],
        'title-1': ['44px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'title-2': ['32px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'title-3': ['24px', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        lead: ['21px', { lineHeight: '1.4' }],
        body: ['17px', { lineHeight: '1.55' }],
        'body-sm': ['15px', { lineHeight: '1.55' }],
        caption: ['13px', { lineHeight: '1.25' }],
        eyebrow: ['12px', { lineHeight: '1.25', letterSpacing: '0.14em' }],
      },
      letterSpacing: {
        eyebrow: '0.14em',
      },
      borderRadius: {
        card: '24px',
        media: '36px',
      },
      boxShadow: {
        'sticker-sm': '2px 2px 0 #0D0C0B',
        sticker: '4px 4px 0 #0D0C0B',
        'sticker-lg': '8px 8px 0 #0D0C0B',
        'sticker-press': '1px 1px 0 #0D0C0B',
        'soft-sm': '0 2px 6px rgba(13,12,11,.08)',
        soft: '0 12px 32px -12px rgba(13,12,11,.22)',
        'soft-lg': '0 40px 80px -32px rgba(13,12,11,.34)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '220ms',
        slow: '420ms',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(.34,1.56,.64,1)',
        loop: 'cubic-bezier(.22,1,.36,1)',
      },
      maxWidth: {
        page: '1280px',
      },
      spacing: {
        section: 'var(--section-y)',
      },
      animation: {
        blob: 'loop-blob 24s cubic-bezier(.65,0,.35,1) infinite',
        float: 'loop-float 6s cubic-bezier(.65,0,.35,1) infinite',
        marquee: 'loop-marquee 28s linear infinite',
      },
      keyframes: {
        'loop-blob': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.08)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'loop-float': {
          '0%, 100%': { translate: '0 0' },
          '50%': { translate: '0 -8px' },
        },
        'loop-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
