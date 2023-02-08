import React, { useCallback } from 'react'
import { Container } from '@mui/material'
import PostList from '../../components/PostList'
import Header from '../../components/Header'
import { Add } from '@mui/icons-material'
import { StyledFab } from './style'
import CreateUpdateModal from '../../components/CreateUpdateModal'
import { useDispatch } from 'react-redux'
import { showCreatePostModal } from '../../redux/actions'
import DeleteModal from '../../components/DeleteModal'

const PostsPage = () => {
    const dispatch = useDispatch()

    const openShowCreateModal = useCallback(() => {
        dispatch(showCreatePostModal())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreateUpdateModal />
            <DeleteModal />
            <StyledFab color="success" onClick={openShowCreateModal}>
                <Add />
            </StyledFab>
        </Container>
    )
}

export default PostsPage
