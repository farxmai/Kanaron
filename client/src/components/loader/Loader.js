import { Box } from "@material-ui/core";
import React from "react";
import DiceIcon from "../icons/DiceIcon";
import "./Loader.css";

class Loader extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  render() {
    return (
      <Box
        className="loader"
        sx={{ background: (theme) => theme.palette.primary.main }}
      >
        <DiceIcon
          className="spinner-dice"
          style={{ width: 100, height: 100 }}
        />
      </Box>
    );
  }
}

export default Loader;
