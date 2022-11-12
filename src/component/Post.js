import React from 'react'

const Post = ({ posts, loading }) => {
    if(loading){  
        return <h1>Loading, please wait...</h1>
    }
  return (
    <div className='list-group m-b4'>
        <ul>
                    {posts.map( post => (
                    <li key={post.id}>
                        {post.title}
                        </li>
                         ))}

         </ul>
    </div>
  )
}

export default Post