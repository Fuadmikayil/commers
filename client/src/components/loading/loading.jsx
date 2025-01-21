import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center text-slate-900 dark:text-slate-200'> 
        <div className="loader"></div>

    </div>
  )
}

export default Loading