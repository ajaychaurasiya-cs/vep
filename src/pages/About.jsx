import { FiFilm, FiEdit, FiAward } from 'react-icons/fi';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-primary">About Me</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg mb-4">
          I'm a professional video editor with over 5 years of experience creating compelling visual stories.
        </p>
        <p className="text-lg">
          My expertise includes commercial editing, documentary storytelling, and creative post-production effects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FiFilm className="text-4xl mb-4 text-secondary" />
          <h3 className="text-xl font-semibold mb-2">500+ Projects</h3>
          <p className="text-gray-600">Completed video projects for diverse clients</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FiEdit className="text-4xl mb-4 text-secondary" />
          <h3 className="text-xl font-semibold mb-2">Professional Tools</h3>
          <p className="text-gray-600">Adobe Premiere, After Effects, Cartoon Animator 4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FiAward className="text-4xl mb-4 text-secondary" />
          <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
          <p className="text-gray-600">Recognized for creative excellence</p>
        </div>
      </div>
    </div>
  );
}