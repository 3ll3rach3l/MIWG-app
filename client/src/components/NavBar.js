import React from "react";
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useModal from "../components/useModal";
import FormModal from "../components/FormModal";
import LogoutButton from "../components/LogoutButton";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(-30)
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isShowing, toggle } = useModal();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button variant="contained" color="secondary" onClick={toggle}>
            <Typography variant="h8" className={classes.title}>
                Report Missing
            </Typography>
          </Button>
          <FormModal isShowing={isShowing} hide={toggle} />
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          {/* <Button variant="contained" color="inherit">Log Out</Button> */}
          <LogoutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
