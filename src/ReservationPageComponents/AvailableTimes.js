import React, { useEffect, useReducer } from 'react';
import BookingFormSection from './BookingFormSection';
import { fetchAPI } from './BookingAPI.js'
import { useNavigate } from 'react-router-dom';

function AvailableTimes() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateTimes':
                return action.payload;
            default:
                return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(reducer, []);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (formData) => {
            const availableTimes = await fetchAPI(new Date());
            dispatch({ type: 'updateTimes', payload: availableTimes });
        };
        fetchData();
    }, []);

    const handleTimeChange = (selectedTime) => {
        const fetchAPI = availableTimes.filter(time => time !== selectedTime);
        dispatch({ type: 'updateTimes', payload: fetchAPI });
    }

    const submitForm = async (formData) => {
        const response = await fetch('./BookingFormSection/formData');
        if (response.ok) {
            navigate('./confirmation');
        } else {
            console.log(`form submission failed with status ${response.status}`);
        }
    };


    return (
        <div>
            <BookingFormSection
                availableTimes={availableTimes}
                onTimeChange={handleTimeChange}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    )
}


export default AvailableTimes