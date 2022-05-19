import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiEdit} from 'react-icons/bi';
import {AiOutlineDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../features/taskSlice';
import React from 'react';
import { Button, Modal} from 'antd';
import { addTask } from '../features/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';


const TaskList = () => {
    const taskList = useSelector(store => store.tasks)
    const [task, setTask] = React.useState ({
        taskName:"",
        taskTime:"",
      })
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

    //modal logic
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const formSubmitHandler = () => {
        setTask({
            taskName:"",
            taskTime:""
          })
          dispatch(addTask ( {
            id: uuidv4(),
            taskName: task.taskName,
            taskTime: task.taskTime
          }))
        setConfirmLoading(true);
        setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        }, 400);
    };

    const handleCancel = () => {
        setVisible(false);
      };
  //model logic end
    const renderTaskList = () => taskList.map(task => (
        <div key={task.id} className="bg-slate-200 py-4 rounded-xl my-2">
            <div className='grid grid-cols-5 justify-between justify-items-center border-l-8 border-gray-900 py-2 px-3'>
                <div className='font-semibold col-span-3 text-lg place-self-start'>{task.taskName}</div>
                <div className='font-semibold text-lg col-span-1'>{task.taskTime} S</div>
                <div className='flex gap-1 mr-3 col-span-1'>
                    <Link to={`/edit-task/${task.id}`}>
                        <BiEdit className='h-7 w-7 hover:bg-gray-50 rounded-full cursor-pointer p-1'/>
                    </Link>
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
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            footer={[
            <Button key="2" onClick={handleCancel} className='bg-red-500 text-gray-100 hover:bg-red-900 hover:text-white' type='default'>Cancel</Button>,
            <Button key="3" type="default" onClick={formSubmitHandler} className='bg-emerald-500 text-gray-900 hover:bg-emerald-600 hover:text-white'>Submit</Button>
            ]}
        >
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-5">
                <label htmlFor="taskName" className="text-sm text-gray-600">Task Name</label>
                <input
                    id="taskName"
                    placeholder="Task Name"
                    required
                    type="text"
                    className="border border-gray-500 p-2 rounded-sm w-full"
                    value={task.taskName}
                    onChange = {(e) => setTask({...task, taskName: e.target.value})}
                />
                </div>
                <div className="col-span-5">
                <label htmlFor="taskTime" className="text-sm text-gray-600">Task Time</label>
                <input
                    id="taskTime"
                    placeholder="Task Time"
                    required
                    type="number"
                    className="border border-gray-500 p-2 rounded-sm w-full"
                    value={task.taskTime}
                    onChange = {(e) => setTask({...task, taskTime: e.target.value})}
                />
                </div>
            </div>
        </Modal>
      </div>
  )
}

export default TaskList