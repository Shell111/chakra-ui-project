import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#fff0e1",
      100: "#fed6b4",
      200: "#fcba84",
      300: "#fa9f54",
      400: "#f98425",
      500: "#e06b10",
      600: "#ad530a",
      700: "#7c3b05",
      800: "#4b2301",
      900: "#1c0b00",
    },
    pink: {
      50: "#ffe2e5",
      100: "#ffb2b5",
      200: "#ff8086",
      300: "#fe4e56",
      400: "#fe2027",
      500: "#e50a0e",
      600: "#b2040a",
      700: "#800006",
      800: "#4e0002",
      900: "#1f0000",
    }
  },
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `Manrope, ${base.fonts?.body}`,
  },
});

export default theme;
