export default function ServiceCard({ title, description }) {
    return (
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  