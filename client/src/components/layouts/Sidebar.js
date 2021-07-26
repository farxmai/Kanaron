import { useHistory } from "react-router";
import { useTheme } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { useLayoutStyles } from "./styles";
import clsx from "clsx";
import { sidebarLinks } from "./links";

export default function Sidebar({ open, handleClose }) {
  const classes = useLayoutStyles();
  const theme = useTheme();
  const history = useHistory();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <Box className={classes.toolbar}>
        <IconButton onClick={handleClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {sidebarLinks.map(({ link, label, Icon }, index) => (
          <ListItem
            button
            key={index}
            onClick={() => {
              handleClose();
              history.push(link);
            }}
          >
            <ListItemIcon sx={{ minWidth: 50 }}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}