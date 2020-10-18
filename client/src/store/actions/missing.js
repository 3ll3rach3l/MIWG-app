import Cookies from 'js-cookie';

export const GET_MISSING = 'GET_MISSING';
export const GET_ONE_MISSING = 'GET_ONE_MISSING';
export const POST_MISSING = 'POST_MISSING';

///////////////ACTIONS//////////////////

export const getMissing = (missing) =>{
    return {
        type: GET_MISSING,
        missing
    }
}

export const getOneMissing = (oneMissing) => {
    return {
        type: GET_ONE_MISSING,
        oneMissing
    }
}

export const postMissing = (missing) => {
    return {
        type: POST_MISSING,
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
    const body = { fullName, age, tribalAffiliation, location, dateLastSeen, details, status, userId, lat, lng };
    console.log("this is the body", body);
    return async dispatch => {
        console.log('hello')
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
