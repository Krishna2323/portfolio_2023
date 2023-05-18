import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "5px 5px 8px #dce1e1,-5px -5px 8px #ffffff",
      },
      colors: {
        "bg-primary": "#EFF5F5",
        "blue-primary": "#74c0fc",
        "blue-secondary": "#1864ab",
        "black-primary": "#6b7278",
        "black-secondary": "#212529",
      },
      backgroundImage: {
        "gradient-bg": "url('/public/portfolio-bg-min.jpeg')",
        "black-gradient":
          "linear-gradient(to right top, #3d3d3d, #343434, #2b2b2b, #222222, #1a1a1a, #181818, #161616, #141414, #181818, #1c1c1c, #212121, #252525);",
      },
    },
  },
  plugins: [],
} satisfies Config;
