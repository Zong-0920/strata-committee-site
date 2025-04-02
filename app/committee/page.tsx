const committee = [
  { name: "Alex Tan", role: "Chairperson" },
  { name: "Maria Gomez", role: "Secretary" },
  { name: "James Lee", role: "Treasurer" },
  { name: "Nina Park", role: "Member" },
  { name: "Tom Reilly", role: "Member" }
];

export default function CommitteePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Strata Committee Members</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {committee.map((person, index) => (
          <li key={index} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="text-lg font-medium">{person.name}</h3>
            <p className="text-sm text-gray-600">{person.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
