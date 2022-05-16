import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';

const TaskList = () => {
    const taskList = [
        {
            id:1,
            taskName:"Task One",
            taskTime:"20",
        },
        {
            id:2,
            taskName:"Task two",
            taskTime:"20",
        },
        {
            id:3,
            taskName:"Task Three",
            taskTime:"20",
        },
    ]
    console.log(taskList)
  return (
      <div>
        <div className="flex justify-between bg-emerald-500 text-white py-5 px-7 rounded-2xl h-20">
            <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-900'>Task List</div>
            <button className="px-3 bg-gray-900 rounded-lg text-white hover:bg-white hover:text-black font-bold inline-flex items-center gap-1"> <span><IoIosAddCircleOutline className='h-5 w-5'/> </span> Add Task</button>
        </div>
        <div className=' my-3'>
            {taskList.map((task) => (
                <div key={task.id} className="bg-slate-200 py-4 rounded-xl my-2">
                    <div className='flex justify-between justify-items-center border-l-8 border-gray-900 py-2 px-3'>
                        <div className='font-semibold text-lg'>{task.taskName}</div>
                        <div className='font-semibold text-lg'>{task.taskTime} S</div>
                        <div className='flex gap-2 mr-3'>
                            <BiEdit className='h-5 w-5'/>
                            <AiOutlineDelete className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
  )
}

export default TaskList