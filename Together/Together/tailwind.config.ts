import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        "deep-black": "var(--deep-black)",
        charcoal: "var(--charcoal)",
        "dark-grey": "var(--dark-grey)",
        "medium-grey": "var(--medium-grey)",
        "forest-green": "var(--forest-green)",
        "earth-brown": "var(--earth-brown)",
        "underground-rust": "var(--underground-rust)",
        "dark-forest": "var(--dark-forest)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        creepster: ["var(--font-creepster)"],
        swanky: ["var(--font-swanky)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        morph: {
          "0%, 100%": { 
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            transform: "rotate(0deg) scale(1)"
          },
          "25%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "rotate(2deg) scale(1.02)"
          },
          "50%": { 
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            transform: "rotate(-1deg) scale(0.98)"
          },
          "75%": {
            borderRadius: "70% 30% 40% 60% / 40% 70% 60% 30%",
            transform: "rotate(1deg) scale(1.01)"
          }
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" }
        },
        float: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.7"
          },
          "50%": { 
            transform: "translateY(-20px) rotate(1deg)",
            opacity: "1"
          }
        },
        twitch: {
          "0%, 100%": { 
            opacity: "1",
            filter: "brightness(1)"
          },
          "50%": { 
            opacity: "0.8",
            filter: "brightness(1.2)"
          }
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)"
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.05)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        morph: "morph 8s ease-in-out infinite",
        glitch: "glitch 2s infinite",
        float: "float 6s ease-in-out infinite",
        twitch: "twitch 0.2s infinite",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
