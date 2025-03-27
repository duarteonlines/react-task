import { ChevronRightIcon, TrashIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {

  const navigate = useNavigate()

  const onTaskClickHandler = (task) => {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)
    query.set('isCompleted', task.isCompleted)
    navigate(`/task?${query.toString()}`)
  }
  return (
    <div>
      <ul className='space-y-4 p-5 bg-gray-800 rounded-lg shadow-md'>
        {tasks.map((task) => (
          <li key={task.id} className='flex items-center justify-between gap-4'>
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-gray-700 text-white py-2 px-4 rounded-md w-full hover:cursor-pointer transition duration-300 ease-in-out ${task.isCompleted && "line-through opacity-60"}`}
            >
              {task.title}
            </button>
            <button onClick={() => onTaskClickHandler(task)}
              className="hover:cursor-pointer bg-gray-600 text-white p-2 rounded-md hover:bg-gray-500 transition duration-300 ease-in-out flex items-center justify-center"
            ><ChevronRightIcon className="w-5 h-5 " />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className='bg-red-500 text-white rounded-md p-2 hover:cursor-pointer transition duration-300 ease-in-out'
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
