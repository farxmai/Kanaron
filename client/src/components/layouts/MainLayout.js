import { useState } from "react";
import { Box } from "@material-ui/core";
import { useLayoutStyles } from "./styles";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({ user, children }) {
  const classes = useLayoutStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Header open={open} handleOpen={handleDrawerOpen} user={user} />
      <Sidebar open={open} handleClose={handleDrawerClose} user={user} />
      <main className={classes.main}>
        <Box className={classes.toolbar} />
        <Box className={classes.content}>{children}</Box>
      </main>
    </Box>
  );
}
