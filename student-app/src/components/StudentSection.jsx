import React from 'react'
import AbsentStudents from './AbsentStudents'
import AllStudents from './AllStudents'
import PresentStudents from './PresentStudents'

function StudentSection() {
  return (
    <div className='Student-display'>
      <AllStudents />
      <PresentStudents />
      <AbsentStudents />
    </div>
  )
}

export default StudentSection