import { createSlice } from "@reduxjs/toolkit";
const initioState = {
  listProduct: [],
};

export const product = createSlice({
  name: "phone",
  initialState: initioState,
  reducers: {
    //sử dụng để thay đổi trạng thái của ứng dụng dựa trên (action) được gửi lên slide
    setListProduct: (states, action) => {
      states.listProduct = action.payload;
    },
  },
});
export const { setListProduct } = product.actions;
export const getListProductReducer = (state) => {
  return state.product.listProduct; //Hàm này trả về mảng dữ liệu popularRadio từ trạng thái ứng dụng
};
const products = product.reducer;
export default products;
