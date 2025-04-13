export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <header className="bg-blue-800 text-white p-6">
        <h1 className="text-3xl font-bold">Strata Management</h1>
        <p className="text-sm">Efficiently managing your building with transparency and ease.</p>
      </header>
      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">To maintain a safe, well-managed and cooperative living environment for all residents and owners.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Transparent financial reporting</li>
            <li>Committee contact and responsibilities</li>
            <li>Access to important documents</li>
          </ul>
        </section>
      </main>
    </div>
  );
}