import React, { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const onTaskClick = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted }
            }
            return task
        })
        setTasks(newTasks)
    }

    const onDeleteTaskClick = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    const onAddTaskSubmit = (title, description) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            isCompleted: false
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className='w-screen min-h-screen bg-gray-900 flex justify-center items-center p-6'>
            <div className='w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl overflow-hidden flex flex-col h-[90vh]'>
                <h1 className='text-3xl text-yellow-400 font-bold text-center mb-6'>Gerenciador de Tarefas</h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <div className='flex-1 overflow-y-auto mt-4'>
                    <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
                </div>
            </div>
        </div>
    )
}

export default App