import { Link as ReactRouterLink } from 'react-router-dom'
import {
    FormControl,
    FormErrorMessage,
    Input,
    Text,
    Button,
    Link as ChakraLink,
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
    email: string
}

const style = {
    center: {
        minH: '100vh',
        font: 'sans-serif',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',
        bgImage: 'url(' + require('./1023-Exhibition.jpg') + ')'
    },
    box: {
        h: 'lg',
        w: 'lg',
        p: '40px',
        shadow: 'xl',
        color: 'white',
        borderRadius: 'md',
        backdropFilter: 'auto',
        backdropBlur: '8px',
        bgColor: 'transparent',
        bgGradient: 'linear(to-l, rgba(0, 0, 0, 0.327), rgba(0, 0, 0, 0.4))'
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

export default function AccountRecovery() {
    function validatePassword(password: string) {
        // todo

    }

    function handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
        // todo
    }

    return (
        <Center sx={style.center}>
            <Box sx={style.box}>
                <Flex justify='center' sx={style.title}>
                    <Text>Account Recovery</Text>
                </Flex>

                <Text>Enter your email associated with account to get a verification code.</Text>

                <Formik
                    initialValues={{
                        email: ''
                    }}
                    onSubmit={(values, actions) => handleSubmit(values, actions)}>

                    <Form>
                        <VStack spacing={4}>
                            <FormControl>
                                <Field
                                    sx={style.field} 
                                    as={Input}
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    variant='filled'/>
                                <FormErrorMessage>ERRROROROROROROOR</FormErrorMessage>
                            </FormControl>

                            <Button 
                                sx={style.button}
                                type='submit'>Send</Button>
                        </VStack>
                    </Form>
                </Formik>              
            </Box>
        </Center>
    )
}