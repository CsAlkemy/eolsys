import React from 'react'
import TaskList from '../components/TaskList'
import Timer from '../components/Timer'

const Index = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-3 md:gap-y-0'>
          <Timer/>
          <TaskList />
      </div>
    </>
  )
}

export default Index