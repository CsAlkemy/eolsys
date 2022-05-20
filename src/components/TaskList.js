import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {Modal} from 'antd';
import { deleteTask } from '../features/taskSlice';
import EditTaskModal from './EditTaskForm';
import AddTaskForm from './AddTaskForm';


const TaskList = () => {
    const taskList = useSelector(store => store.tasks)
    const [editModal, setEditModal] = React.useState(false);
    const [addModal, setAddModal] = React.useState(false);
    const [currentTask, setCurrentTask] = React.useState({
        id: '',
        taskName: '',
        taskTime: ''
    });
    const dispatch = useDispatch()

    // delete modal
    const { confirm } = Modal;
    function showDeleteConfirm(taskId) {
        confirm({
          title: 'Are you sure delete this task?',
          icon: <ExclamationCircleOutlined />,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            dispatch (deleteTask({id:taskId}))
          },
        });
      }
    //delete model end

    //edit modal
    const showEditModal = (id, taskName, taskTime) => {
        setCurrentTask({
            id: id,
            taskName: taskName,
            taskTime: taskTime
        });
        setEditModal(true);
    };
    const handleEditCancel = () => {
      setTimeout(() => {
        setEditModal(false);
      }, 500);
    };
    //edit modal end

    //Add modal logic

    const showModal = () => {
        setAddModal(true);
    };
    const handleCancel = () => {
        setAddModal(false);
    };
  //Add model logic end
  
    const renderTaskList = () => taskList.map(task => (
        <div key={task.id} className="bg-slate-200 py-4 rounded-xl my-2">
            <div className='grid grid-cols-5 justify-between justify-items-center border-l-8 border-gray-900 py-2 px-3'>
                <div className='font-semibold col-span-3 text-lg place-self-start'>{task.taskName}</div>
                <div className='font-semibold text-lg col-span-1'>{task.taskTime} S</div>
                <div className='flex gap-1 mr-3 col-span-1'>
                    <div onClick={()=>showEditModal(task?.id, task?.taskName, task?.taskTime)}>
                        <BiEdit className='h-7 w-7 hover:bg-gray-50 rounded-full cursor-pointer p-1'/>
                    </div>
                    <AiOutlineDelete 
                        onClick={()=>{
                            showDeleteConfirm(task.id)
                            }} 
                        type="dashed" 
                        className='h-7 w-7 hover:bg-gray-50 rounded-full cursor-pointer p-1 text-red-600' />
                </div>
            </div>
        </div>
    ))

  return (
      <div>
        <div className="flex justify-between bg-emerald-500 text-white py-5 px-7 rounded-2xl h-20">
            <div className='text-2xl md:text-3xl tracking-wide font-bold text-gray-900'>Task List</div>
            <button onClick={showModal} className='px-3 bg-gray-900 rounded-lg text-white hover:bg-white hover:text-black font-bold inline-flex items-center gap-1'>
                <span><IoIosAddCircleOutline className='h-5 w-5'/> </span>Add Task
            </button>
        </div>
        <div className=' my-3'>
            {taskList.length? renderTaskList() : <div className='text-2xl text-gray-900 text-center'>No Task Found!</div>}
        </div>
        <Modal
            title="Add Task"
            visible={addModal}
            onCancel={handleCancel}
            footer={null}
        >
            <AddTaskForm setAddModal = {setAddModal}/>
        </Modal>
        <Modal
            title="Edit Task"
            onCancel={handleEditCancel}
            visible={editModal}
            footer = {null}
        >
            <EditTaskModal setEditModal = {setEditModal} task = {currentTask} />
      </Modal>
      </div>
  )
}

export default TaskList