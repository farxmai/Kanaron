import * as React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
  CssBaseline,
  AppBar,
  Drawer,
  Box,
  Toolbar,
  Typography,
  PaperProps,
  BoxProps,
} from "@mui/material";
import AvatarMenu, { AvatarMenuOption } from "components/buttons/AvatarMenu";
import { useAuth } from "hooks/useAuth";
import { Row, ScrollWrapper } from "components/boxes";
import DiceIcon from "components/icons/DiceIcon";
import { routes } from "router/routes";
import RaceIcon from "components/icons/RaceIcon";
import ClassIcon from "components/icons/ClassIcon";
import Navigation from "layouts/Navigation";
import HomeIcon from "components/icons/HomeIcon";

const DRAWER_WIDTH_FULL = 270;
const DRAWER_WIDTH_MIN = 82;
const APP_BAR_HEIGHT = 64;
const TABLET_WIDTH = 768;

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  PaperProps?: PaperProps;
  WrapperProps?: BoxProps;
  avatarOptions?: AvatarMenuOption[];
  NavigationHeader?: (props: {
    open?: boolean;
    drawerWidth: number;
  }) => React.ReactElement;
}

export default function DashboardLayout({
  children,
  PaperProps,
  WrapperProps,
  avatarOptions,
  NavigationHeader,
}: DashboardLayoutProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const width = window?.innerWidth;

  const [open, setOpen] = React.useState(width >= TABLET_WIDTH);
  const drawerWidth = open ? DRAWER_WIDTH_FULL : DRAWER_WIDTH_MIN;
  const onClose = () => setOpen(!open);

  React.useEffect(() => {
    if (width <= TABLET_WIDTH) setOpen(false);
    else setOpen(true);
  }, [width]);

  const profileOptions = avatarOptions || [
    { title: "My account", onClick: () => navigate("/account-profile") },
    { title: "Log Out", onClick: signOut },
  ];

  const sidebar = {
    top: [
      {
        header: "MENU",
        items: [
          {
            Icon: HomeIcon,
            linkTo: "/" + routes.dashboard.home,
            label: "Home",
          },
          {
            Icon: RaceIcon,
            linkTo: "/" + routes.dashboard.races,
            label: "Races",
          },
          {
            Icon: ClassIcon,
            linkTo: "/" + routes.dashboard.classes,
            label: "Classes",
          },
        ],
      },
    ],
    bottom: [],
  };

  return (
    <Container>
      <CssBaseline />
      <HeaderBar position="fixed" sx={{ px: 7 }}>
        <HeaderToolbar>
          <Row>
            <DiceIcon style={{ width: 35, height: 35, marginRight: 5 }} />
            <Typography
              variant="h5"
              style={{ fontSize: 35, textTransform: "uppercase" }}
            >
              Kanaron
            </Typography>
          </Row>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <AvatarMenu options={profileOptions} />
          </Box>
        </HeaderToolbar>
      </HeaderBar>
      <AppDrawer variant="permanent" drawerwidth={drawerWidth}>
        <Toolbar />
        <ScrollWrapper
          sx={{
            maxHeight: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
          }}
        >
          <NavigationWrapper open={open} drawerWidth={drawerWidth}>
            {NavigationHeader ? (
              <NavigationHeader open={open} drawerWidth={drawerWidth} />
            ) : null}
            {sidebar?.top ? (
              <Navigation
                topLists={sidebar?.top}
                bottomLists={sidebar?.bottom}
                open={open}
                handleOpen={onClose}
              />
            ) : null}
          </NavigationWrapper>
        </ScrollWrapper>
      </AppDrawer>
      <ContentWrapper component="main" {...WrapperProps}>
        <ContentPaper {...PaperProps}>{children}</ContentPaper>
      </ContentWrapper>
    </Container>
  );
}

export const Container = styled(Box)(({ theme }: any) => ({
  display: "flex",
  minHeight: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
  backgroundColor: theme.palette.grey[900] + "8A",
}));

export const ContentWrapper = styled(Box)(({ theme }: any) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  paddingTop: APP_BAR_HEIGHT,
}));

export const ContentPaper = styled(Box)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(8),
  paddingRight: theme.spacing(8),
  borderRadius: "6px",
  height: "100%",
}));

export const ContentTitle = styled(Typography)(({ theme }: any) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(6),
  color: theme.palette.grey[50],
}));

export const AppDrawer = styled(Drawer)(({ theme, drawerwidth }: any) => ({
  width: drawerwidth,
  minWidth: drawerwidth,
  flexShrink: 0,
  transition: theme.transitions.create(["width"], {
    duration: 200,
  }),
  [`& .MuiDrawer-paper`]: {
    minWidth: drawerwidth,
    boxSizing: "border-box",
    borderRight: 0,
  },
}));

export const NavigationWrapper = styled(Box)(({ theme, open }: any) => ({
  display: "flex",
  flexDirection: "column",

  height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
  overflow: "hidden",
  paddingTop: theme.spacing(7),
  paddingBottom: theme.spacing(7),
  paddingLeft: theme.spacing(open ? 7 : 5),
  paddingRight: theme.spacing(open ? 7 : 5),
  borderRight: "1px solid",
  borderColor: "transparent",
  backgroundColor: theme.palette.grey[900],
}));

export const HeaderBar = styled(AppBar)(({ theme }: any) => ({
  height: APP_BAR_HEIGHT,
  zIndex: theme.zIndex.drawer + 1,
  borderBottom: "1px solid",
  borderColor: "transparent",
  backgroundColor: theme.palette.grey[900],
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }: any) => ({
  borderColor: "transparent",
  backgroundColor: theme.palette.grey[900],
}));
