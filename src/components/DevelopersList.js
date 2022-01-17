import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllDevelopers, selectDeveloper } from '../actions'

export default function DevelopersList() {
  const dispatch = useDispatch()
  const developersList = useSelector(state => state.developersList)

  useEffect(() => {
    dispatch(listAllDevelopers())
  }, [])

  return (
    <div>
      {developersList.map((developer, indx) => {
        return (
          <div className="developers-list" key={indx}>
            <div className='title'>{developer.name}</div>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(selectDeveloper(developer))}
                >
                Show Details
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
