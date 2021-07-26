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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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
