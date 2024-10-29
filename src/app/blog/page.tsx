import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-5">Blog</h2>
        <div className="grid gap-4">
          <Card title="Blog Post 1" content="Summary of blog post 1" />
          <Card title="Blog Post 2" content="Summary of blog post 2" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
