import * as React from "react";
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem as MuiMenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { ArrowLeft } from "@mui/icons-material";

const MenuItem = styled(MuiMenuItem)(({ theme, open }: any) => ({
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  color: theme.palette.grey[50],
  height: 50,
  ...(!open ? { width: 50 } : {}),
  "& .MuiListItemIcon-root": {
    color: theme.palette.grey[50],
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.grey[400],
    "& .MuiListItemIcon-root": {
      color: theme.palette.grey[400],
    },
  },
  "&:disabled": {
    color: theme.palette.grey[600],
    opacity: 0.5,
    "& .MuiListItemIcon-root": {
      color: theme.palette.grey[600],
    },
  },
  "&:active": {
    color: theme.palette.grey[900],
    "& .MuiListItemIcon-root": {
      color: theme.palette.grey[900],
    },
  },
  "&.Mui-focusVisible": {
    boxShadow: "0 0 0 4px " + theme.palette.primary.lighter,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[50],
    borderRadius: "6px",
    "& .MuiListItemIcon-root": {
      color: theme.palette.grey[50],
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.grey[50],
      "& .MuiListItemIcon-root": {
        color: theme.palette.grey[50],
      },
    },
  },
  ...(!open && {
    ".MuiListItemIcon-root": {
      minWidth: 20,
    },
  }),
}));

const NavigationItem: React.FC<NavigationItemProps> = ({
  Icon,
  label,
  linkTo,
  onClick,
  isActive,
  open,
  disabled,
  show = true,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleClick = () => {
    if (onClick) return onClick();
    if (linkTo) return navigate(linkTo);
    return;
  };
  return show ? (
    <MenuItem
      disabled={disabled}
      selected={isActive || pathname === linkTo}
      open={open}
      onClick={handleClick}
      disableRipple
    >
      <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
      {open && <ListItemText>{label}</ListItemText>}
    </MenuItem>
  ) : null;
};

const ListHeader = ({ open, header }: any) =>
  open && header ? (
    <Box sx={{ mb: 3 }}>
      <Typography variant={"body1"} sx={{ color: (t) => t.palette.grey[600] }}>
        {header}
      </Typography>
    </Box>
  ) : null;

const ListDivider = () => (
  <Divider
    sx={{
      my: "20px",
      borderColor: (t) => t.palette.grey[700],
    }}
  />
);

interface NavigationItemProps {
  Icon: any;
  label: string;
  onClick?: () => void;
  linkTo?: string;
  isActive?: boolean;
  open?: boolean;
  dark?: boolean;
  disabled?: boolean;
  show?: boolean;
}

interface ListProps {
  header?: string;
  items?: NavigationItemProps[];
}
interface NavigationProps {
  topLists?: ListProps[];
  bottomLists?: ListProps[];
  open?: boolean;
  handleOpen?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  topLists,
  bottomLists,
  open,
  handleOpen,
}) => {
  return (
    <Box sx={{ height: "100%" }}>
      <MenuList
        component="nav"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 0,
        }}
        disableListWrap
        autoFocusItem
      >
        <Box>
          {topLists?.map((section, si) => (
            <Box key={`${section?.header}${si}`}>
              <ListDivider />
              <ListHeader open={open} header={section?.header} />
              {section?.items?.map((props, i) => (
                <NavigationItem key={i} {...props} open={open} />
              ))}
            </Box>
          )) || null}
        </Box>
        <Box sx={{ mb: 10 }}>
          {bottomLists?.map((section, si) => (
            <Box key={`${section?.header}${si}`}>
              <ListDivider />
              <ListHeader open={open} header={section?.header} />
              {section?.items?.map((props, i) => (
                <NavigationItem key={i} {...props} open={open} />
              ))}
            </Box>
          )) || null}
          <ListDivider />
          <NavigationItem
            Icon={(props: any) => (
              <ArrowLeft
                {...props}
                style={open ? {} : { transform: "rotate(180deg)" }}
              />
            )}
            label={"Collapse"}
            onClick={handleOpen}
            open={open}
          />
        </Box>
      </MenuList>
    </Box>
  );
};

export default Navigation;
