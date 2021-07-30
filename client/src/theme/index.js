import { getShadows, getCustomShadows } from "./shadows";
import palette from "./palette";
import { getOverrides } from "./overrides";
import { useMemo } from "react";
import { CssBaseline } from "@material-ui/core";
import {
  ThemeProvider as MUIThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";

export default function ThemeProvider({ children }) {
  const isLight = false;

  const currentPalette = isLight
    ? { ...palette.light, mode: "light" }
    : { ...palette.dark, mode: "dark" };

  const themeOptions = useMemo(() => {
    const shadows = getShadows();
    const customShadows = getCustomShadows(palette);
    return {
      typography: {
        fontFamily: "Philosopher",
      },
      palette: currentPalette,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    };
  }, [isLight]);

  const theme = createMuiTheme(themeOptions);
  theme.components = getOverrides(theme);

  const dfdf = 1;

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
