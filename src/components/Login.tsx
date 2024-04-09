import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LockIcon, StarIcon } from '@chakra-ui/icons'
import {
    FormLabel,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Button,
    Checkbox,
    Link,
    HStack,
    VStack
} from '@chakra-ui/react'

type Input = {
    username: string,
    password: string
  }

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<Input>()

    function handleInputChange_Username(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    function handleInputChange_Password(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    function onSubmit() {
        
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors.username) || Boolean(errors.password)}>
                <FormLabel>Login</FormLabel>
                <VStack>
                    <InputGroup>
                        <InputRightElement>
                            <StarIcon/>
                        </InputRightElement>
                        <Input
                            id='username'
                            placeholder='Username'
                            {...register('username', {
                                required: 'Username is required',
                                min:1
                            })}
                            onChange={handleInputChange_Username}/>
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.username ? errors.username.message : ''}
                    </FormErrorMessage>

                    <InputGroup>
                        <InputRightElement>
                            <LockIcon/>
                        </InputRightElement>
                        <Input 
                            id='password'
                            placeholder='Password'
                            {...register('password', {
                                required: 'Password is required',
                                min:1
                            })}
                            onChange={handleInputChange_Password}/>
                    </InputGroup>
                    <FormErrorMessage>
                        {errors.password ? errors.password.message : ''}
                    </FormErrorMessage>
                </VStack>
            </FormControl>
            <HStack>
                <Checkbox>Remember Me</Checkbox>
                <Link>Forgot Password?</Link>
            </HStack>
            <Button isLoading={isSubmitting} type='submit'>
                Login
            </Button>
            <HStack>
                <Text>Don't have an account?</Text>
                <Link>Register</Link>
            </HStack>
        </form>
    )
}