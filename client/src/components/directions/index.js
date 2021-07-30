import { Box } from "@material-ui/core";

export const FlexCenter = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...props.sx,
    }}
  ></Box>
);

export const FlexBetween = (props) => (
  <Box
    {...props}
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ...props.sx,
    }}
  ></Box>
);

export const FlexColumn = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      ...props.sx,
    }}
  ></Box>
);

export const FlexWrapped = (props) => (
  <Box
    {...props}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      ...props.sx,
    }}
  ></Box>
);
