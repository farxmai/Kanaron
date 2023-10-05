import styled from "@emotion/styled";
import { Box, Theme, Typography } from "@mui/material";

export const Row = styled(Box)(
  ({
    theme,
    wrap,
    fullWidth,
  }: {
    theme?: Theme;
    wrap?: boolean;
    fullWidth?: boolean;
  }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    ...(wrap && { flexWrap: "wrap" }),
    ...(fullWidth && { width: "100%" }),
  })
);

export const Column = styled(Box)(
  ({ theme, center }: { theme?: Theme; center?: boolean }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: center ? "center" : "flex-start",
    justifyContent: center ? "center" : "flex-start",
  })
);

export const Center = styled(Box)(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Card = styled(Box)(({ theme }: { theme?: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme?.palette.grey[900],
  border: "1px solid #454F5B",
  borderRadius: "10px",
  padding: "20px",
}));

export const Divider = styled(Box)(({ theme }: { theme?: Theme }) => ({
  borderTop: "1px solid #454F5B",
  marginTop: theme?.spacing(5),
  marginBottom: theme?.spacing(5),
}));

export const DividerVertical = styled(Box)(({ theme }: { theme?: Theme }) => ({
  borderLeft: "1px solid #454F5B",
  marginLeft: theme?.spacing(5),
  marginRight: theme?.spacing(5),
}));

export const DividedContent = styled(Box)(({ theme }: { theme?: Theme }) => ({
  borderTop: "1px solid #454F5B",
  borderBottom: "1px solid #454F5B",
}));

export const ScrollWrapper = styled(Box)(() => ({
  overflow: "scroll",
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));
