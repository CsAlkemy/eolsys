import { configureStore } from '@reduxjs/toolkit';
import taskReduser from '../features/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReduser,
  },
});
