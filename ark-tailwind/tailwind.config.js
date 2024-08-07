/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      /* Primary */
      "primary-100": "var(--kf-color-primary-100)",
      "primary-200": "var(--kf-color-primary-200)",
      "primary-300": "var(--kf-color-primary-300)",
      "primary-400": "var(--kf-color-primary-400)",
      "primary-500": "var(--kf-color-primary-500)",
      "primary-600": "var(--kf-color-primary-600)",
      "primary-700": "var(--kf-color-primary-700)",
      "primary-800": "var(--kf-color-primary-800)",

      /* Secondary one */
      "secondary-one-100": "var(--kf-color-secondary-one-100)",
      "secondary-one-200": "var(--kf-color-secondary-one-200)",
      "secondary-one-300": "var(--kf-color-secondary-one-300)",
      "secondary-one-400": "var(--kf-color-secondary-one-400)",
      "secondary-one-500": "var(--kf-color-secondary-one-500)",
      "secondary-one-600": "var(--kf-color-secondary-one-600)",
      "secondary-one-700": "var(--kf-color-secondary-one-700)",
      "secondary-one-800": "var(--kf-color-secondary-one-800)",

      /* Secondary two */
      "secondary-two-100": "var(--kf-color-secondary-two-100)",
      "secondary-two-200": "var(--kf-color-secondary-two-200)",
      "secondary-two-300": "var(--kf-color-secondary-two-300)",
      "secondary-two-400": "var(--kf-color-secondary-two-400)",
      "secondary-two-500": "var(--kf-color-secondary-two-500)",
      "secondary-two-600": "var(--kf-color-secondary-two-600)",
      "secondary-two-700": "var(--kf-color-secondary-two-700)",
      "secondary-two-800": "var(--kf-color-secondary-two-800)",

      /* Secondary three */
      "secondary-three-100": "var(--kf-color-secondary-three-100)",
      "secondary-three-200": "var(--kf-color-secondary-three-200)",
      "secondary-three-300": "var(--kf-color-secondary-three-300)",
      "secondary-three-400": "var(--kf-color-secondary-three-400)",
      "secondary-three-500": "var(--kf-color-secondary-three-500)",
      "secondary-three-600": "var(--kf-color-secondary-three-600)",
      "secondary-three-700": "var(--kf-color-secondary-three-700)",
      "secondary-three-800": "var(--kf-color-secondary-three-800)",

      /* Secondary four */
      "secondary-four-100": "var(--kf-color-secondary-four-100)",
      "secondary-four-200": "var(--kf-color-secondary-four-200)",
      "secondary-four-300": "var(--kf-color-secondary-four-300)",
      "secondary-four-400": "var(--kf-color-secondary-four-400)",
      "secondary-four-500": "var(--kf-color-secondary-four-500)",
      "secondary-four-600": "var(--kf-color-secondary-four-600)",
      "secondary-four-700": "var(--kf-color-secondary-four-700)",
      "secondary-four-800": "var(--kf-color-secondary-four-800)",

      /* Secondary five */
      "secondary-five-100": "var(--kf-color-secondary-five-100)",
      "secondary-five-200": "var(--kf-color-secondary-five-200)",
      "secondary-five-300": "var(--kf-color-secondary-five-300)",
      "secondary-five-400": "var(--kf-color-secondary-five-400)",
      "secondary-five-500": "var(--kf-color-secondary-five-500)",
      "secondary-five-600": "var(--kf-color-secondary-five-600)",
      "secondary-five-700": "var(--kf-color-secondary-five-700)",
      "secondary-five-800": "var(--kf-color-secondary-five-800)",

      /* Secondary six */
      "secondary-six-100": "var(--kf-color-secondary-six-100)",
      "secondary-six-200": "var(--kf-color-secondary-six-200)",
      "secondary-six-300": "var(--kf-color-secondary-six-300)",
      "secondary-six-400": "var(--kf-color-secondary-six-400)",
      "secondary-six-500": "var(--kf-color-secondary-six-500)",
      "secondary-six-600": "var(--kf-color-secondary-six-600)",
      "secondary-six-700": "var(--kf-color-secondary-six-700)",
      "secondary-six-800": "var(--kf-color-secondary-six-800)",

      /* Secondary seven */
      "secondary-seven-100": "var(--kf-color-secondary-seven-100)",
      "secondary-seven-200": "var(--kf-color-secondary-seven-200)",
      "secondary-seven-300": "var(--kf-color-secondary-seven-300)",
      "secondary-seven-400": "var(--kf-color-secondary-seven-400)",
      "secondary-seven-500": "var(--kf-color-secondary-seven-500)",
      "secondary-seven-600": "var(--kf-color-secondary-seven-600)",
      "secondary-seven-700": "var(--kf-color-secondary-seven-700)",
      "secondary-seven-800": "var(--kf-color-secondary-seven-800)",

      /* Secondary eight */
      "secondary-eight-100": "var(--kf-color-secondary-eight-100)",
      "secondary-eight-200": "var(--kf-color-secondary-eight-200)",
      "secondary-eight-300": "var(--kf-color-secondary-eight-300)",
      "secondary-eight-400": "var(--kf-color-secondary-eight-400)",
      "secondary-eight-500": "var(--kf-color-secondary-eight-500)",
      "secondary-eight-600": "var(--kf-color-secondary-eight-600)",
      "secondary-eight-700": "var(--kf-color-secondary-eight-700)",
      "secondary-eight-800": "var(--kf-color-secondary-eight-800)",

      /* Secondary nine */
      "secondary-nine-100": "var(--kf-color-secondary-nine-100)",
      "secondary-nine-200": "var(--kf-color-secondary-nine-200)",
      "secondary-nine-300": "var(--kf-color-secondary-nine-300)",
      "secondary-nine-400": "var(--kf-color-secondary-nine-400)",
      "secondary-nine-500": "var(--kf-color-secondary-nine-500)",
      "secondary-nine-600": "var(--kf-color-secondary-nine-600)",
      "secondary-nine-700": "var(--kf-color-secondary-nine-700)",
      "secondary-nine-800": "var(--kf-color-secondary-nine-800)",

      /* Secondary ten */
      "secondary-ten-100": "var(--kf-color-secondary-ten-100)",
      "secondary-ten-200": "var(--kf-color-secondary-ten-200)",
      "secondary-ten-300": "var(--kf-color-secondary-ten-300)",
      "secondary-ten-400": "var(--kf-color-secondary-ten-400)",
      "secondary-ten-500": "var(--kf-color-secondary-ten-500)",
      "secondary-ten-600": "var(--kf-color-secondary-ten-600)",
      "secondary-ten-700": "var(--kf-color-secondary-ten-700)",
      "secondary-ten-800": "var(--kf-color-secondary-one-800)",

      /* Semantic colors */
      "success-100": "var(--kf-color-success-100)",
      "success-200": "var(--kf-color-success-200)",
      "success-300": "var(--kf-color-success-300)",
      "success-400": "var(--kf-color-success-400)",
      "success-500": "var(--kf-color-success-500)",
      "success-600": "var(--kf-color-success-600)",
      "success-700": "var(--kf-color-success-700)",
      "success-800": "var(--kf-color-success-800)",

      "error-100": "var(--kf-color-error-100)",
      "error-200": "var(--kf-color-error-200)",
      "error-300": "var(--kf-color-error-300)",
      "error-400": "var(--kf-color-error-400)",
      "error-500": "var(--kf-color-error-500)",
      "error-600": "var(--kf-color-error-600)",
      "error-700": "var(--kf-color-error-700)",
      "error-800": "var(--kf-color-error-800)",

      "warning-100": "var(--kf-color-warning-100)",
      "warning-200": "var(--kf-color-warning-200)",
      "warning-300": "var(--kf-color-warning-300)",
      "warning-400": "var(--kf-color-warning-400)",
      "warning-500": "var(--kf-color-warning-500)",
      "warning-600": "var(--kf-color-warning-600)",
      "warning-700": "var(--kf-color-warning-700)",
      "warning-800": "var(--kf-color-warning-800)",

      "info-100": "var(--kf-color-info-100)",
      "info-200": "var(--kf-color-info-200)",
      "info-300": "var(--kf-color-info-300)",
      "info-400": "var(--kf-color-info-400)",
      "info-500": "var(--kf-color-info-500)",
      "info-600": "var(--kf-color-info-600)",
      "info-700": "var(--kf-color-info-700)",
      "info-800": "var(--kf-color-info-800)",

      /* Common colors */
      white: "var(--kf-color-white)",
      "white-inverse": "var(--kf-color-white-inverse)",
      black: "var(--kf-color-black)",
      "white-alpha-75": "var(--kf-color-white-alpha-75)",
      "white-alpha-50": "var(--kf-color-white-alpha-50)",
      "white-alpha-25": "var(--kf-color-white-alpha-25)",
      "white-alpha-20": "var(--kf-color-white-alpha-20)",
      "white-alpha-10": "var(--kf-color-white-alpha-10)",
      transparent: "var(--kf-color-transparent)",

      /* Page background colors */
      "bg-white": "var(--kf-color-bg-white)",
      "bg-overlay-white": "var(--kf-color-bg-overlay-white)",
      "bg-gray": "var(--kf-color-bg-gray)",
      "bg-black": "var(--kf-color-bg-black)",

      "overlay-gray": "var(--kf-color-overlay-gray)",
      "overlay-gray-50": "var(--kf-color-overlay-gray-50)",
      "overlay-gray-75": "var(--kf-color-overlay-gray-75)",

      "gray-100": "var(--kf-color-gray-100)",
      "gray-200": "var(--kf-color-gray-200)",
      "gray-300": "var(--kf-color-gray-300)",
      "gray-400": "var(--kf-color-gray-400)",
      "gray-500": "var(--kf-color-gray-500)",
      "gray-600": "var(--kf-color-gray-600)",
      "gray-700": "var(--kf-color-gray-700)",
      "gray-800": "var(--kf-color-gray-800)",
      "gray-900": "var(--kf-color-gray-900)",
      "gray-999": "var(--kf-color-gray-999)",

      "gray-alpha-25": "var(--kf-color-gray-alpha-25)",
      "gray-alpha-50": "var(--kf-color-gray-alpha-50)",
      "gray-alpha-75": "var(--kf-color-gray-alpha-75)",

      /* Shadows */
      shadow: "var(--kf-color-shadow)"
    },
    spacing: {
      0: "var(--kf-space-0)",
      2: "var(--kf-space-2)",
      4: "var(--kf-space-4)",
      6: "var(--kf-space-6)",
      8: "var(--kf-space-8)",
      10: "var(--kf-space-10)",
      12: "var(--kf-space-12)",
      16: "var(--kf-space-16)",
      18: "var(--kf-space-18)",
      20: "var(--kf-space-20)",
      24: "var(--kf-space-24)",
      28: "var(--kf-space-28)",
      32: "var(--kf-space-32)",
      36: "var(--kf-space-36)",
      40: "var(--kf-space-40)",
      48: "var(--kf-space-48)",
      60: "var(--kf-space-60)",
      72: "var(--kf-space-72)"
    },
    fontFamily: {
      default: ['"Inter"', '"Noto Sans Arabic"', "sans-serif", "serif"]
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600"
    },
    letterSpacing: {
      mega: "-1.2px",
      h1: "-1px",
      h2: "-0.96px",
      h3: "-0.56px",
      h4: "-0.5px",
      h5: "-0.3px",
      h6: "-0.2px",
      baseplus: "0.01px",
      base: "0px",
      smallplus: "0px",
      small: "normal",
      tiny: "normal",
      micro: "normal"
    },
    lineHeight: {
      mega: "1.28",
      h1: "1.31",
      h2: "1.29",
      h3: "1.33",
      h4: "1.5",
      h5: "1.56",
      h6: "1.63",
      baseplus: "1.47",
      base: "1.57",
      smallplus: "1.54",
      small: "1.67",
      tiny: "1.64",
      micro: "1.2"
    },
    boxShadow: {
      100: "var(--kf-shadow-100)",
      "100-top": "var(--kf-shadow-100-top)",
      200: "var(--kf-shadow-200)",
      300: "var(--kf-shadow-300)",
      500: "var(--kf-shadow-500)"
    },
    borderRadius: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      full: "9999px"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      10: "10"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      width: {
        300: "30rem"
      },
      minWidth: {
        300: "30rem"
      },
      maxWidth: {
        300: "30rem"
      },
      fontSize: {
        "size-36": "3.6rem",
        "size-32": "3.2rem",
        "size-28": "2.8rem",
        "size-24": "2.4rem",
        "size-20": "2rem",
        "size-18": "1.8rem",
        "size-16": "1.6rem",
        "size-15": "1.5rem",
        "size-14": "1.4rem",
        "size-13": "1.3rem",
        "size-12": "1.2rem",
        "size-11": "1.1rem",
        "size-10": "1rem"
      },
      // colors: {
      // border: "hsl(var(--border))",
      // input: "hsl(var(--input))",
      // ring: "hsl(var(--ring))",
      // background: "hsl(var(--background))",
      // foreground: "hsl(var(--foreground))",
      // primary: {
      //   DEFAULT: "hsl(var(--primary))",
      //   foreground: "hsl(var(--primary-foreground))"
      // },
      // secondary: {
      //   DEFAULT: "hsl(var(--secondary))",
      //   foreground: "hsl(var(--secondary-foreground))"
      // },
      // destructive: {
      //   DEFAULT: "hsl(var(--destructive))",
      //   foreground: "hsl(var(--destructive-foreground))"
      // },
      // muted: {
      //   DEFAULT: "hsl(var(--muted))",
      //   foreground: "hsl(var(--muted-foreground))"
      // },
      // accent: {
      //   DEFAULT: "hsl(var(--accent))",
      //   foreground: "hsl(var(--accent-foreground))"
      // },
      // popover: {
      //   DEFAULT: "hsl(var(--popover))",
      //   foreground: "hsl(var(--popover-foreground))"
      // },
      // card: {
      //   DEFAULT: "hsl(var(--card))",
      //   foreground: "hsl(var(--card-foreground))"
      // }
      // },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)"
      // },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

