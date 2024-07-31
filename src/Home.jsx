import './index.css';
import { useState, useEffect } from 'react';
import BlogList from './BlogList'
function Home() {

  const [blogs, setBlogs] = useState(null);


  /*
    make a function do new array with the id not selected!
    pass function as props into a components
  */ 
  const HandlDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    const authors = blogs.map(blog => blog.author);
    console.log(authors);
  },[blogs]);

  /*
    check if useEffect of the authors change if i change this
  const [name, setName] = useState("amine");
  const clikkk = () => {
    setName("Done");
  }*/
  
  return (
    <>
      <div className=''>
      <BlogList blogs={blogs} title="All Blogs!" HandlDelete={HandlDelete}/>



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
