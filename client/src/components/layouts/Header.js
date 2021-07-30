import { useState } from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { userLogOut } from "../../services/authHandlers";
import clsx from "clsx";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Button,
  Box,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { navbarLinks, navbarMasterLinks } from "./links";
import { Login, Logout } from "@material-ui/icons";
import { useLayoutStyles } from "./styles";
import DiceIcon from "../icons/DiceIcon";

const StyledMenu = withStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const Header = ({ user, handleOpen, open }) => {
  const classes = useLayoutStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const isMaster = user?.permission === "master";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onLinkClick = (to) => {
    history.push(to);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => history.push("/")}
            sx={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faDiceD20} /> Kanaron
          </Typography>

          {!user ? (
            <Button
              sx={{ color: "white", textTransform: "capitalize" }}
              endIcon={<Login />}
              onClick={() => onLinkClick("login")}
            >
              Войти
            </Button>
          ) : (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {navbarLinks.map(({ link, label, Icon }, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      history.push(link);
                      handleClose();
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 35 }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </MenuItem>
                ))}
                {isMaster && <Divider />}
                {isMaster &&
                  navbarMasterLinks.map(({ link, label, Icon }, i) => (
                    <MenuItem
                      key={i}
                      onClick={() => {
                        history.push(link);
                        handleClose();
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <Icon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={label} />
                    </MenuItem>
                  ))}
                <Divider />
                <MenuItem onClick={userLogOut}>
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary={"Выйти"} />
                </MenuItem>
              </StyledMenu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
