import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
          'custom-green':'#00FF66',
      },
      fontFamily:{
        Pop:['Poppins','...defaultTheme.fontFamily.sans'],
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "custom-image":"url('/NewArrival-images/first.png')",
          "newArrival-2":"url('/NewArrival-images/second.jpeg')",
          "newArrival-3":"url('/NewArrival-images/third.png')",
          "newArrival-4":"url('/NewArrival-images/four.png')",
          "signup-1":"url('/signup/main.jpeg')",
          "wishlist-1":"url('/Product-images/laptop.png')",
         
      },
    },
  },
  plugins: [],
};
export default config;
