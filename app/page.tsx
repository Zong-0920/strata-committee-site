export default function Page() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to StrataMate</h2>
      <p className="text-lg text-gray-700 mb-6">Managing your building with clarity, transparency, and care.</p>
      <div className="flex justify-center space-x-4">
        <a href="/committee" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Meet the Committee</a>
        <a href="/contact" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">Contact Us</a>
      </div>
    </div>
  );
}
