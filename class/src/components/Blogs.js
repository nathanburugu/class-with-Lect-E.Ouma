import React, {useState , useEffect } from 'react'
const Blogs = () => {
    const[myBlogs, setMyblogs] = useState([
        {id:1, title:'React-Library', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:2, title:'Bootstrap', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:3, title:'vue javascript', body:'N blog We will learn', author:'Nathan Burugu'},
        {id:4, title:'PHP', body:'N blog We will learn', author:'Nathan Burugu'}
    ]);
    const[name, setName] = useState('Nate')
    const changeName = () => {
        setName('kamau')
    }
    const handleDelete = (id)=>{
        const newBlogs = myBlogs.filter(blog => blog.id !== id);
        setMyblogs(newBlogs);
    }
    useEffect(()=>{
        console.log('use effect triggered');
        
    },[name]);
  return (
        <div className="blog">
            {myBlogs.map((blog)=>(
                <div className="preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by : {blog.author}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                    <button onClick={changeName} >Change Name </button>
                    <p>{name}</p>
                </div>
            ))}
        </div>
      
  )
}

export default Blogs
