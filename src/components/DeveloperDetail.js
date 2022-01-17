import React from 'react'
import { useSelector } from 'react-redux'

export default function DeveloperDetail() {
  const selectedDeveloper = useSelector(state => state.selectedDeveloper)
  return (
    <>
      <div className='mb-3'>Name: <span>{selectedDeveloper?.name}</span></div>
      <div className='mb-3'>Age: <span>{selectedDeveloper?.age}</span></div>
      <div className='mb-3'>Skill: <span>{selectedDeveloper?.skill}</span></div>
    </>
  )
}
