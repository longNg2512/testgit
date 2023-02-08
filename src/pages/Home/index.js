import React from 'react'
import { Button } from '@mui/material'
import { Send } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '5em',
            }}
        >
            <Link to={'posts'} style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large" endIcon={<Send />}>
                    Ấn vào đây
                </Button>
            </Link>
        </div>
    )
}

export default HomePage
