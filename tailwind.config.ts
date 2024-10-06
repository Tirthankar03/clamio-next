/** @type {import('tailwindcss').Config} */

//

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

  
      // colors: {
      //   primary: {
      //     500: '#624CF5',
      //     50: ' #F6F8FD',
      //     DEFAULT: '#624CF5',
      //     foreground: 'hsl(var(--primary-foreground))',
      //   },
      //   coral: {
      //     500: '#15BF59',
      //   },

      //   grey: {
      //     600: '#545454', // Subdued - color name in figma
      //     500: '#757575',
      //     400: '#AFAFAF', // Disabled - color name in figma
      //     50: '#F6F6F6', // White Grey - color name in figma
      //   },
      //   black: '#000000',
      //   white: '#FFFFFF',
      //   border: 'hsl(var(--border))',
      //   input: 'hsl(var(--input))',
      //   ring: 'hsl(var(--ring))',
      //   foreground: 'hsl(var(--foreground))',

      fontSize: {
        "4.5xl": "2.5rem", // 40px
        "4.75xl": "2.75rem", // 44px
      },
      colors: {
        primary: "#FFDB58",
        secondary: "#212121",
        grey: {
          600: '#545454', // Subdued - color name in figma
          500: '#757575',
          400: '#AFAFAF', // Disabled - color name in figma
          50: '#F6F6F6', // White Grey - color name in figma
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      // backgroundImage: {
      //   'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
      // },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        flashing: {
          '0%, 100%': { opacity: '0.2' },
          '20%': { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'fade-in': 'fade-in 0.5s linear forwards',
        flashing: 'flashing 1.4s infinite linear',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-debug-screens"),
  ],
};
