import { Box } from "@material-ui/core";
import { ALTER_IMG } from "../../constants";

const ImageCard = ({ id, title, src, ...rest }) => (
  <Box
    sx={{
      width: "100%",
      height: "450px",
      marginBottom: "15px",
      padding: "5px",
      borderRadius: "15px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: " 7px 9px 10px -1px rgba(0, 0, 0, 0.57)",
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
);

export default ImageCard;
