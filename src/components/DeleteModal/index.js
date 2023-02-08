import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalState$ } from '../../redux/selectors'
import { deletePostModal, deletePost } from '../../redux/actions'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
    Button,
} from '@mui/material'

const DeleteModal = () => {
    const { showDelete, id } = useSelector(modalState$)
    const dispatch = useDispatch()
    const onCloseDelete = useCallback(() => {
        dispatch(deletePostModal.hideDeletePostModal())
    }, [dispatch])
    const onSubmitDelete = useCallback(() => {
        dispatch(deletePost.deletePostRequest(id))
        onCloseDelete()
    }, [dispatch, id, onCloseDelete])

    return (
        <Dialog open={showDelete} onClose={onCloseDelete}>
            <DialogTitle align="center">Delete post?</DialogTitle>
            <Divider />
            <DialogContent>
                The post will be deleted and will never appear again! Are you
                sure about this?
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    onClick={onSubmitDelete}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal
