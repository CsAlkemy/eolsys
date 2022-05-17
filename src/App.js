import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

function App() {
  return (
    <div className="App lg:w-11/12 mx-auto my-10">
      <div className='mx-3 md:mx-0'>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/add-task' element={<AddTask/>} />
          <Route path='/edit-task/:id' element={<EditTask/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
