import React, {useEffect } from 'react'
import { useState} from 'react'
import BlogList from './BlogList'
const Blogs = () => {
    const [error, setError] =useState(null)
   const[myBlogs, setMyblogs]= useState(null)
   const [loading, setLoading]= useState(true)

useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res=>{
        if(!res.ok)
           throw Error("Error Connecting to the server")
        return res.json();
    })
    .then(data =>{
        setMyblogs(data)
        setLoading(false)
        setError(null)
    })
    .catch((err)=>{
        setError(err.message)
        setLoading(false);
    },1000)
},[])


    // const[name, setName] = useState('Nate')
    // const changeName = () => {
    //     setName('kamau')
    // }
    // const handleDelete = (id)=>{
    //     const newBlogs = myBlogs.filter(blog => blog.id !== id);
    //     setMyblogs(newBlogs);
    // }

  return (
        <div className="blog">
            {error && <div>{error}</div>}
            {myBlogs && <BlogList blog={myBlogs}/>}
            {loading && <div>Loading...</div>}
        </div>
      
  )
}

export default Blogs
