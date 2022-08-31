import React, {useState , useEffect } from 'react'
const Blogs = () => {
    const[myBlogs, setMyblogs] = useState([
        {id:1, title:'React-Library', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:2, title:'React-Library', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:3, title:'React-Library', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:4, title:'React-Library', body:'N blog We will learn', author:'Nathan Burugu'}
    ]);
    const handleDelete = (id)=>{
        const newBlogs = myBlogs.filter(blog => blog.id !== id);
        setMyblogs(newBlogs);
    }
    useEffect(()=>{
        console.log('use effect triggered');
    },[]);
  return (
        <div className="blog">
            {myBlogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by : {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
      
  )
}

export default Blogs
