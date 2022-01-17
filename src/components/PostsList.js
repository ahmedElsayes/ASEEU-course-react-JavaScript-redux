import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../actions'

export default function PostsList() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return (
    <div>
      {posts.map((post, indx) => {
        return (
          <p key={indx}> {JSON.stringify(post)} </p>
        )
      })}
    </div>
  )
}
