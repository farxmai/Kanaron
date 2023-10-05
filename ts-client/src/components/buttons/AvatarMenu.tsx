import * as React from "react";
import styled from "@emotion/styled";

import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useAuth } from "hooks/useAuth";

export interface AvatarMenuOption {
  title: string;
  onClick: () => void;
}

export interface AvatarMenuProps {
  options?: AvatarMenuOption[];
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ options = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderName = "A";
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <HeaderAvatar>{renderName}</HeaderAvatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map(({ title, onClick }: AvatarMenuOption) => (
          <MenuItem
            key={title}
            onClick={() => {
              onClick();
              handleClose();
            }}
          >
            <Typography variant={"body1"} color="black">
              {title}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AvatarMenu;

const HeaderAvatar = styled(Avatar)(({ theme }: any) => ({
  color: theme.palette.grey[50],
  backgroundColor: theme.palette.grey[600],
  fontWeight: "600",
  fontSize: 13,
}));
