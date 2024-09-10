import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: null,
  isDialogOpen: false,
  customEvents: {},
  range: [null, null],
  plan1Count: 0,
  plan2Count: 0,
};

const serviceCalendarSlice = createSlice({
  name: 'serviceCalendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setIsDialogOpen: (state, action) => {
      state.isDialogOpen = action.payload;
    },
    setCustomEvents: (state, action) => {
      state.customEvents = action.payload;
    },
    setRange: (state, action) => {
      state.range = action.payload;
    },
    setPlan1Count: (state, action) => {
      state.plan1Count = action.payload;
    },
    setPlan2Count: (state, action) => {
      state.plan2Count = action.payload;
    },
  },
});

export const { setSelectedDate, setIsDialogOpen, setCustomEvents, setRange, setPlan1Count, setPlan2Count } = serviceCalendarSlice.actions;
export default serviceCalendarSlice.reducer;
