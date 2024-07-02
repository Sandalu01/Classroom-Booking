import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="bg-gray-800 p-6 mt-80">
        <div className="container mx-auto text-center text-white">
          <div className="mb-4">
            <h2 className="text-lg font-bold">About Us</h2>
            <p className="mt-2">
              We are committed to providing the best classroom booking experience for students and faculty.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24 1.325 24H12.82v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.798.143v3.246l-1.918.001c-1.505 0-1.795.715-1.795 1.762v2.308h3.586l-.467 3.622h-3.119V24h6.116c.729 0 1.325-.596 1.325-1.324V1.325C24 .596 23.404 0 22.675 0z"/>
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.724-.949.564-2.001.974-3.118 1.195-.897-.955-2.178-1.555-3.594-1.555-2.72 0-4.926 2.206-4.926 4.923 0 .386.043.761.127 1.122-4.094-.205-7.725-2.166-10.157-5.144-.424.724-.666 1.562-.666 2.456 0 1.694.862 3.186 2.173 4.065-.8-.025-1.552-.246-2.21-.613v.062c0 2.366 1.684 4.342 3.92 4.791-.41.111-.843.171-1.287.171-.316 0-.623-.031-.924-.088.624 1.949 2.433 3.368 4.575 3.409-1.677 1.315-3.791 2.098-6.086 2.098-.395 0-.787-.023-1.174-.068 2.168 1.389 4.739 2.199 7.508 2.199 9.008 0 13.94-7.461 13.94-13.94 0-.213-.004-.426-.013-.637.958-.692 1.786-1.556 2.44-2.541z"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.23 0H1.771C.791 0 0 .784 0 1.748v20.504C0 23.215.792 24 1.771 24H22.23C23.209 24 24 23.216 24 22.252V1.748C24 .784 23.208 0 22.23 0zM7.077 20.452H3.538V8.993h3.539v11.459zM5.308 7.545c-1.135 0-2.054-.921-2.054-2.054 0-1.134.92-2.053 2.054-2.053s2.054.92 2.054 2.053c0 1.134-.919 2.054-2.054 2.054zm15.143 12.907h-3.537V14.81c0-1.344-.025-3.073-1.874-3.073-1.874 0-2.162 1.462-2.162 2.975v5.74h-3.538V8.993h3.396v1.563h.048c.472-.895 1.629-1.834 3.356-1.834 3.589 0 4.25 2.361 4.25 5.428v6.303z"/>
              </svg>
            </Link>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:info@classroombooking.com" className="hover:text-gray-400">info@classroombooking.com</a></p>
          </div>
          <p>&copy; {new Date().getFullYear()} Classroom Booking System. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  