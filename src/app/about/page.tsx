import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-gray-700">We are a company dedicated to XYZ.</p>
      </main>
      <Footer />
    </div>
  );
}
