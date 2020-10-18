import React, { useState } from "react";
import { signup } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router-dom";


import "./auth.css";
import AuthButton from "../components/AuthButton";
import { Button, TextField, Avatar } from "@material-ui/core";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/3ll3rach3l/MIWG-app//">
        Lauren Beard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black'
  },
  paper: {
    margin: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    width: '100%'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupPage() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.auth.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password));
  };

  if (currentUserId) return <Redirect to="/" />;

  return (
      <Container component='main' maxWidth='xs'>
         
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                id="username"
                label="Username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
            />
            
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                id="emailSignup"
                label="Email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
            />
         
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="passwordSignup"
                onChange={(e) => setPassword(e.target.value)}
              />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
             onClick={handleSubmit}>Sign Up
             </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2" onClick={handleDemoSubmit}>
                  Demo Sign In
              </Link>
              </Grid> */}
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already a member? Sign In"}
                </Link>
              </Grid>
            </Grid>
        </form>
        </Paper>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
   
  );
}

