import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-10 bg-white shadow rounded-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h1>
      {submitted ? <p className="text-green-600 font-semibold">Thank you for reaching out!</p> : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full border border-gray-300 p-2 rounded-md" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900">Send</button>
        </form>
      )}
    </div>
  );
}