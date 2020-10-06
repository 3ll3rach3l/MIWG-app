import React, {useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Pages from './pages/Pages'
import { useDispatch } from "react-redux";
import { setUser } from "./store/actions/auth";

import UserList from './components/UsersList';


function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
      const loadUser = async () => {
        const res = await fetch("/api/session");
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
    <BrowserRouter>
        <Pages />
        {/* <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch> */}
    </BrowserRouter>
  );
}

export default App;
