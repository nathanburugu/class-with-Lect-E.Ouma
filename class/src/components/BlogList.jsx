import React from 'react'

const BlogList = (props) => {
    const myBlogs =props.blog;
  return (
    <div className="blog-list">
        {myBlogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by : {blog.author}</p>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    <button onClick={changeName} >Change Name </button>
                    <p>{name}</p> */}
                </div>
            ))}
      
    </div>
  )
}

export default BlogList
