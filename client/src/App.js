import React, {useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Pages from './pages/Pages'
import { useDispatch } from "react-redux";
import { setUser } from "./store/actions/auth";

import { CssBaseline } from '@material-ui/core';


function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      const loadUser = async () => {
        //backend route to get current user
        const res = await fetch("/api/session/current");
        if (res.ok) {
          res.data = await res.json();
          dispatch(setUser(res.data));
        }
        setLoading(false);
      };
      loadUser();
    }, [dispatch]);

    if (loading) return null;
  console.log("____Rendering app_____")
  return (
    <>
      <BrowserRouter>
      <CssBaseline/>
          <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
