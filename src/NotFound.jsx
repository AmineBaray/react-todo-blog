import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-56">
      <div className="text-9xl font-bold flex items-center justify-center">
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-800 via-sky-500 to-red-500 rounded-full blur-3xl"></span>
          <span className="relative">4</span>
        </span>
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-800 via-sky-500 to-red-500 rounded-full blur-3xl"></span>
          <span className="relative">0</span>
        </span>
        <span className="relative">
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-800 via-sky-500 to-red-500 rounded-full blur-3xl"></span>
          <span className="relative">4</span>
        </span>
      </div>
      <p className="mt-14 text-lg">This page doesn't exist. <Link to="/" className="text-sky-500 hover:underline">Go back home.</Link></p>
    </div>
  );
};

export default NotFound;