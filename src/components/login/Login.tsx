import {
    FormControl,
    FormErrorMessage,
    Input,
    Text,
    Button,
    Checkbox,
    Link,
    Box,
    Center,
    Flex,
    VStack
} from '@chakra-ui/react'
import { 
    Formik,
    FormikHelpers,
    Form,
    Field
 } from 'formik'

interface FormValues {
    email: string,
    password: string,
    rememberMe: boolean
}

const loginStyle = {
    center: {
        minH: '100vh',
        font: 'sans-serif',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        bgImage: 'url(' + require('./1023-Exhibition.jpg') + ')'
    },
    outerBox: {
        h: 'lg',
        w: 'lg',
        p: '40px',
        shadow: 'xl',
        borderRadius: 'md',
        backdropFilter: 'auto',
        backdropBlur: '8px',
        bgColor: 'transparent',
        bgGradient: 'linear(to-l, rgba(0, 0, 0, 0.327), rgba(0, 0, 0, 0.4))'
    },
    innerBox: {
        h: '100%',
        w: '100%',
        color: 'white'
    },
    title: {
        mb: '4vh',
        fontSize: '3xl',
        fontWeight: 'bold'
    },
    field: {
        borderRadius: '3xl',
        borderColor: 'white'
    },
    button: {
        width: 'full',
        color: '#000000cc',
        borderRadius: '3xl'
    },
    link: {
        fontWeight: 'bold'
    }
}

export default function Login() {
    
    function validatePassword(password: string) {
        // todo
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        // todo
    }

    return (
        <Center sx={loginStyle.center}>
            <Box sx={loginStyle.outerBox}>
                <Box sx={loginStyle.innerBox}>
                    
                    <Flex justify='center' sx={loginStyle.title}>
                        <Text>Login</Text>
                    </Flex>

                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            rememberMe: false
                        }}
                        onSubmit={(values, actions) => handleSubmit(values, actions)}>

                        <Form>
                            <VStack spacing={4}>
                                <FormControl>
                                    <Field
                                        sx={loginStyle.field} 
                                        as={Input}
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        variant='filled'/>
                                    <FormErrorMessage>ERRROROROROROROOR</FormErrorMessage>
                                </FormControl>
                                <FormControl>
                                    <Field 
                                        sx={loginStyle.field}
                                        as={Input}
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        type='password'
                                        variant='filled'
                                        validate={validatePassword}/>
                                    <FormErrorMessage>EROROROROROROR:D</FormErrorMessage>
                                </FormControl>

                                <Flex justify='space-between' minW='100%'>
                                    <Field
                                        as={Checkbox}
                                        id='rememberMe'
                                        name='rememberMe'>
                                            Remember me</Field>

                                    <Link>Forgot Password?</Link>
                                </Flex>

                                <Button 
                                    sx={loginStyle.button}
                                    type='submit'>Login</Button>

                                <Flex justify='center'>
                                    <Text>Don't have an account? <Link sx={loginStyle.link}>Register</Link></Text>
                                </Flex>
                            </VStack>
                        </Form>
                  </Formik>              
                </Box>
            </Box>
        </Center>
    )
}