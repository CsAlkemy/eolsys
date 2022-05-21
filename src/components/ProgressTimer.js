import { SmileOutlined } from '@ant-design/icons';
import { notification, Progress } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const ProgressTimer = (props) => {
  const { start, setIsPlay } = props;
  const [percent, setPercent] = React.useState(0)
  const [count, setCount] = React.useState(1)
  const taskList = useSelector(store => store.tasks)

  React.useEffect(() => {
      if (start === true && percent < 100 && taskList.length > 0) {
        const interval = setInterval(() => {
          setPercent(percent + 100/60);
          setCount(count + 1);
        }, 1000)
        return () => clearInterval(interval)
      } else if ( count+1 === 62) {
        setIsPlay(false)
        setPercent(0)
        setCount(1)
      } else if(taskList.length <= 0 && start === true) {
        openNotification("Please Add task first")
      }
  }, [percent, start, setIsPlay, count, taskList])

  const openNotification = (task) => {
      notification.open({
        message: `${task} started`,
        bottom: 50,
        duration: 1.5,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
  } 

  const Time = []
  const dataList = () => {
    const taskArray = [...taskList];
    const sortedTask = taskArray?.sort((a,b) => (a.taskTime) - (b.taskTime))
    let counter = 0;
    const CustomData =[]
    for (let i = 0; i < sortedTask.length; i++) {
      counter += sortedTask[i]?.taskTime;
      if (counter < 60) {
        const dataNew = {
          name: sortedTask[i]?.taskName,
          time:sortedTask[i]?.taskTime,
        }
        CustomData.push(dataNew);
        Time.push(dataNew)
      }
    }
  }
  dataList()
  const timerNotification = () => {
    if (count && Time[0]?.name && start === true) {
      const notifyTime= []
      for (let i=0 ; i < Time.length-2; i++) {
        const data = {
          name: Time[i+1]?.name,
          time: (Time[i]?.time)+(Time[i+1]?.time),
        }
        notifyTime.push(data)
      }
      if(count === 1){
        openNotification(Time[0]?.name)
      }
      if((Time[0]?.time+1)===count){
        openNotification(Time[1]?.name)
      }
      for (let i=0; i < notifyTime.length; i++) {
        if (count === notifyTime[i]?.time) {
          openNotification(notifyTime[i]?.name)
        }
      }
    } else if ( Time.length < 0 && start === true) {
      openNotification("Please Add Task first")
    }

  }
  timerNotification()

  return (
    <div className=' p-5 bg-gray-900 rounded-xl'>
      <div className='flex gap-5'>
        <div className=' text-gray-50 mb-2 text-sm'>Timer</div>
        <div className='text-gray-50 mb-2 text-sm font-bold'>{count} Secound</div>
      </div>
        <div className='mb-2'>
          <Progress 
              percent={percent} 
              strokeWidth={25} 
              strokeLinecap="square" 
              showInfo={false}
              max={60}
              min={0}
            />
      </div>
    </div>
  )
}

export default ProgressTimer