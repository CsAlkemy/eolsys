import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [values, setValues] = React.useState ({
    taskName:"",
    taskTime:"",
  })
  const dispatch = useDispatch()
  
  const route = useNavigate()
  const formSubmitHandler = () => {
    setValues({
      taskName:"",
      taskTime:""
    })
    dispatch(addTask ( {
      id: uuidv4(),
      taskName: values.taskName,
      taskTime: values.taskTime
    }))
    route('/')
  }

  const children = [];
  for (let i = 1; i <= 60; i++) {
    children.push(<option key={i.toString()} className="text-lg">{i.toString()}</option>);
  }
  
  return (
    <div className='container bg-slate-100 p-10 my-10 mx-auto'>
    <div className='w-full md:w-2/4 mx-auto'>
    <div className='flex justify-between items-center'>
      <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-700 my-3'>Add Task</div>
      <div>
        <Link to='/' className='px-3 py-3 bg-emerald-500 rounded-lg text-white hover:bg-gray-900 font-bold inline-flex items-center gap-1'>
            <span><AiOutlineHome className='h-5 w-5'/> </span>
        </Link>
      </div>
    </div>
    <div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="task" className='text-lg font-semibold text-gray-900'>Task Name</label>
        <input 
          name='task' 
          id="task" 
          type="text" 
          required
          value={values.taskName}
          onChange = {(e) => setValues({...values, taskName: e.target.value})}
          placeholder='Task Name'
          className='border-2 border-emerald-500 p-3 rounded-sm '/>
      </div>
      <div className='flex flex-col gap-1 mt-3'>
        <label className="text-lg font-semibold text-gray-900" htmlFor="time">
          Select Time(s)
        </label>
        <select 
          name="time" 
          id="time"
          required
          value={values.taskTime}
          onChange = {(e) => setValues({...values, taskTime: e.target.value})}
          className='p-3 rounded-sm border-2 border-emerald-500'>
          {children}
        </select>
      </div>
      <div className='flex justify-end'>
        <button onClick={formSubmitHandler} className='py-3 px-5 bg-emerald-500 my-3 font-semibold text-white hover:bg-gray-900 rounded-sm'>Submit</button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default AddTask