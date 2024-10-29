import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-5">Our Services</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Service 1" content="Description of Service 1" />
          <Card title="Service 2" content="Description of Service 2" />
          <Card title="Service 3" content="Description of Service 3" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
