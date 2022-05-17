import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/taskSlice';

const TaskList = () => {
    const taskList = useSelector(store => store.tasks)
    const dispatch = useDispatch()
    const deleteTaskHandler = (taskId) => {
        dispatch (deleteTask({id:taskId}))
    }

    const renderTaskList = () => taskList.map(task => (
        <div key={task.id} className="bg-slate-200 py-4 rounded-xl my-2">
            <div className='grid grid-cols-5 justify-between justify-items-center border-l-8 border-gray-900 py-2 px-3'>
                <div className='font-semibold col-span-3 text-lg place-self-start'>{task.taskName}</div>
                <div className='font-semibold text-lg col-span-1'>{task.taskTime} S</div>
                <div className='flex gap-1 mr-3 col-span-1'>
                    <Link to={`/edit-task/${task.id}`}>
                        <BiEdit className='h-7 w-7 hover:bg-gray-50 rounded-full cursor-pointer p-1'/>
                    </Link>
                    <AiOutlineDelete onClick={ () => deleteTaskHandler(task.id)} className='h-7 w-7 hover:bg-gray-50 rounded-full cursor-pointer p-1 text-red-600' />
                </div>
            </div>
        </div>
    ))
  return (
      <div>
        <div className="flex justify-between bg-emerald-500 text-white py-5 px-7 rounded-2xl h-20">
            <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-900'>Task List</div>
            <Link to='/add-task' className='px-3 bg-gray-900 rounded-lg text-white hover:bg-white hover:text-black font-bold inline-flex items-center gap-1'>
                <span><IoIosAddCircleOutline className='h-5 w-5'/> </span>Add Task
            </Link>
        </div>
        <div className=' my-3'>
            {taskList.length? renderTaskList() : <div className='text-2xl text-gray-900'>No Task Found!</div>}
        </div>
      </div>
  )
}

export default TaskList