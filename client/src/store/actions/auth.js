import Cookies from 'js-cookie';

export const SET_USER = 'auth/SET_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';

//////////////////ACTIONS////////////////////

export const setUser = (user) => {
    if (!user){
        return{
            type: SET_USER,
            user: {}
        }
    }
    return{
        type: SET_USER,
        user
    }
}

export const logoutUser = () =>{
    return{
        type: LOGOUT_USER
    }
}

/////////////////////THUNKS////////////////////////

export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
            },
            body: JSON.stringify({ email, password })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user))
        }
        return res;
    }
}

export const signup = (username, email, password) => {
    return async dispatch => {
        const res = await fetch('/api/users/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ username, email, password })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res;
    }
}

export const logout = () => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'delete',
            // headers: {"XSRF-TOKEN": Cookies.get("XSRF-TOKEN")},
            headers: { },
        })
        if (res.ok) {
            dispatch(logoutUser());
        }
        return res;
    }
}

export const loginDemo = () => async (dispatch) => {
    const res = await fetch("/api/session", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({ email: "lauren@example.com", password: "password" })
    });
   
    res.data = await res.json();
   
    if (res.ok) {
        dispatch(setUser(res.data.user))
    }
    return res;
};