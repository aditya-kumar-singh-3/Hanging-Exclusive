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
          palette: {
            dark: '#2B202C',  // Dominant dark tone
            mutedPurple: '#573F59',  // Muted purple shade
            lightTone: '#F2EFF2',  // Light, almost white tone
            lavender: '#96699B',  // Lavender-like hue
            deepPurple: '#865F8A',  // Deep purple tone
            darkPurple: '#3A202D',  // Dark purple, near black
          },
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
