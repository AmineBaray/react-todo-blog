import './index.css';
import BlogList from './BlogList'
import useFetch from './useFetch';
function Home() {
  const {data: blogs, Pending, error} = useFetch("http://localhost:8000/blogs");
 /* make a function do new array with the id not selected!
    pass function as props into a components
   
  const HandlDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

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
