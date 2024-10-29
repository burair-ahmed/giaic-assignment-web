export default function CTASection({ title, description, buttonText, buttonLink }) {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-10 mt-10 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <p className="text-lg mb-6">{description}</p>
        <a href={buttonLink} className="bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          {buttonText}
        </a>
      </section>
    );
  }
  