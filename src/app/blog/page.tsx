import BlogCard from '../components/BlogCard';

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-10">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="col-span-6">
            <BlogCard 
              title="Latest Trends in Web Development" 
              summary="Explore the current trends and future directions in web development." 
              imageUrl="/images/blog-trends.jpg" 
            />
          </div>
          <div className="col-span-6">
            <BlogCard 
              title="Latest Trends in Web Development" 
              summary="Explore the current trends and future directions in web development." 
              imageUrl="/images/blog-trends.jpg" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}
