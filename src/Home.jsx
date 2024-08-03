import './index.css';
import { useState, useEffect } from 'react';
import BlogList from './BlogList'
function Home() {

  const [blogs, setBlogs] = useState(null);
  const [Pending, setPending] = useState(true);
  const [error , setError] = useState(null);
  /*
    make a function do new array with the id not selected!
    pass function as props into a components
   
  const HandlDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
*/
// fetch the data form json-server 
useEffect(()=>{
  setTimeout(()=>{
    fetch("http://localhost:8000/blogs")
      .then(res => {
        if(!res.ok){
            throw Error("Could not fetch the data for that resource check the URL !")
        }
        return res.json();
      })
      .then(data =>{
        setBlogs(data);
        setPending(false);
        setError(null);
      })
      .catch(err => {
          setPending(false);
          setError(err.message);
      })
  },2000);
  
},[]);

/*
  useEffect(()=>{
    const authors = blogs.map(blog => blog.author);
    console.log(authors);
  },[blogs]);

    check if useEffect of the authors change if i change this
  const [name, setName] = useState("amine");
  const clikkk = () => {
    setName("Done");
  }*/
  
  return (
    <>
      <div className=''>
        {error && <div className='flex items-center justify-center text-3xl text-red-600 mt-8'>{error}</div>}
        {Pending && <div className='flex items-center justify-center text-3xl mt-8'>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}



{/* 
      <p>{name}</p>
      <button onClick={clikkk}>doooooooone</button> 

      <BlogList blogs={blogs.filter((blog)=>(
        blog.author === "Amine"
      ))} title="Amine Blogs!"/> */}
      </div>
    </>
  )
}

export default Home
