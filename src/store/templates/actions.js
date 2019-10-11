export const namespace = '@TEMPLATES',
    LIST_REQUEST = `${namespace}/LIST_REQUEST`,
    LIST_SUCCESS = `${namespace}/LIST_SUCCESS`,
    LIST_CHANGE_REQUEST = `${namespace}/LIST_CHANGE_REQUEST`,
    LIST_CHANGE_SUCCESS = `${namespace}/LIST_CHANGE_SUCCESS`,
    LIST_ERROR = `${namespace}/LIST_ERROR`

export const fetchTemplates = () => ({
    type: LIST_REQUEST,
})

export const changeTemplates = (data) => ({
    type: LIST_CHANGE_REQUEST,
    payload: data,
})
