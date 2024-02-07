/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "black": "#000",
        "colors-fill-c-fill-grey-hover": "#2e3035",
        "colors-text-c-text-grey-secondary": "#adb1b8",
        "colors-text-c-text-grey-tertiary": "#7d828a",
        "colors-border-c-border-grey-divider-default": "#3c3f44",
        "colors-border-c-border-grey-divider-default1": "#dddde3",
        "colors-border-c-border-grey-default": "#b9bbc6",
        "colors-text-c-text-grey-secondary1": "#60646c",
        "colors-text-c-text-grey-primary": "#1c2024",
        "colors-background-c-background-grey-default": "#f9f9fb",
        "grey-dark-c-d-grey-10": "#edeef0",
        "colors-border-c-border-grey-default-subtle": "#d3d4db",
        "grey-dark-c-d-grey-1": "#1b1b1f",
        "colors-fill-c-fill-grey-disabled": "#e4e4e9",
        "colors-text-c-text-grey-disabled": "#8b8d98",
        royalblue: "#3a5ccc",
        "green-light-c-l-green-9": "#299764",
        "green-light-c-l-green-2": "#e9f9ee",
        "red-light-c-l-red-905": "#c62a2f",
        "colors-text-c-text-grey-tertiary1": "#7e808a",
        "green-light-c-l-green-1": "#f2fcf5",
        "green-light-c-l-green-905": "#18794e",
      
        "grey-light-c-l-grey-05": "#fcfcfd",
        gray: "#202124",
        "grayscale-g7": "#ebebeb",
      },
      spacing: {
        "spacing-sp-64": "64px",
        "spacing-sp-120": "120px",
        "spacing-sp-32": "32px",
        "spacing-sp-8": "8px",
        "spacing-sp-2": "2px",
        "spacing-sp-24": "24px",
        "spacing-sp-28": "28px",
        "spacing-sp-20": "20px",
        "spacing-sp-48": "48px",
        "spacing-sp-16": "16px",
        "spacing-sp-14": "14px",
        "spacing-sp-12": "12px",
        "spacing-sp-4": "4px",
        "spacing-sp-10": "10px",
        "spacing-sp-6": "6px",
        "spacing-sp-1": "1px",
        "sizes-sz-28": "28px",
        "sizes-sz-8": "8px",
      },
      fontFamily: {
        "label-regular-bold": "'Open Sans'",
        "heading-serif-xl": "'Roboto Serif'",
        roboto: "Roboto",
      },
      borderRadius: {
        "981xl": "1000px",
        sm: "14px",
        "radii-r-2": "2px",
        "radii-r-16": "16px",
        "radii-r-12": "12px",
        "radii-r-circle": "1000px",
        "radii-r-8": "8px",
        "radii-r-4": "4px",
        "radii-r-24": "24px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      "38xl": "57px",
      "15xl": "34px",
      "27xl": "46px",
      inherit: "inherit",
    },
    screens: {
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },

};
