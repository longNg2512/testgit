import React, { useContext } from 'react'
import { Typography, Button, Box } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
    }

    if (user?.uid) {
        setTimeout(() => {
            navigate('/')
        }, 1)
        return
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '3em',
            }}
        >
            <Box>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Welcome to Eledevo Blog
                </Typography>
                <Button
                    variant="outlined"
                    sx={{ ml: 5, alignItems: 'center' }}
                    onClick={handleLoginWithGoogle}
                >
                    Login with Google
                </Button>
            </Box>
        </div>
    )
}

export default LoginPage
