import React from 'react'
import './index.css'

interface bLoaderProps {
  className?: string
}

export const Bloader: React.FC<bLoaderProps> = ({ className }) => {
  return (
    <div
      className={`${className} absolute z-50 bg-secondary bg-opacity-30 flex justify-center items-center content-center min-h-screen w-full`}
    >
      <span className='animate-spin text-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          fill='currentColor'
          className='bi bi-box-seam'
          viewBox='0 0 16 16'
        >
          <path d='M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z' />
        </svg>
      </span>
    </div>
  )
}
