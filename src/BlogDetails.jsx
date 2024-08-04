import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
function BlogDetails() {
    const { id } = useParams();
    const {data: blog, Pending, error} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();
    const handlClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
  return (
    <>
        <div className="ml-64 pt-20 w-2/3">
            {error && <div className='flex items-center justify-center text-3xl text-red-600 mt-8'>{error}</div>}
            {Pending && <div className='flex items-center justify-center text-3xl mt-8'>Loading....</div>}
            {blog && (
                <article>
                    <h2 className='text-7xl font-bold text-sky-700'>{blog.title}</h2>
                    <p className='p-2 text-xl'>written by <u className="text-sky-500">{blog.author}</u></p>
                    <p className='p-2 text-xl'>{blog.body}</p>
                    <button
                        onClick={handlClick}
                        className="m-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none
                        focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-red-600
                        dark:hover:bg-red-700 dark:focus:ring-red-800" >
                        Delete blog
                    </button>
                </article> 
            )}
        </div>
    </>
  );
}

export default BlogDetails
