import React from 'react';
import { connect } from 'react-redux';
import { getWeather, startError } from './actions';
import { useEffect } from 'react';

const Weather =({ weather, isGetting, error, dispatch })=>{
    

    useEffect(()=> {
        dispatch(getWeather());
    }, []);

    if (error) {
    return <h2>error: {error}</h2>;
    }

    if (isGetting) {
    return <h2>Getting Weather</h2>;
    }

    return(
        <div className='weather-card'></div>
    )
}
const mapStateToProps = state => {
    return {
      weather: state.weather,
      isGetting: state.isGetting,
      error: state.error
    };
  };

export default connect(mapStateToProps)(Weather);