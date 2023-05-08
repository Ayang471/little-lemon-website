import React from 'react'
import { Formik, Field } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
} from "@chakra-ui/react";
import '../styles/LogInFormStyles.css'


function LoginForm() {
    return (
        <div className='login-form'>
            <Flex bg="#495e57" align="center" justify="center" h="100vh">
                <Box className="form-box">
                    <div className='row'>
                        <h1>
                            Log In
                        </h1>
                    </div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            rememberMe: false
                        }}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                            console.log(values)
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl className='formbox'>
                                        <FormLabel htmlFor="email" className="form-text">Email Address</FormLabel>
                                        <Field
                                            className='inputField'
                                            as={Input}
                                            id="email"
                                            name="email"
                                            type="email"
                                            variant="filled"
                                            placeholder="email address"
                                        />
                                    </FormControl>
                                    <FormControl isInvalid={!!errors.password && touched.password}>
                                        <FormLabel htmlFor="password" className="form-text">Password</FormLabel>
                                        <Field
                                            className='inputField'
                                            as={Input}
                                            id="password"
                                            name="password"
                                            type="password"
                                            variant="filled"
                                            placeholder="password"
                                            validate={(value) => {
                                                let error;
                                                if (value.length < 6) {
                                                    error = "Password must contain at least 6 characters";
                                                }
                                                return error;
                                            }}
                                        />
                                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                                    </FormControl>
                                    <Field
                                        as={Checkbox}
                                        id="rememberMe"
                                        name="rememberMe"
                                        className="rememberMe"
                                    >
                                        Remember me?
                                    </Field>
                                    <Button type="submit" width="full" className="form-button">
                                        Login
                                    </Button>
                                </VStack>
                            </form>
                        )}
                    </Formik>
                </Box>
                {/*} <div>
                    <Image className='logo4'src={asset2} alt='footerlogo' width='35px' />
                </div>
                <div>
                    <Image className='logo5'src={asset2} alt='footerlogo' width='35px' />
                </div>
                <div>
                    <Image className='logo6'src={asset2} alt='footerlogo' width='35px' />
                                        </div>*/}
            </Flex>
        </div>
    )
}

export default LoginForm