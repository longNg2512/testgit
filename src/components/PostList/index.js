import React from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { postsState$ } from '../../redux/selectors'
import * as actions from '../../redux/actions'

const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(postsState$)

    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts.reverse().map(post => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    )
}

export default PostList
