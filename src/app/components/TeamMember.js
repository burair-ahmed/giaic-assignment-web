import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function TeamMember({ name, position, image }) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 text-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-500" />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 mb-4">{position}</p>
      <div className="flex justify-center space-x-4 text-gray-600">
        <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
        <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
        <a href="#" className="hover:text-gray-800"><FaGithub /></a>
      </div>
    </div>
  );
}
