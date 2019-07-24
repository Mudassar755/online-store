import {
  ADD_TRANSFER,
  SHOW_TRANSFERS,
  GET_PRODUCT,
  RECIEVE_ORDER
} from "../Actions/types";

import uuid from "uuid";
const initialState = {
  products: [
    {
      id: uuid(),
      name: "samsung",
      desc: "brand new mobile phone",
      orderDate: "2019-03-15",
      qty: "5"
    },
    {
      id: uuid(),
      name: "glay",
      desc: "brand new led",
      orderDate: "2017-05-25",
      qty: "2"
    },
    {
      id: uuid(),
      name: "iPhone",
      desc: "brand new iPhone",
      orderDate: "2019-07-13",
      qty: "3"
    }
  ],
  isLoading: false,
  isError: null,
  items: [1,2]
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state
      };
    case ADD_TRANSFER:
      return {
        ...state
      };

    case SHOW_TRANSFERS:
      return {
        ...state,
      };

    case RECIEVE_ORDER:
      
      return {
        ...state,
        items:action.data
      };

    default:
      return state;
  }
}
