import { createSlice} from '@reduxjs/toolkit'

const initialState = [];

const taskSlice = createSlice ({
    name:"tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },

        editTask: (state, action) => {
            const { id, taskName, taskTime } = action.payload;
            const currentTask = state.find( task=>task.id === id );
            if (currentTask) {
                currentTask.taskName = taskName;
                currentTask.taskTime = taskTime;
            }
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            const currentTask = state.find(task => task.id === id);
            if (currentTask) {
                return state.filter(task => task.id !== id);
            }
        }
    }
})

export const { addTask, editTask ,deleteTask} = taskSlice.actions;
export default taskSlice.reducer


