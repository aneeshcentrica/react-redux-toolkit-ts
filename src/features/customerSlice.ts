import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFood {
  food: string;
  id: string;
}

const initialState: CustomerState = {
  value: [],
}

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action:PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFood: (state, action:PayloadAction<AddFood>) => {
      state.value.forEach((customer) => {
        if(customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      })
    }
  }
});

export const { addCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;
