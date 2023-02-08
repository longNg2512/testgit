import { INIT_STATE } from '../../constant'
import {
    getType,
    showCreatePostModal,
    hideCreatePostModal,
    deletePostModal,
    updatePostModal,
} from '../actions'

export default function modalReducers(state = INIT_STATE.postModal, action) {
    switch (action.type) {
        case getType(showCreatePostModal):
            return {
                ...state,
                showCreate: true,
                modalTitle: 'Create new post',
                modalSubmitName: 'Create',
            }
        case getType(hideCreatePostModal):
            return {
                ...state,
                showCreate: false,
                id: '',
                author: '',
                title: '',
                content: '',
                image: '',
            }
        case getType(deletePostModal.showDeletePostModal):
            return {
                ...state,
                showDelete: true,
                id: action.payload,
            }
        case getType(deletePostModal.hideDeletePostModal):
            return {
                ...state,
                showDelete: false,
                id: '',
            }
        case getType(updatePostModal.showUpdatePostModal):
            return {
                ...state,
                showCreate: true,
                id: action.payload._id,
                author: action.payload.author,
                title: action.payload.title,
                content: action.payload.content,
                image: action.payload.image,
                modalTitle: 'Update post',
                modalSubmitName: 'Update',
            }
        default:
            return state
    }
}
