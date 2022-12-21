import { extendTheme } from "@chakra-ui/theme-utils";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
};

export const theme = extendTheme(config, withProse({}));
