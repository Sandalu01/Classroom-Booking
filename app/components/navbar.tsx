import Link from 'next/link';

const Navbar = () => {

    
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Classroom Booking System
        </div>
        <div className="flex space-x-4">
          <Link href="/home" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
          <Link href="/register" className="text-white hover:text-gray-400">
            Register
          </Link>
          <Link href="/classbook" className="text-white hover:text-gray-400">
            Class Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
