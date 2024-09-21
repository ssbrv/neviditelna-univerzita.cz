import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",
  content: ["./src/**/*.{js,ts,vue}"],
  theme: {
    colors: {
      background: "rgba(var(--background))",
      primary: "rgba(var(--primary))",
      secondary: "rgba(var(--secondary))",

      action: "rgba(var(--action))",
      failure: "rgba(var(--failure))",
      success: "rgba(var(--success))",

      link: "rgba(var(--link))",
      nav: {
        focused: "rgba(var(--nav-focused))",
      },
    },
    boxShadow: {
      sm: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    },
  },
  plugins: [],
};
export default config;
