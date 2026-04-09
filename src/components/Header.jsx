import { Link } from 'react-router-dom';
import { FiFilm, FiUser, FiMail } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-gradient-to-tl from-pink-500  to-yellow-500  shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/vep" className="text-2xl font-bold text-primary flex items-center ">
            <FiFilm className="mr-2" /> Video Editor
          </Link>
          <div className="flex space-x-6">
            <Link to="/vep/about" className="flex items-center hover:text-secondary bg-white p-1 rounded-lg ">
              <FiUser className="mr-1" /> About
            </Link>
            <Link to="/vep/contact" className="flex items-center hover:text-secondary bg-white p-1 rounded-lg">
              <FiMail className="mr-1" /> Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}