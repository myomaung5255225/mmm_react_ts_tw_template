import React from 'react'
import './index.css'

interface bInputProps {
  className?: string
  value: string | number | undefined
  setValue: React.Dispatch<React.SetStateAction<any>>
  id?: string
  name?: string
  placeHolder?: string
  required?: boolean
  label?: string
  type: 'text' | 'number' | 'password'
  icon?: React.Component
  readOnly?: boolean
}

export const BInput: React.FC<bInputProps> = ({
  className,
  value,
  setValue,
  name,
  id,
  placeHolder,
  required = true,
  label,
  type,
  icon,
  readOnly = false
}) => {
  return (
    <div className={`${className} w-full`}>
      <label className='text-sm text-secondary ml-2' htmlFor={name}>{label}</label>
      <input
        className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
        type={type}
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
        placeholder={placeHolder}
        id={id}
        name={name}
        readOnly={readOnly}
        required={required}
      />
    </div>
  )
}
