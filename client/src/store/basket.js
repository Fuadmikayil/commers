import { createSlice } from '@reduxjs/toolkit';

export const basket = createSlice({
  name: 'basket',
  initialState: {
    value: [
      {
        id: 1,
        color: 'red',
        size: 'XL',
        count: 1
      }
    ]
  },
  reducers: {
    addNewItemToBasket: (state, action) => {
      const newArr = state.value.concat(action.payload);
      state.value = newArr;
    }
  }
});

export const { addNewItemToBasket } = basket.actions;
export default basket.reducer;
