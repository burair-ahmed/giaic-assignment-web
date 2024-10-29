import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
   
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <ContactForm />
      </main>
   
    </div>
  );
}
