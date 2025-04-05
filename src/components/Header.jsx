import { Link } from 'react-router-dom';
import { FiFilm, FiUser, FiMail } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <FiFilm className="mr-2" /> Video Editor
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center hover:text-secondary">
              <FiFilm className="mr-1" /> Portfolio
            </Link>
            <Link to="/about" className="flex items-center hover:text-secondary">
              <FiUser className="mr-1" /> About
            </Link>
            <Link to="/contact" className="flex items-center hover:text-secondary">
              <FiMail className="mr-1" /> Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}