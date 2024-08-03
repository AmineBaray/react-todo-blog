import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <>
            <div className="grid grid-cols-2 m-0 pl-32 p-3 bg-white drop-shadow-sm">
                <div>
                    <h1 className="text-3xl font-bold text-sky-700">
                    <a href="/">To-do Blog</a> 
                    </h1>
                </div>
                
                <div className="pl-40">
                    <Link to="/" className="hover:text-sky-700 text-xl">Home</Link>
                    <Link to="/NewBlog" className="pl-10 hover:text-sky-700 text-xl">New Blog</Link>
                </div>
            </div> 
        </>
    );
}
 
export default Navbar