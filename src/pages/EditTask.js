import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';

const EditTask = () => {
  const { id } = useParams();
  const taskList = useSelector(store => store.tasks)
  const currentTask = taskList.filter(task => task.id === id)
  const [values, setValues] = React.useState ({
    taskName: currentTask[0]?.taskName,
    taskTime: currentTask[0]?.taskTime
  })
  const route = useNavigate()

  const dispatch = useDispatch ();

  const EditSubmitHandler = () => {
    setValues({
      taskName:"",
      taskTime:""
    })
    dispatch ( editTask ( {
      id: id,
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
      <div className='w-11/12 md:w-2/4 mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-700 my-3'>Edit Task</div>
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
            defaultValue={values.taskTime}
            onChange = {(e) => setValues({...values, taskTime: e.target.value})} 
            className='p-3 rounded-sm border-2 border-emerald-500'>
            {children}
          </select>
        </div>
        <div className='flex justify-end'>
          <button onClick={EditSubmitHandler} className='py-3 px-5 bg-emerald-500 my-3 font-semibold text-white hover:bg-gray-900  rounded-sm'>Submit</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EditTask