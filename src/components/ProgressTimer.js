import { Progress } from 'antd'
import React from 'react'

const ProgressTimer = () => {
    const [percent, setPercent] = React.useState(1)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPercent(percent + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [percent])
    // one minute timer with progress bar

  return (
    <div className='bg-gray-900 p-5 rounded-xl'>
        <div className='text-gray-50 mb-2 text-sm'>Timer</div>
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