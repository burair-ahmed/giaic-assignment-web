import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
