import React, { useState } from 'react'
import Input from './Input'

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className='space-y-6 p-6 bg-gray-700 rounded-lg shadow-md'>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder='Digite o título da tarefa'
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder='Digite a descrição da tarefa'
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos")
          }
          onAddTaskSubmit(title, description)
          setTitle("")
          setDescription("")
        }}
        className='w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out hover:cursor-pointer shadow-lg'
      >
        Adicionar tarefa
      </button>
    </div>
  )
}

export default AddTask
