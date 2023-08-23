import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import CreateTask from './CreateTask';
import data from './../db.json'; //Mengimpor File Json



const Home = () => {
  const [tasks, setTasks] = useState(data);
  console.log(data);

  const handleCreateTask = (data) => {
    const newTask = [
      ...tasks, data
    ];
    setTasks(newTask);
  }

  return(
    <div className="App">
    <h1 class="mt-10 my-3 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-500">Task</span> Management</h1>
      <CreateTask onCreateTask={handleCreateTask} />
    <div className='container mx-auto py-5'>
    <h1 className="text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Task List</h1>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" className="px-6 py-3">
                  Name
              </th>
              <th scope="col" className="px-6 py-3">
                  Descripiton
              </th>
              <th scope="col" className="px-6 py-3">
                  Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                  Status
              </th>
              <th scope="col" className="px-6 py-3">
                  Action
              </th>
          </tr>
        </thead>
        <tbody>
        
          {tasks.map((task,i) => {
            return(
              <TaskList 
                key={i}
                task={task}
              />
            )
          })}
        </tbody>
      </table>
      <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
              <a href="a" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
              <a href="a" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  </div>
  
  )
}

export default Home;