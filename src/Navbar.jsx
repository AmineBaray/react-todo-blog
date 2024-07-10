function Navbar() {
    return ( 
        <>
            <div className="grid grid-cols-2 m-0 p-4 bg-white drop-shadow-sm text-center">
                <div>
                    <h1 className="text-3xl font-bold text-cyan-400">
                    <a href="/">To-do Blog</a> 
                    </h1>
                </div>
                
                <div className="">
                    <a href="/" className="hover:text-cyan-400 text-xl">Home</a>
                    <a href="/create" className="pl-10 hover:text-cyan-400 text-xl">New Blog</a>
                </div>
            </div> 
        </>
    );
}
 
export default Navbar