import { useParams } from "react-router-dom";
function BlogDetails() {
    const { id } = useParams();
  return (
    <>
        <div className="ml-64 pt-20 w-2/3">
            <h1 className="text-xl font-semibold">Blog Details - { id }</h1>
        </div>
    </>
  );
}

export default BlogDetails
