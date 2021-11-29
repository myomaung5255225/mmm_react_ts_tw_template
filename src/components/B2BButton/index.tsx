import React from 'react'
import './index.css'

interface bButtonProps {
  className?: string
  NextFunction?: () => void | any
  title?: string
  disabled?: boolean
  color?: 'primary' | 'secondray' | 'warning' | 'success' | 'danger'
  block?:boolean
}

export const Bbutton: React.FC<bButtonProps> = ({
  className,
  NextFunction,
  title,
  disabled = false,
  color = 'primary',
  block=false
}) => {
  return (
    <div className={`${className} ${block?'w-full':''} flex flex-col py-2`}>
      <button type='button'  onClick={NextFunction} disabled={disabled} className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${color==='primary'?'bg-primary':color==='secondray'?'bg-secondary':color==='warning'?'bg-warning':color==='success'?'bg-success':'bg-danger'}`} >
          {title}
      </button>
    </div>
  )
}
