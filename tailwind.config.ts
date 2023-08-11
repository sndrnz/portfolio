import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        code: {
          typescript: "#2b7bcd",
          swift: "#f05138",
          react: "#2c9ecb",
          graphql: "#e632ad",
          rust: "#e43926",
          next: "#ffffff",
          tailwind: "#38bdf8",
          node: "#57a646",
          javascript: "#edd84e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
