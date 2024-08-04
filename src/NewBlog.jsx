import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function NewBlog () {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        // preventDefault stop the page reload because the form by default reload!
        e.preventDefault();
        const blog = {title, author, body};
        setIsPending(true);
        fetch("http://localhost:8000/blogs" , {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("the blog is added");
            setIsPending(false);
            navigate('/');
        })
    }
    return ( 
        <>
            <div className="ml-64 pt-20 w-2/3">
                <h2 className="text-4xl font-medium p-5">Add a New Blog</h2>
                <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-gray-700 text-xl font-bold m-5">Blog title:</label>
                    <input
                     type="text"
                     required
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-gray-700 text-xl font-bold m-5">Blog author:</label>
                    <input
                     type="text"
                     required
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                      focus:outline-none focus:shadow-outline"
                    />
                    <label className='block text-gray-700 text-xl font-bold m-5'>Blog body:</label>
                    <textarea 
                    required
                    value={body}
                     onChange={(e) => setBody(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                     focus:outline-none focus:shadow-outline"></textarea>
                    
                    { !isPending && <button 
                    className="m-4 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none
                     focus:ring-sky-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-sky-600
                      dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                        Add blog</button>}
                    { isPending && <button disabled
                    className="m-4 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none
                     focus:ring-sky-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-sky-600
                      dark:hover:bg-sky-700 dark:focus:ring-sky-800" >
                        Adding blog.....</button>}
                </form>
            </div>
            
        </>
    )
}
 
export default NewBlog