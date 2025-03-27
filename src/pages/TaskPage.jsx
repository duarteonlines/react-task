import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ChevronLeftIcon } from 'lucide-react'

const TaskPage = () => {
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const description = searchParams.get('description')
    const isCompleted = searchParams.get('isCompleted')
    const task = {
        title,
        description,
        isCompleted: isCompleted === 'true'
    }

    const navigate = useNavigate()


    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="w-screen min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 flex justify-center items-center p-6">
            <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-2xl relative">
                <div className="absolute top-4 left-4">
                    <button
                        onClick={handleGoBack}
                        className="bg-yellow-500 text-black p-3 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out flex items-center justify-center"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                </div>
                <h1 className="text-4xl text-yellow-400 font-bold text-center mb-6">
                    {task.title}
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                    <span className="font-semibold text-gray-200">Descrição:</span> {task.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                    <p
                        className={`text-lg font-semibold ${task.isCompleted ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {task.isCompleted ? 'Concluída' : 'Pendente'}
                    </p>
                    <button
                        className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-400 transition duration-300 ease-in-out"
                    >
                        {task.isCompleted ? 'Marcar como Pendente' : 'Marcar como Concluída'}
                    </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6  border-gray-700 flex justify-between items-center">
                    <p className="text-sm text-gray-400">Criada em: {task.createdAt}</p>
                    <p className="text-sm text-gray-400">Atualizada em: {task.updatedAt}</p>
                </div>
            </div>
        </div>


    )
}

export default TaskPage
