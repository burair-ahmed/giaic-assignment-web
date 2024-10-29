// components/Card.js
export default function Card({ title, content }) {
    return (
      <div className="p-4 border rounded shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  }
  