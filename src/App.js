import React from 'react';
import TaskList from './components/TaskList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App lg:w-11/12 mx-auto my-10">
      <div className='mx-3 md:mx-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-3 md:gap-y-0'>
          <Timer/>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
