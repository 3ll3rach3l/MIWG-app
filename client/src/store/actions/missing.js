import Cookies from 'js-cookie';

export const GET_MISSING = 'GET_MISSING';
export const GET_ONE_MISSING = 'GET_ONE_MISSING';
export const POST_MISSING = 'POST_MISSING';
export const UPDATE_MISSING = 'UPDATE_MISSING';

///////////////ACTIONS//////////////////

export const getMissing = (missing) =>{
    return {
        type: GET_MISSING,
        missing
    }
}

export const getOneMissing = (missing) => {
    return {
        type: GET_ONE_MISSING,
        missing
    }
}

export const postMissing = (missing) => {
    return {
        type: POST_MISSING,
        missing
    }
}

export const updateMissing = (missing) =>{
    return{
        type: UPDATE_MISSING,
        missing
    }
}

///////////////////THUNKS/////////////////
export const fetchMissing = () => {
    return async (dispatch) => {
        const res = await fetch('/api/missing');
        res.data = await res.json()

        if(res.ok) dispatch(getMissing(res.data.missings))
        return res.data
    }
}

export const fetchOneMissing = (id) => {
    return async (dispatch) => {
        const res = await fetch(`/api/missing/search_by_id?id=${id}`);
        res.data = await res.json();
        dispatch(getOneMissing(res.data.missings))

        return res
    }
}

export const newMissing = (
    fullName, 
    age, 
    tribalAffiliation, 
    location, 
    dateLastSeen, 
    details, 
    status, 
    userId,
    lat, 
    lng, 
    
    ) => {
    // const body = { fullName, age, tribalAffiliation, location, dateLastSeen, details, status, userId, lat, lng };
    // console.log("this is the body", body);
    return async dispatch => {
        
        const res = await fetch('/api/missing/new', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({
                fullName, 
                age, 
                tribalAffiliation, 
                location, 
                dateLastSeen, 
                details, 
                status, 
                userId,
                lat, 
                lng, 
                
            }),
        });
        console.log('this is lat lng', lat, lng)
        
        console.log('res', res)
        res.data = await res.json();
       console.log('this is res.data', res.data.newMissing)
       

        if(res.ok){
            dispatch(postMissing(res.data.newMissing))
        } 
        // return res;
    }
}

export const modifyMissing = (
    age,
    dateLastSeen, 
    details, 
    fullName, 
    id, 
    lat, 
    lng, 
    location, 
    status,
    tribalAffiliation, 
    userId, 
) => {
     const body = { age,
    dateLastSeen, 
    details, 
    fullName, 
    id, 
    lat, 
    lng, 
    location, 
    status,
    tribalAffiliation, 
    userId, };
    console.log("this is the body", body);
    return async dispatch => {
        const res = await fetch('/api/missing/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               age,
    dateLastSeen, 
    details, 
    fullName, 
    id, 
    lat, 
    lng, 
    location, 
    status,
    tribalAffiliation, 
    userId, 
            })
        });
        res.data = await res.json()
        if(res.ok){
            dispatch(updateMissing(res.data.missings))
        }
        // return res;
    }
}