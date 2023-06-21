import React from 'react'
import { Header } from '../components';

import css from './styles/Courses.module.css'

const Courses = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Courses" /> 
          <div className={css.container}>
            <span className={css.tag}>
              
            </span>
            <span className={css.grey}>
              <span> 43 Lesson</span>
              <span> 4.5(14)</span>
            </span>
            <span>PHP Development Course</span>
            <span>
              <img src="./avatar2.jpg" alt="" />
              <span>Barry Tone</span>
            </span>
            <button>
              add
            </button>


          </div>

    </div>
  )
}

export default Courses