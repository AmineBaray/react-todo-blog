import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
function BlogDetails() {
    const { id } = useParams();
    const {data: blogs, Pending, error} = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <>
        <div className="ml-64 pt-20 w-2/3">
            {error && <div className='flex items-center justify-center text-3xl text-red-600 mt-8'>{error}</div>}
            {Pending && <div className='flex items-center justify-center text-3xl mt-8'>Loading....</div>}
            {blogs && (
                <article>
                    <h2 className='text-7xl font-bold text-sky-700'>{blogs.title}</h2>
                    <p className='p-2 text-xl'>written by <u className="text-red-500">{blogs.author}</u></p>
                    <p className='p-2 text-xl'>{blogs.body}</p>
                </article> 
            )}
        </div>
    </>
  );
}

export default BlogDetails
