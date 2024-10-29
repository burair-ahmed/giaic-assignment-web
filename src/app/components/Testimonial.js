// components/Testimonial.js
export default function Testimonial({ name, feedback }) {
    return (
      <div className="p-4 border rounded shadow-lg text-center">
        <p className="italic">"{feedback}"</p>
        <h4 className="mt-2 font-semibold">{name}</h4>
      </div>
    );
  }
  