import { ADD_TRANSFER, GET_PRODUCT, RECIEVE_ORDER, SHOW_TRANSFERS} from './types'

export const add_transfer = () => ({
    type: ADD_TRANSFER
})

export const show_transfer = (id) => ({
    type: SHOW_TRANSFERS,
    payload:id
})
export const recieve_transfer = (data) => ({
    type: RECIEVE_ORDER,
    data
})
export const get_products = () => ({
    type: GET_PRODUCT
})