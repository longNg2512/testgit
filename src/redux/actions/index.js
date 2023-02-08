import { createActions, createAction } from 'redux-actions'

export const getType = reduxActions => {
    return reduxActions().type
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: payload => payload,
    getPostsFailure: err => err,
})

export const createPost = createActions({
    createPostRequest: payload => payload,
    createPostSuccess: payload => payload,
    createPostFailure: err => err,
})

export const updatePost = createActions({
    updatePostRequest: payload => payload,
    updatePostSuccess: payload => payload,
    updatePostFailure: err => err,
})

export const deletePost = createActions({
    deletePostRequest: payload => payload,
    deletePostSuccess: undefined,
    deletePostFailure: err => err,
})

export const searchPosts = createActions({
    searchPostsRequest: payload => payload,
    searchPostsSuccess: payload => payload,
    searchPostsFailure: err => err,
})

export const showCreatePostModal = createAction('showCreatePostModal')
export const hideCreatePostModal = createAction('hideCreatePostModal')

export const deletePostModal = createActions({
    showDeletePostModal: payload => payload,
    hideDeletePostModal: undefined,
})

export const updatePostModal = createActions({
    showUpdatePostModal: payload => payload,
})
