export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-lg font-light">&copy; {new Date().getFullYear()} Burair Ahmed. All rights reserved.</p>
      </div>
    </footer>
  );
}
