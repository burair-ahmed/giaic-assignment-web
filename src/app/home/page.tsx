import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className="p-10">
          <h2 className="text-2xl font-bold mb-5">What Our Clients Say</h2>
          <div className="space-y-5">
            <Testimonial name="John Doe" feedback="Great service and very reliable!" />
            <Testimonial name="Jane Smith" feedback="Professional team and quick response." />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
