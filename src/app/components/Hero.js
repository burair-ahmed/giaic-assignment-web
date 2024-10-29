// components/Hero.js
export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Site</h2>
        <p className="text-lg">Discover our services and latest updates.</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-md hover:bg-gray-200">
          Get Started
        </button>
      </section>
    );
  }
  