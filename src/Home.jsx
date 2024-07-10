import './index.css';
import { useState } from 'react';
import BlogList from './BlogList'
function Home() {

  const [blogs, setBlogs] = useState([
    { id:1 ,
      title:"Blog",
      body: "Full stack dev", 
      author:"Amine"},

    {id:2 , title:"Blog 2", body: "lorem do...", author:"Marwane"},
    {id:3 , title:"Blog 3", body: "lorem do...", author:"Amine"},
    {id:4 , title:"Blog 4", body: "lorem do...", author:"Maryam"}
  ]);


  /*
    make a function do new array with the id not selected!
    pass function as props into a components
  */ 
  const HandlDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <>
      <div className=''>
      <BlogList blogs={blogs} title="All Blogs!" HandlDelete={HandlDelete}/>

      {/* <BlogList blogs={blogs.filter((blog)=>(
        blog.author === "Amine"
      ))} title="Amine Blogs!"/> */}
      </div>
    </>
  )
}

export default Home
