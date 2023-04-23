import {
  createTheme,
  typographyTheme
} from "anolis-ui";



export const theme = createTheme({
  ...typographyTheme({
    baseStyle: {
      _h1: {
        fontSize: { _: "3.5rem", md: "4.2rem" },
        lineHeight: { _: "3.5rem", md: "4.2rem" },
        color: "white"
      },
      _h2: {
        fontSize: { _: "2.0rem", md: "3.0rem" },
        lineHeight: { _: "1.75rem", md: "2.75rem" },
        color: "white"
      },
      _h3: {
        fontSize: { _: "1.25rem", md: "2.0rem" },
        lineHeight: { _: "1.25rem", md: "2.0rem" },
        color: "#00D8FF"
      },
      _h4: {
        fontSize: { _: "1rem", md: "1.5rem" },
        lineHeight: { _: "1.25rem", md: "1.75rem" },
        color: "#7986AF"
      },
      _p: {
        fontSize: { _: "1rem" },
        lineHeight: { _: "1.5rem" },
        color: "#7986AF"
      }
    }
  }),

});
