/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const auth = getAuth()

    useEffect(() => {
        const unsubscribed = auth.onIdTokenChanged(user => {
            console.log('[From AuthProvider]', { user })
            if (user?.uid) {
                setUser(user)
                localStorage.setItem('accessToken', user.accessToken)
                return
            }

            setUser({})
            localStorage.clear()
            navigate('/login')
        })

        return () => {
            unsubscribed()
        }
    }, [auth])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
