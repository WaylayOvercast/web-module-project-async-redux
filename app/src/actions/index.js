import axios from 'axios';


const api_key = 'e5523aea34c46271d4805bc4c1a2db69';

export const getWeather = ()=> {

    return (dispatch) => {
        dispatch(getStart());

        axios.get(`api.openweathermap.org/data/2.5/weather?zip=73044&appid=${api_key}`)
            .then(resp=> { console.log(resp)
            dispatch(startSuccess(resp.data));
        })
        .catch(err => {
            dispatch(startError());
        });
    }
}
export const GET_START = 'GET_START' 
export const START_SUCCESS = "START_SUCCESS";
export const START_ERROR = "FETCH_ERROR";


export const getStart = () => {
    return({type: GET_START})
}

export const startSuccess = (weather)=> {
    return({type: START_SUCCESS, payload:weather});
}

export const startError = (err)=> {
    return({type: START_ERROR, payload:err});
}