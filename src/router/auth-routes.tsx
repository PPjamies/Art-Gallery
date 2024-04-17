import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import AccountRecovery from '../components/auth/AccountRecovery'

export default function AuthRoutes(){
    return (
        <Routes>
            <Route path='/' element={ <Login/> }/>
            <Route path='login' element={ <Login/> }/>
            <Route path='Register' element={ <Register/> }/>
            <Route path='account-recovery' element={ <AccountRecovery/> }/>
        </Routes>
    )
}
