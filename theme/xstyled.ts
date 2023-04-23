import { defaultTheme } from "@xstyled/system";
import { anolisXstyledTheme, pipeThemes } from "anolis-ui";

export const customXstyledTheme = pipeThemes(defaultTheme, anolisXstyledTheme, {
  colors: {
    primary: {
      customColor: "red",
    }
  }
});
