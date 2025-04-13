export default function Committee() {
  return (
    <div className="p-8 max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Meet the Committee</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Alex Chen', role: 'Chairperson' },
          { name: 'Jane Smith', role: 'Secretary' },
          { name: 'David Lee', role: 'Treasurer' },
        ].map((member, index) => (
          <div key={index} className="bg-white p-6 rounded shadow text-center">
            <div className="h-24 w-24 mx-auto mb-4 bg-blue-100 rounded-full"></div>
            <h2 className="text-xl font-semibold text-blue-700">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}