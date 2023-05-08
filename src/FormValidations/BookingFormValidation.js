import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    first_name: Yup.string()
        .required('Required'),

    last_name: Yup.string()
        .required('Required'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),

    phone_number: Yup.string()
        .matches(/^\d+$/, 'Must be a valid phone number')
        .min(10, 'Must be at least 10 digits')
        .max(15, 'Must be 15 digits or less')
        .required('Required'),

    party_size: Yup.number()
        .min(1, 'Must be at least 1')
        .max(8, 'Please call to make reservation for party size of 9 and up')
        .required('Required'),

    reservation_date: Yup.date()
        .required('Required'),

    reservation_time: Yup.string()
        .required('Required'),

    reservation_occasion: Yup.string()
        .required(),

    seating_preference: Yup.string()
        .required('Required'),

    special_request: Yup.string()
        .max(250)
        .required('Required'),
})