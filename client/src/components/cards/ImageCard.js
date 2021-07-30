import { Box, Typography } from "@material-ui/core";
import { ALTER_IMG } from "../../constants";

export const ImageCard = ({ id, title, src, withTitle = false, ...rest }) => (
  <Box
    sx={{
      mb: 2,
      transition: "text-shadow 0.2s ease",
      "&:hover": {
        textShadow: "rgba(0, 0, 0, 1) 1px 0 10px;",
      },
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "450px",
        padding: "5px",
        borderRadius: "15px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "box-shadow 0.2s ease",
        boxShadow: " 7px 9px 10px -1px rgba(0, 0, 0, 0.57)",
        "&:hover": {
          boxShadow: " 7px 9px 10px -1px rgba(0, 0, 0, 1)",
        },
      }}
    >
      <Box
        sx={{ maxWidth: "100%", maxHeight: "420px" }}
        component="img"
        src={src || ALTER_IMG}
        alt={title}
        title={title}
        {...rest}
      />
    </Box>
    {withTitle && (
      <Typography
        sx={{
          fontSize: 24,
          color: "white",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    )}
  </Box>
);
