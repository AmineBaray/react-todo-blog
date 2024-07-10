import './index.css';

function Home({blogs, title, HandlDelete}) {
/*
    const blogs = props.blogs;
    const title = props.title;
*/ 
  return (
    <>
      <div className='container mt-4 ml-80'>
        <h1 className='text-4xl m-6'>
            {title}
        </h1>
      {blogs.map((blog)=>(
        <div className='bg-white drop-shadow-sm hover:drop-shadow-md m-2 p-4 w-3/5' key={blog.id}>
          <h2 className='text-2xl p-3 text-cyan-400'>{blog.title}</h2>
          <p className='p-2'>written by {blog.author}</p>
          <button onClick={()=>{
            HandlDelete(blog.id)
          }} className='bg-red-200 p-2 rounded-md'>Delete blog</button>
        </div>
        ))}

      </div>
    </>
  )
}

export default Home
