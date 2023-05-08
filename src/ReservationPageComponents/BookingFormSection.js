
import React from 'react'
import { useState } from 'react'
import '../styles/BookingFormStyles.css'
import AboutAndInquiries from './AboutAndInquiries'
import Container from '@mui/material/Container';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import './ConfirmedBooking';

function BookingFormSection({ availableTimes, submitForm, formData }) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userNumber, setUserNumber] = useState('')
    const [partySize, setPartySize] = useState('')
    const [resDate, setResDate] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [resOccasion, setResOccasion] = useState('');
    const [resTime, setResTime] = useState('');
    const [preference, setPreference] = useState('');

    const occasions = [
        "Birthday",
        "Anniversary",
        "Engagement",
        "Date",
        "Business Meal",
        "Other"
    ]

    const preferences = [
        "Standard",
        "Indoor",
        "Outdoor"
    ]


    const handleGuestNumber = (e) => {
        setPartySize(e.target.value)
    }


    const handleSelectedTime = (e) => {
        setResTime(e.target.value)
    }


    const handleDateChange = (e) => {
        setResDate(e.target.value);
    }


    const handleSelectedOccasion = (e) => {
        setResOccasion(e.target.value);
    }


    const handleSpecialRequest = (e) => {
        setSpecialRequest(e.target.value)
    }

    const handlePreference = (e) => {
        setPreference(e.target.value)
    }

    const clearForm = (e) => {
        setFName("");
        setLName("");
        setUserEmail("");
        setUserNumber("");
        setPartySize("");
        setResTime("");
        setResDate("");
        setResOccasion("");
        setSpecialRequest("");
        setPreference("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            first_name: fName,
            last_name: lName,
            email: userEmail,
            phone_number: userNumber,
            party_size: partySize,
            reservation_date: resDate,
            reservation_time: resTime,
            reservation_occasion: resOccasion,
            special_request: specialRequest,
            seating_preference: preference,
        }
        submitForm(formData);
        console.log(formData)
        alert(`Your have successfully made the reservation on ${resDate} at ${resTime}. Thank you for dining with us!
      -- form data object can be viewed in console.`)
        clearForm();
    }


    return (
        <div className="booking-form">
            <section className="title">
                <h1>Little Lemon</h1>
            </section>
            <Container>
                <form onSubmit={handleSubmit} >
                    <div className='reserve-title'>
                        <h2>Reserve Your Table</h2>
                        <div className="border"></div>
                    </div>
                    <div className='row row-cols-1 row-cols-sm-2 d-flex justify-content-space-between'>
                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='first_name'>
                                        First Name:
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        type="text"
                                        //name='fname'
                                        name="first_name"
                                        id="first_name"
                                        value={fName}

                                        onChange={(e) => {
                                            setFName(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className=" user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="last_name">
                                        Last Name:
                                    </label>
                                </div>
                                <div className='col'>

                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        value={lName}

                                        onChange={(e) => {
                                            setLName(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>

                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='email'>
                                        Email Address:
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        type="text"
                                        name='email'
                                        id="useremail"
                                        value={userEmail}

                                        onChange={(e) => {
                                            setUserEmail(e.target.value)
                                        }} />
                                </div>
                            </div>
                        </div>

                        <div className=" user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='phone_number'>
                                        Phone Number:
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        type="tel"
                                        name='phone_number'
                                        id="userNumber"
                                        placeholder="(xxx)-xxx-xxxx"
                                        value={userNumber}

                                        onChange={(e) => {
                                            setUserNumber(e.target.value)
                                        }} />
                                </div>
                            </div>


                        </div>

                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='party_size'>
                                        Party Size:
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        type="number"
                                        name='party_size'
                                        id="partySize"
                                        value={partySize}

                                        onChange={handleGuestNumber} />
                                </div>
                            </div>


                        </div>

                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='reservation_date'>
                                        Date <i> - Required</i>:
                                    </label>
                                </div>
                                <div className='col'>
                                    <input
                                        type="date"
                                        name='reservation_date'
                                        id="date"
                                        value={resDate}

                                        onChange={handleDateChange} />
                                </div>
                            </div>



                        </div>

                        <div className=" user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='reservation_time' >
                                        Time <i>- Required</i>:
                                    </label>
                                </div>
                                <div className='col'>
                                    <select placeholder='Select option' name='reservation_time' value={resTime} onChange={handleSelectedTime}>
                                        {availableTimes.map((time) =>
                                            <option key={time} value={time}>
                                                {time}
                                            </option>)}
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div className=" user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="reservation_occasion" >
                                        Occasion:
                                    </label>
                                </div>
                                <div className='col'>
                                    <select placeholder='Select option' name="reservation_occasion" value={resOccasion} onChange={handleSelectedOccasion}>
                                        {occasions.map((occasion) =>
                                            <option key={occasion} value={occasion}>
                                                {occasion}
                                            </option>
                                        )}
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="seating_preference">
                                        Seating Preference:
                                        <RadioGroup className='radio-section' name="seating_preference" value={preference} required>
                                            <Stack className='preference-section' direction='column' pt={10} pl={12}>
                                                {preferences.map((preference) =>
                                                    <Radio key={preference} value={preference} onChange={handlePreference}>{preference}</Radio>
                                                )}
                                            </Stack>
                                        </RadioGroup>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="special_request" >
                                        Special Requests:
                                    </label>
                                </div>
                                <textarea name="special_request" placeholder="Special requests..." value={specialRequest} onChange={handleSpecialRequest} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <small>
                            <p className='notes' >
                                *Note: Please call #(xxx)-xxx-xxxx to make reservation for party of 8 people and up. Thank you for your cooperation. We look forward in speaking with you.
                            </p>
                        </small>
                    </div>
                    <div className='bookingbtn'>
                        <button className='book-Btn' onClick={(e) => submitForm(formData)}>Book Table</button>
                    </div>
                </form>
            </Container>
            <AboutAndInquiries />
        </div>
    )
}

export default BookingFormSection