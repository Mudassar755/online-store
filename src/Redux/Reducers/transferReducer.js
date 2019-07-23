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
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
