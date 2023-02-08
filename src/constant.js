export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: [],
        dataFetched: false,
        error: false,
    },
    postModal: {
        id: '',
        author: '',
        content: '',
        title: '',
        image: [],
        modalTitle: '',
        modalSubmitName: '',
        showCreate: false,
        showDelete: false,
    },
}
