import {useState} from 'react'
function NewBlog () {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    return ( 
        <>
            <div className="ml-64 pt-20 w-2/3">
                <h2 className="text-4xl font-medium p-5">Add a New Blog</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Blog title:</label>
                    <input
                     type="text"
                     required
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label className="block text-gray-700 text-sm font-bold mb-2">Blog author:</label>
                    <input
                     type="text"
                     required
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label>Blog body:</label>
                    <textarea 
                    required
                    value={body}
                     onChange={(e) => setBody(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    <button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add blog</button>
                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
                </form>
            </div>
            
        </>
    )
}
 
export default NewBlog