import { createBrowserRouter, Outlet } from 'react-router-dom'
import AuthProvider from '../context/AuthProvider'
import HomePage from '../pages/Home'
import PostsPage from '../pages/Posts'
import LoginPage from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <LoginPage />,
                path: '/login',
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <HomePage />,
                        path: '/',
                    },
                    {
                        element: <PostsPage />,
                        path: '/posts',
                    },
                ],
            },
        ],
    },
])
