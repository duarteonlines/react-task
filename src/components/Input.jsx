import React from 'react'

const Input = ({ value, onChange, type, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={`w-full p-3 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 ease-in-out text-white`}
        />
    )
}

export default Input