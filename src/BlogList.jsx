import './index.css';
import { Link } from 'react-router-dom';
function Bloglist({blogs, title}) {
/*
    const blogs = props.blogs;
    const title = props.title;
*/ 
  return (
    <>
      <div className='ml-24 mt-10 mr-24'>
        <h1 className='text-5xl font-extrabold m-6'>
            {title}
        </h1>
        <div className="grid grid-cols-2 gap-2">
        {blogs.map((blog)=>(
        <div className='bg-gray-50 rounded-sm drop-shadow-sm hover:drop-shadow-lg p-4' key={blog.id}>
          <Link to={`/BlogDetails/${blog.id}`}>
          <h2 className='text-3xl font-bold p-3 text-sky-700'>{blog.title}</h2>
          <p className='p-2'>written by {blog.author}</p>
          <p className='p-2'>{blog.body}</p>
          </Link>
        </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Bloglist
