import React from "react";
import history from '../store/history'

import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem onClick={(()=> history.push('/'))}> Home </MenuItem>
              <MenuItem onClick={()=> history.push('/missing')}>View Missing</MenuItem>
              {/* <MenuItem onClick={handleClose}>Finished Reading</MenuItem> */}
          </IconButton>
          <Button variant="contained" color="secondary" onClick={toggle}>
            <Typography variant="h8" className={classes.title}>
                Report Missing
            </Typography>
          </Button>
          <FormModal isShowing={isShowing} hide={toggle} />
          
          <LogoutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
