import React, { useState, useCallback, useEffect } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    TextField,
    Button,
    IconButton,
} from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { useSelector, useDispatch } from 'react-redux'
import { modalState$ } from '../../redux/selectors'
import {
    hideCreatePostModal,
    createPost,
    updatePost,
} from '../../redux/actions'

const CreateUpdateModal = () => {
    const [data, setData] = useState({
        author: '',
        title: '',
        content: '',
    })
    const [localImage, setLocalImage] = useState([])
    const [imagePreview, setImagePreview] = useState([])

    const {
        showCreate,
        modalTitle,
        modalSubmitName,
        id,
        title,
        content,
        author,
        image,
    } = useSelector(modalState$)

    useEffect(() => {
        setData({
            author: author,
            title: title,
            content: content,
        })
        setImagePreview(image)
    }, [author, title, content, image])

    const dispatch = useDispatch()

    const onCloseCreate = useCallback(() => {
        dispatch(hideCreatePostModal())
        setImagePreview([])
        setLocalImage([])
    }, [dispatch])

    const handleOnChange = e =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

    const onSubmitCreate = useCallback(() => {
        if (!id) {
            dispatch(createPost.createPostRequest({ data, localImage }))
        } else {
            dispatch(updatePost.updatePostRequest({ data, id, localImage }))
        }

        onCloseCreate()
    }, [dispatch, data, onCloseCreate, id, localImage])

    const onChangeUploadFile = e => {
        const { files } = e.target
        console.log([...[...files]])
        let filePreview = []
        let localFile = []
        const selected = [...[...files]]
        selected.forEach(i => filePreview.push(URL.createObjectURL(i)))
        selected.forEach(i => localFile.push(i))
        setImagePreview(filePreview)
        setLocalImage(localFile)
    }

    return (
        <Dialog open={showCreate} fullWidth={true} onClose={onCloseCreate}>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogContent>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                    <TextField
                        autoFocus
                        name="author"
                        label="Author"
                        multiline
                        variant="standard"
                        value={data.author}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ mt: 5 }}
                        name="title"
                        label="Title*"
                        multiline
                        variant="standard"
                        value={data.title}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ mt: 5 }}
                        name="content"
                        label="Content*"
                        multiline
                        variant="standard"
                        value={data.content}
                        onChange={handleOnChange}
                    />
                </FormControl>

                <IconButton
                    sx={{ mt: 2 }}
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                >
                    <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={onChangeUploadFile}
                    />
                    <PhotoCamera />
                </IconButton>
                <img src={imagePreview} alt="" width="95%" />
            </DialogContent>
            <DialogActions sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={onSubmitCreate}
                >
                    {modalSubmitName}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateUpdateModal
