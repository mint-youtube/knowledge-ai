/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        'bg-secondary': '#161B22',
        fg: '#C9D1D9',
        muted: '#8B949E',
        accent: '#58A6FF',
        accent2: '#1F6FEB',
        border: '#30363D',
        hover: '#21262D',
      },
      fontFamily: {
        heading: ["'JetBrains Mono', monospace", 'system-ui', 'sans-serif'],
        body: ["'IBM Plex Sans KR', sans-serif", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#C9D1D9',
            '--tw-prose-headings': '#C9D1D9',
            '--tw-prose-links': '#58A6FF',
            '--tw-prose-bold': '#58A6FF',
            '--tw-prose-quotes': '#8B949E',
            '--tw-prose-quote-borders': '#58A6FF',
            '--tw-prose-code': '#58A6FF',
            '--tw-prose-borders': '#30363D',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #30363D',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: '#21262D',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: '#21262D',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #30363D',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
