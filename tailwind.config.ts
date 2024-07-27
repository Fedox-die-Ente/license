import type {Config} from "tailwindcss"

function addVariablesForColors({ addBase, theme }: any) {
  const colors = theme("colors");

  function flattenColors(prefix: string, obj: any, res: any) {
    for (let [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === "object" && value !== null) {
        flattenColors(newKey, value, res);
      } else {
        res[newKey] = value;
      }
    }
  }

  let allColors: { [key: string]: string } = {};
  flattenColors("", colors, allColors);

  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        main: {
          one: '#006fff',
          two: '#2f379d',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          500: "#006fff",
          100: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          150: "#070709",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
        redHatDisplay: ["var(--font-redHatDisplay)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" }, //209 213 219
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",

      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors
  ],
} satisfies Config



export default config

