import React, { useState } from 'react'
import { useAuth } from '../auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Box, Typography } from '@material-ui/core'
import { useStyles } from '../styles/style'
const Login = () => {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }

    const handleGoback = () => {
        auth.login(null)
        navigate('/')
    }

    const handleRegister = () => {
        auth.login(null)
        navigate('/register')
    }
    return (
        <Container>
            <Typography className={classes.loginPage} variant='h3'>Login Page</Typography>
            <Box className={classes.loginPage}>
                <label>
                    Username: <input type='text' onChange={e => { setUser(e.target.value); console.log('e', e.target.value) }} />
                </label>
                <label>
                    Password: <input type='password' onChange={e => setUser(e.target.value)} />
                </label>
                <Box className={classes.loginButtons}>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                    <button onClick={handleGoback}>
                        Go Back
                    </button>
                </Box>
                <Box>
                    <button onClick={handleRegister}>
                        Register
                    </button>
                </Box>

            </Box>
        </Container>
    )
}

export default Login
