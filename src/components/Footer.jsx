import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Ajay Chaurasiya Video Editor Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/ajaychaurasiya-cs/" className="hover:text-secondary transition-colors">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/ajaychaurasiya-cs/" className="hover:text-secondary transition-colors">
              <FiLinkedin className="text-xl" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}