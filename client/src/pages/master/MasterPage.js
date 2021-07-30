import React, { useState } from "react";
import {
  faAlignJustify,
  faUsers,
  faUserEdit,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  AppBar,
  Tab,
  Box,
  makeStyles,
  Tabs,
  Typography,
} from "@material-ui/core";

const tabs = [
  { label: "Менеджер данных", icon: faDatabase },
  { label: "Редактор героев", icon: faUserEdit },
  { label: "Юзеры", icon: faUsers },
  { label: "Блог", icon: faAlignJustify },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function MasterPageLayout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <div className={classes.root}></div>;
}

export default MasterPageLayout;
