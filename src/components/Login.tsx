import { LockIcon, StarIcon } from '@chakra-ui/icons'
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
    InputGroup,
    InputRightElement,
    HStack,
    Flex,
    VStack
} from '@chakra-ui/react'
import { 
    Formik,
    FormikHelpers,
    Form,
    Field,
 } from 'formik'

interface FormValues {
    email: string,
    password: string,
    rememberMe: boolean
}

export default function Login() {
    
    function validatePassword(password: string) {
        // todo
    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        // todo
    }


    const innerBoxStyle = {
        h: '100%',
        w: '100%',
        color: 'white'
    }

    const outerBoxStyle = {
        h: 'lg',
        w: 'lg',
        p: '40px',
        shadow: 'xl',
        borderRadius: 'md',
        backdropFilter: 'auto',
        backdropBlur: '8px',
        bgColor: 'transparent',
        bgGradient: 'linear(to-l, rgba(0, 0, 0, 0.327), rgba(0, 0, 0, 0.4))'
    }

    const centerStyle = {
        minH: '100vh',
        bgImage: 'url(' + require('./1023-Exhibition.jpg') + ')',
        bgRepeat: 'no-repeat',
        bgPosition: 'center',
    }
    

    const buttonStyle = {
        borderRadius: '3xl',
        width: 'full'
    }

    return (
        <Center sx={centerStyle}>
            <Box sx={outerBoxStyle}>
                <Box sx={innerBoxStyle}>
                    
                    <Flex justify='center'>
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
                            <FormControl>
                                <Field 
                                    as={Input}
                                    id='email'
                                    name='email'
                                    type='email'
                                    variant='filled'/>
                                <FormErrorMessage>ERRROROROROROROOR</FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <Field 
                                    as={Input}
                                    id='password'
                                    name='password'
                                    type='password'
                                    variant='filled'
                                    validate={validatePassword}/>
                                <FormErrorMessage>EROROROROROROR:D</FormErrorMessage>
                            </FormControl>

                            <Flex justify='space-between'>
                                <Field
                                    as={Checkbox}
                                    id='rememberMe'
                                    name='rememberMe'
                                    colorScheme='purple'>Remember me</Field>

                                <Link>Forgot Password?</Link>
                            </Flex>

                            <Button 
                                sx={buttonStyle}
                                type='submit'>Login</Button>

                            <Flex justify='center'>
                                <Text>Don't have an account?<Link fontWeight='bold'>Register</Link></Text>
                            </Flex>

                        </Form>
                  </Formik>              
                </Box>
            </Box>
        </Center>
    )
}