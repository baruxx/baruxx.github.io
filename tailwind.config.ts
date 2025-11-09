import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/lib/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        // modern, smooth dark theme with a soft blue-violet accent
        background: 'hsl(230 21% 8%)',
        foreground: 'hsl(0 0% 98%)',
        muted: {
          DEFAULT: 'hsl(230 13% 15%)',
          foreground: 'hsl(230 8% 65%)'
        },
        accent: {
          DEFAULT: 'hsl(262 96% 60%)',
          foreground: 'hsl(0 0% 98%)'
        },
        secondary: {
          DEFAULT: 'hsl(222 24% 16%)',
          foreground: 'hsl(0 0% 98%)'
        },
        card: 'hsl(230 21% 10%)',
      },
      borderRadius: {
        xl: '1.25rem'
      },
      backgroundImage: {
        // subtle layered radial gradients for a smooth, modern backdrop
        'hero-grid': "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.08) 0.5px, transparent 0), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.06) 0.5px, transparent 0)"
      }
    }
  },
  plugins: [animatePlugin]
};

export default config;
