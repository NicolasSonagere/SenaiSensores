import api from '../libs/api'

export const createUser = async (
    email,
    username,
    password
) => {
    const { data } = await api.post('create_user/', {
    email,
    username,
    password
    })

    return data
}

export const signIn = async (
    username,
    password
) => {
    const { data } = await api.post('token/', {
        username,
        password
    })
    return data
}