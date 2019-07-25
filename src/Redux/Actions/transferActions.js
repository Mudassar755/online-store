import { ADD_TRANSFER, GET_PRODUCT, RECIEVE_ORDER, SHOW_TRANSFERS} from './types'

export const add_transfer = (data) => ({
    type: ADD_TRANSFER,
    data
})

export const show_transfer = (transfer) => ({
    type: SHOW_TRANSFERS,
    transfer
})
export const recieve_transfer = (item) => ({
    type: RECIEVE_ORDER,
    item
})
export const get_products = () => ({
    type: GET_PRODUCT
})